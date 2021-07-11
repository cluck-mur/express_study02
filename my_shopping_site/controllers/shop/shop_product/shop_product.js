'use strict'
const db = require("../../../models");
const ShopConst = require('../common/shop_const');
const ShopProductData = require('./shop_product_data');
const ControllerConst = require('../../common/controller_const');
const SuperShopController = require('../common/super_shop_controller');

module.exports = class ShopProductController extends SuperShopController {
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
        let sessionIsLogin = false;
        let sessionMemberName = null;
        if (req.session.member_login) {
            sessionIsLogin = true;
            sessionMemberName = req.session.member_name;
        }

        //--
        // データベースから取得
        //--
        let productCode = req.query.procode;
        db.mst_product.findAll({
            attributes: ['code', 'name', 'price', 'gazou'],
            where: {
                code: productCode
            }
        }).then((products) => {
            if (products && products.length > 0) {
                let productData = products[0];

                let shopProductData = new ShopProductData(
                    productData.code,
                    productData.name,
                    productData.price,
                    productData.gazou
                );
                shopProductData.sessionMemberLogin = sessionIsLogin;
                shopProductData.sessionMemberName = sessionMemberName;

                let dataObject = shopProductData.dataObject;
                res.render(ShopConst.buildViewPath('shop_product'), dataObject);
            } else {
                res.send('指定された商品は見つかりませんでした。');
            }
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });
    }
}