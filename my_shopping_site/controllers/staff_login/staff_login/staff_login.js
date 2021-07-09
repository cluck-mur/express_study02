'use strict';
const db = require("../../../models");
const StaffLoginConst = require('../common/staff_login_const');
const SuperController = require('../../common/super_controller');

module.exports = class StaffLoginController extends SuperController {
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
        res.render(StaffLoginConst.buildViewPath('staff_login'), {});
    }
}