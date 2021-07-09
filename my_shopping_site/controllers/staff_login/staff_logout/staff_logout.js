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
        req.session.destroy();  // セッション破棄
        res.render(StaffLoginConst.buildViewPath('staff_logout'), {});
    }
}