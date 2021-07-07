'use strict'
const StaffConst = require('../common/staff_const');
const SuperStaffData = require('../common/super_staff_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class StaffAddController {
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
    staffAdd(req, res, next) {
        // セッションIDを再生成
        sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            let superStaffData = new SuperStaffData();
            superStaffData.sessionLogin = true;
            superStaffData.sessionStaffName = req.session.staff_name;

            let dataObject = superStaffData.dataObject;
            res.render(StaffConst.buildViewPath('staff_add'), dataObject);
        } else {

        }
    }
}