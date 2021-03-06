'use strict';
const StaffLoginConst = require('../common/staff_login_const');
const SuperController = require('../../common/super_controller');

module.exports = class StaffLogoutController extends SuperController {
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
        if (req.session.login) {
            req.session.login = null;
        }
        if (req.session.staff_code) {
            req.session.staff_code = null;
        }
        if (req.session.staff_name) {
            req.session.staff_name = null;
        }
        res.render(StaffLoginConst.buildViewPath('staff_logout'), {});
    }
}