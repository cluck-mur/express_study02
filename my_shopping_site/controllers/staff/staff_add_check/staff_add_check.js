'use strict';
const htmlspecialchars = require('htmlspecialchars');
const StaffAddCheckData = require('./staff_add_check_data');
const StaffConst = require('../common/staff_const');
const ControllerConst = require('../../common/controller_const');
const SuperStaffController = require('../common/super_staff_controller');

module.exports = class StaffAddCheckController extends SuperStaffController {
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
            let staffName = req.body.name;
            let staffPass = req.body.pass;
            let staffPass2 = req.body.pass2;

            staffName = htmlspecialchars(staffName);
            staffPass = htmlspecialchars(staffPass);
            staffPass2 = htmlspecialchars(staffPass2);

            let staffAddCheckData = new StaffAddCheckData(staffName, staffPass, staffPass2);

            // スタッフ名を確認
            if (!staffName | staffName.length < 1) {
                staffAddCheckData.staffNameIsError = true;
                staffAddCheckData.staffNameErrorMessage = 'スタッフ名が入力されていません';
            } else {
                // 処理なし
            }

            // パスワードを確認
            if (!staffPass | staffPass.length < 1) {
                staffAddCheckData.staffPassIsError = true;
                staffAddCheckData.staffPassErrorMessage = 'パスワードが入力されていません。';
            } else if (!(staffPass === staffPass2)) {
                staffAddCheckData.staffPassIsError = true;
                staffAddCheckData.staffPassErrorMessage = 'パスワードが一致しません。';
            } else {
                // 処理なし   
            }

            staffAddCheckData.sessionLogin = true;
            staffAddCheckData.sessionStaffName = req.session.staff_name;

            let dataObject = staffAddCheckData.dataObject;
            res.render(StaffConst.buildViewPath('staff_add_check'), dataObject);
            // res.send("OK");
        } else {
            // NG画面にリダイレクト
            super.redirectToSessionNg(req, res);
        }
    }
}