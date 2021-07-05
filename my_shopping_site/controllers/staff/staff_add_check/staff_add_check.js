'use strict';
const htmlspecialchars = require('htmlspecialchars');
const StaffAddCheckData = require('./staff_add_check_data');
const StaffConst = require('../common/staff_const');

module.exports = new class StaffAddCheckController{
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
    staffAddCheck(req, res, next) {
        console.log(req.body);
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
        
        let dataObject = staffAddCheckData.dataObject;
        res.render(StaffConst.buildViewPath('staff_add_check'), dataObject);
        // res.send("OK");
    }
}