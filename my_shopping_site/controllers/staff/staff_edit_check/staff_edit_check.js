'use strict';
const htmlspecialchars = require('htmlspecialchars');
const StaffEditCheckData = require('./staff_edit_check_data');
const StaffConst = require('../common/staff_const');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class StaffEditCheckController {
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
    staffEditCheck(req, res, next) {
        // セッションIDを再生成
        sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            let staffCode = req.body.code;
            let staffName = req.body.name;
            let staffPass = req.body.pass;
            let staffPass2 = req.body.pass2;

            staffCode = htmlspecialchars(staffCode);
            staffName = htmlspecialchars(staffName);
            staffPass = htmlspecialchars(staffPass);
            staffPass2 = htmlspecialchars(staffPass2);

            let staffEditCheckData = new StaffEditCheckData(staffCode, staffName, staffPass, staffPass2);

            // スタッフ名を確認
            if (!staffName | staffName.length < 1) {
                staffEditCheckData.staffNameIsError = true;
                staffEditCheckData.staffNameErrorMessage = 'スタッフ名が入力されていません';
            } else {
                // 処理なし
            }

            // パスワードを確認
            if (!staffPass | staffPass.length < 1) {
                staffEditCheckData.staffPassIsError = true;
                staffEditCheckData.staffPassErrorMessage = 'パスワードが入力されていません。';
            } else if (!(staffPass === staffPass2)) {
                staffEditCheckData.staffPassIsError = true;
                staffEditCheckData.staffPassErrorMessage = 'パスワードが一致しません。';
            } else {
                // 処理なし   
            }

            let superStaffData = new SuperStaffData();

            superStaffData.sessionLogin = true;
            superStaffData.sessionStaffName = req.session.staff_name;

            let dataObject = staffEditCheckData.dataObject;
            res.render(StaffConst.buildViewPath('staff_edit_check'), dataObject);
            // res.send("OK");
        } else {

        }
    }
}