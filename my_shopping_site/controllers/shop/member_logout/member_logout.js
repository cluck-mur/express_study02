'use strict';
const ShopConst = require('../common/shop_const');
const SuperController = require('../../common/super_controller');

module.exports = class MemberLogoutController extends SuperController {
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
        // セッション破棄
        // req.session.destroy();  // セッション破棄
        if (req.session.member_login) {
            req.session.member_login = null;
        }
        if (req.session.member_code) {
            req.session.member_code = null;
        }
        if (req.session.member_name) {
            req.session.member_name = null;
        }        
        res.render(ShopConst.buildViewPath('member_logout'), {});
    }
}