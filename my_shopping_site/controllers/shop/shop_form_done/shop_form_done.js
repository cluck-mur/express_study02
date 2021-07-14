'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require("../../../models");
const ShopConst = require('../common/shop_const');
const ShopFormDoneData = require('./shop_form_done_data');
const ControllerConst = require('../../common/controller_const');
const SuperShopController = require('../common/super_shop_controller');

module.exports = class ShopFormDoneController extends SuperShopController {
    /**
     * constructor
     * コンストラクタ
     */
    constructor() {
        super();
    }

    /**
     * ルーティング ルート(/)
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    controller(req, res, next) {
        // セッションIDを再生成
        this.sessionRegerateId(req, res);
        // セッションを確認
        let sessionMemberLogin = false;
        let sessionMemberCode = null;
        let sessionMemberName = null;
        if (req.session.member_login) {
            sessionMemberLogin = true;
            sessionMemberCode = req.session.member_code;
            sessionMemberName = req.session.member_name;
        }

        // セキュリティ対策
        let sanitized = this.htmlspecialchars(req);

        // カートからデータを取得
        let cart = req.session.cart;
        let kazu = req.session.kazu;

        //--
        // データベースから取得
        //--
        if (cart) {
            let whereOpin = this._makeOpWhereOrCode(cart);
            db.mst_product.findAll({
                attributes: ['code', 'name', 'price', 'gazou'],
                where: {
                    [Op.or]: whereOpin
                }
            }).then((products) => {
                let shopFormDoneData = new ShopFormDoneData(
                    products,
                    cart,
                    kazu,
                    sanitized.body.onamae,
                    sanitized.body.email,
                    sanitized.body.postal1,
                    sanitized.body.postal2,
                    sanitized.body.address,
                    sanitized.body.tel,
                    sanitized.body.chumon,
                    sanitized.body.pass,
                    sanitized.body.danjo,
                    sanitized.body.birth
                );
                shopFormDoneData.sessionMemberLogin = sessionMemberLogin;
                shopFormDoneData.sessionMemberCode = sessionMemberCode;
                shopFormDoneData.sessionMemberName = sessionMemberName;

                let dataObject = shopFormDoneData.dataObject;

                if (sanitized.body.chumon == 'chumontouroku') {
                    let danjo = null;
                    if (dataObject.danjo == 'dan') {
                        danjo = 1;  // 男性
                    } else {
                        danjo = 2;  // 女性
                    }
                    //
                    // DBにお客様を登録する
                    //
                    db.dat_member.create({
                        password: dataObject.md5Pass,
                        name: dataObject.onamae,
                        email: dataObject.email,
                        postal1: dataObject.postal1,
                        postal2: dataObject.postal2,
                        address: dataObject.address,
                        tel: dataObject.tel,
                        danjo: danjo,
                        born: dataObject.birth
                    }).then((result) => {
                        // メンバーコードを追加設定
                        shopFormDoneData.code_member = result.code;
                        // データオブジェクトを再取得
                        dataObject = shopFormDoneData.dataObject;
                        // 次の処理
                        this._dbStoreSalesData(dataObject, req, res);
                    }).catch((e) => {
                        // console.log(e);
                        // next();
                        res.send('ただいま障害により大変ご迷惑をお掛けしております。');
                    });
                } else {
                    // 次の処理
                    this._dbStoreSalesData(dataObject, req, res);
                }
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {
            // リダイレクト
            res.redirect(ShopConst.buildViewPath('shop_cartlook'));
        }
    }

    /**
     * 
     * @param {*} dataObject 
     */
    _dbStoreSalesData(dataObject, req, res) {
        let code_member = null;
        if (dataObject.code_member) {
            code_member = dataObject.code_member;
        } else {
            code_member = dataObject.sessionMemberCode;
        }
        //
        // DBに注文データを保存する
        //
        db.dat_sales.create(
            {
                code_member: code_member,
                name: dataObject.onamae,
                email: dataObject.email,
                postal1: dataObject.postal1,
                postal2: dataObject.postal2,
                address: dataObject.address,
                tel: dataObject.tel
            },
            {
                returning: true
            }
        ).then((result) => {
            let lastcode = result.code;

            let createRecordData = [];
            for (let i = 0; i < dataObject.cart.length; i++) {
                let recordObject = {
                    code_sales: lastcode,
                    code_product: dataObject.cart[i].code,
                    price: dataObject.cart[i].price,
                    quantity: dataObject.cart[i].kazu
                }
                createRecordData.push(recordObject);
            }

            //
            // DBに注文明細を保存する
            //
            db.dat_sales_product.bulkCreate(createRecordData)
                .then((result) => {
                    //
                    // メール送信
                    //
                    this._sendMail(dataObject);

                    //
                    // カートを空にする
                    //
                    if (req.session.cart) {
                        req.session.cart = null;
                    }
                    if (req.session.kazu) {
                        req.session.kazu = null;
                    }

                    // Viewへ
                    res.render(ShopConst.buildViewPath('shop_form_done'), dataObject);
                }).catch((e) => {
                    // console.log(e);
                    // next();
                    res.send('ただいま障害により大変ご迷惑をお掛けしております。');
                });
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });
    }

    /**
     * 
     * @param {*} dataObject 
     */
    _sendMail(dataObject) {
        let mailMessage = '';
        mailMessage += (dataObject.onamae + " 様\n");
        mailMessage += "\n";
        mailMessage += "この度はご注文ありがとうございました。\n"
        mailMessage += "\n";
        mailMessage += "ご注文商品\n";
        mailMessage += "---------------\n";
        if (dataObject.cart && dataObject.cart.length > 0) {
            for (let i = 0; i < dataObject.cart.length; i++) {
                let syokei = dataObject.cart[i].price * dataObject.cart[i].kazu;
                mailMessage += `${dataObject.cart[i].name} ${dataObject.cart[i].price}円 x ${dataObject.cart[i].kazu}個 = ${syokei}円`;
                mailMessage += "\n";
            }
        }
        if (dataObject.chumon == 'chumontouroku') {
            mailMessage += "\n";
            mailMessage += "会員登録が完了いたしました。\n";
            mailMessage += "次回からメールアドレスとパスワードでログインしてください。\n";
            mailMessage += "ご注文が簡単にできるようになります。\n";
            mailMessage += "\n";
        }
        mailMessage += "送料は無料です。\n";
        mailMessage += "---------------\n";
        mailMessage += "\n";
        mailMessage += "代金は以下の口座にお振込みください。\n";
        mailMessage += "ろくまる銀行 やさい支店 普通口座 1234567\n";
        mailMessage += "入金確認が取れ次第、梱包、発送させていただきます。\n";
        mailMessage += "\n";
        mailMessage += "□□□□□□□□□□□□□□□□□□□□□□□□□□□\n";
        mailMessage += "　～安心野菜のろくまる農園～\n";
        mailMessage += "\n";
        mailMessage += "〇〇県六丸郡六丸村 123-4\n";
        mailMessage += "電話 090-6060-xxxx\n";
        mailMessage += "メール info@rokumarunouen.co.jp\n";
        mailMessage += "□□□□□□□□□□□□□□□□□□□□□□□□□□□\n";

        console.log(mailMessage);

        // （未実装）お客様へのメール送信
        // ここに実装する

        // （未実装）お店へのメール送信
        // ここに実装する

        console.log('メールを送信しました。');

    }
}