'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const StaffLoginConst = require('../common/staff_login_const');
const StaffTopData = require('./staff_top_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = class StaffTopController {
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
        // セッションIDを再生成
        sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            let staffTopData = new StaffTopData();

            staffTopData.sessionLogin = true;
            staffTopData.sessionStaffName = req.session.staff_name;

            res.render(StaffLoginConst.buildViewPath('staff_top'), staffTopData.dataObject);
        } else {
            res.redirect(ControllerConst.STAFF_NOLOGIN_NG_PATH);
        }
    }
}