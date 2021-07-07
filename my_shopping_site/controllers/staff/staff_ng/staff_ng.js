'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const StaffConst = require('../common/staff_const');
const SuperStaffData = require('../common/super_staff_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class StaffNgController {
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
    staffNg(req, res, next) {
        // セッションIDを再生成
        sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            let superStaffData = new SuperStaffData();

            superStaffData.sessionLogin = true;
            superStaffData.sessionStaffName = req.session.staff_name;

            res.render(StaffConst.buildViewPath('staff_ng'), {});
        } else {

        }
    }
}