'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const StaffConst = require('../common/staff_const');
const SuperStaffData = require('../common/super_staff_data');
const ControllerConst = require('../../common/controller_const');
const SuperStaffController = require('../common/super_staff_controller');

module.exports = class StaffNgController extends SuperStaffController {
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
        // セッションIDを再生成
        super.sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            let superStaffData = new SuperStaffData();
            superStaffData.sessionLogin = true;
            superStaffData.sessionStaffName = req.session.staff_name;

            let dataObject = superStaffData.dataObject;
            res.render(StaffConst.buildViewPath('staff_ng'), dataObject);
        } else {
            // NG画面にリダイレクト
            super.redirectToSessionNg(req, res);
        }
    }
}