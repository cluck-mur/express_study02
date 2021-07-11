'use strict'
const db = require("../../../models");
const ShopConst = require('../common/shop_const');
const ShopCartinData = require('./shop_cartin_data');
const ControllerConst = require('../../common/controller_const');
const SuperShopController = require('../common/super_shop_controller');

module.exports = class ShopCartinController extends SuperShopController {
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

        // カートに追加
        let productCode = req.query.procode;
        if (!req.session.cart) {
            req.session.cart = [];
        }
        if (!req.session.kazu) {
            req.session.kazu = [];
        }
        let wasAddedToCart = false;
        if (!req.session.cart.includes(productCode)) {
            req.session.cart.push(productCode);
            req.session.kazu.push(1);
            wasAddedToCart = true;
        }

        // View I/Fを作成
        let shopCartinData = new ShopCartinData(req.session.cart, req.session.kazu, wasAddedToCart);
        shopCartinData.sessionMemberLogin = sessionIsLogin;
        shopCartinData.sessionMemberName = sessionMemberName;
        let dataObject = shopCartinData.dataObject;

        // Viewを生成
        res.render(ShopConst.buildViewPath('shop_cartin'), dataObject);
    }
}