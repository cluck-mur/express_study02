'use strict';
const ShopConst = require('../common/shop_const');
const ControllerConst = require('../../common/controller_const');
const SuperShopController = require('../common/super_shop_controller');

module.exports = class KazuChangeController extends SuperShopController {
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

        // セキュリティ対策
        let sanitized = this.htmlspecialchars(req);

        let max = sanitized.body.max;
        let kazu = [];
        if (max && max > 0) {
            for (let i=0; i<max; i++) {
                kazu.push(sanitized.body[`kazu${i}`]); 
            }
        }
        req.session.kazu = kazu;

        res.redirect('shop_cartlook');
    }
}