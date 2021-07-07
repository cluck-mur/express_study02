'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const StaffTopConst = require('../common/staff_login_const');

module.exports = new class StaffLoginController {
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
    staffLogin(req, res, next) {
        res.render(StaffTopConst.buildViewPath('staff_login'), {});
    }
}