'use strict';
const StaffLoginConst = require('../common/staff_login_const');
const SuperController = require('../../common/super_controller');

module.exports = class StaffNologinNgController extends SuperController {
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
        res.render(StaffLoginConst.buildViewPath('staff_nologin_ng'), {});
    }
}