'use strict';
const ShopConst = require('../common/shop_const');
const ControllerConst = require('../../common/controller_const');
const SuperShopController = require('../common/super_shop_controller');

module.exports = class ClearCartController extends SuperShopController {
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
        // カートをクリア
        if (req.session.cart) {
            req.session.cart = null;
        }

        res.render(ShopConst.buildViewPath('clear_cart'), {});
    }
}