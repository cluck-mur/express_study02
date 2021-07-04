'use strict';
const db = require("../../models");
const htmlspecialchars = require('htmlspecialchars');
// const StaffAddDoneData = require('./staff_add_done_data');

module.exports = new class StaffAddDoneController{
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
    staffAddDone(req, res, next) {
        console.log(req.body);
        let staffName = req.body.name;
        let staffPass = req.body.pass;

        staffName = htmlspecialchars(staffName);
        staffPass = htmlspecialchars(staffPass);

        //--
        // データベースに保存
        //--
        db.mst_staff.findAll()
            .then((staffs) => {
                if (!staffs) {
                    console.log('データを取得できませんでした。');
                    res.send('Error');
                } else {
                    console.log('データを取得 OK');
                    for (let i = 0; i < staffs.length; i++) {
                        console.log(staffs[i].name);
                    }
                    res.render('staff_add_done', { staffs: staffs });
                }
            })
            .catch((e) => {
                console.log(e);
                // res.send('Error');
                next();
            });



        // let staffAddCheckData = new StaffAddCheckData(staffName, staffPass, staffPass2);

        // // スタッフ名を確認
        // if (!staffName | staffName.length < 1) {
        //     staffAddCheckData.staffNameIsError = true;
        //     staffAddCheckData.staffNameErrorMessage = 'スタッフ名が入力されていません';
        // } else {
        //     // 処理なし
        // }

        // // パスワードを確認
        // if (!staffPass | staffPass.length < 1) {
        //     staffAddCheckData.staffPassIsError = true;
        //     staffAddCheckData.staffPassErrorMessage = 'パスワードが入力されていません。';
        // } else if (!(staffPass === staffPass2)) {
        //     staffAddCheckData.staffPassIsError = true;
        //     staffAddCheckData.staffPassErrorMessage = 'パスワードが一致しません。';
        // } else {
        //     // 処理なし   
        // }
        
        // let dataObject = staffAddCheckData.dataObject;
        // res.render('staff_add_check', dataObject);

        // res.send("OK");
    }
}