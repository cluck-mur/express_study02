'use strict';
const StaffLoginConst = require('../common/staff_login_const');

module.exports = class StaffLogoutController {
    /**
     * constructor
     * コンストラクタ
     */
    constructor() {
    }

    /**
     * ルーティング ルート(/)
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    controller(req, res, next) {
        req.session.destroy();  // セッション破棄
        res.render(StaffLoginConst.buildViewPath('staff_logout'), {});
    }
}