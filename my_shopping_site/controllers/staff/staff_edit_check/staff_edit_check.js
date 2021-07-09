'use strict';
const StaffEditCheckData = require('./staff_edit_check_data');
const StaffConst = require('../common/staff_const');
const ControllerConst = require('../../common/controller_const');
const SuperStaffController = require('../common/super_staff_controller');

module.exports = class StaffEditCheckController extends SuperStaffController {
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
        this.sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            let sanitized = this.htmlspecialchars(req);
            let staffCode = sanitized.body.code;
            let staffName = sanitized.body.name;
            let staffPass = sanitized.body.pass;
            let staffPass2 = sanitized.body.pass2;

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

            staffEditCheckData.sessionLogin = true;
            staffEditCheckData.sessionStaffName = req.session.staff_name;

            let dataObject = staffEditCheckData.dataObject;
            res.render(StaffConst.buildViewPath('staff_edit_check'), dataObject);
            // res.send("OK");
        } else {
            // NG画面にリダイレクト
            this.redirectToSessionNg(req, res);
        }
    }
}