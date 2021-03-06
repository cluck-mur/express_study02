'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require("../../../models");
const ShopConst = require('../common/shop_const');
const ShopCartlookData = require('./shop_cartlook_data');
const ControllerConst = require('../../common/controller_const');
const SuperShopController = require('../common/super_shop_controller');

module.exports = class CartLookController extends SuperShopController {
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
        let sessionMemberName = null;
        if (req.session.member_login) {
            sessionMemberLogin = true;
            sessionMemberName = req.session.member_name;
        }

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
                let shopCartlookData = new ShopCartlookData(products, cart, kazu);
                shopCartlookData.sessionMemberLogin = sessionMemberLogin;
                shopCartlookData.sessionMemberName = sessionMemberName;

                let dataObject = shopCartlookData.dataObject;
                res.render(ShopConst.buildViewPath('shop_cartlook'), dataObject);
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {
            let shopCartlookData = new ShopCartlookData(null);
            shopCartlookData.sessionMemberLogin = sessionMemberLogin;
            shopCartlookData.sessionMemberName = sessionMemberName;

            let dataObject = shopCartlookData.dataObject;
            res.render(ShopConst.buildViewPath('shop_cartlook'), dataObject);
        }
    }

    // /**
    //  * 
    //  * @param {*} cart 
    //  * @returns 
    //  */
    // _makeOpWhereOr(cart) {
    //     let op = [];
    //     cart.forEach((value, key) => {
    //         let pushObj = { code: value };
    //         op.push(pushObj);
    //     });
    //     return op;
    // }
}