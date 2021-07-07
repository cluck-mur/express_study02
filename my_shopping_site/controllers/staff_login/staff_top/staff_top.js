'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const StaffLoginConst = require('../common/staff_login_const');

module.exports = new class StaffTopController {
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
    staffTop(req, res, next) {
        res.render(StaffLoginConst.buildViewPath('staff_top'), {});
    }
}