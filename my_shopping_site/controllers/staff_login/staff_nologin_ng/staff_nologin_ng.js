'use strict';
const StaffLoginConst = require('../common/staff_login_const');

module.exports = new class StaffNologinNgController {
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
     staffNologinNg(req, res, next) {
        res.render(StaffLoginConst.buildViewPath('staff_nologin_ng'), {});
    }
}