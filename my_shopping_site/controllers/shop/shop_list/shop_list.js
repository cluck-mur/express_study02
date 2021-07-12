'use strict';
const db = require("../../../models");
const ShopConst = require('../common/shop_const');
const ShopListData = require('./shop_list_data');
const ControllerConst = require('../../common/controller_const');
const SuperShopController = require('../common/super_shop_controller');

module.exports = class ShopListController extends SuperShopController {
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
        //--
        // データベースから取得
        //--
        db.mst_product.findAll({
            attributes: ['code', 'name', 'price', 'gazou']
        }).then((products) => {
            let shopListData = new ShopListData(products);
            shopListData.sessionMemberLogin = sessionMemberLogin;
            shopListData.sessionMemberName = sessionMemberName;

            let dataObject = shopListData.dataObject;
            res.render(ShopConst.buildViewPath('shop_list'), dataObject);
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });
    }
}