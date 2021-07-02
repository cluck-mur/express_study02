'use strict';
const htmlspecialchars = require('htmlspecialchars');
const StaffAddCheckReslt = require('./staff_add_check_result');

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

        let staffAddCheckReslt = new StaffAddCheckReslt(staffName, staffPass, staffPass2);

        // スタッフ名を確認
        if (!staffName | staffName.length < 1) {
            staffAddCheckReslt.staffNameIsError = true;
            staffAddCheckReslt.staffNameErrorMessage = 'スタッフ名が入力されていません';
        } else {
            // 処理なし
        }

        // パスワードを確認
        if (!staffPass | staffPass.length < 1) {
            staffAddCheckReslt.staffPassIsError = true;
            staffAddCheckReslt.staffPassErrorMessage = 'パスワードが入力されていません。';
        } else if (!(staffPass === staffPass2)) {
            staffAddCheckReslt.staffPassIsError = true;
            staffAddCheckReslt.staffPassErrorMessage = 'パスワードが一致しません。';
        } else {
            // 処理なし   
        }
        
        //let staffName
        res.render('staff_add_check', staffAddCheckReslt.resultObject);
        // res.send("OK");
    }
}