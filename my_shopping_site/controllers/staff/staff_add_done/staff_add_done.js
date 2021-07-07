'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const StaffConst = require('../common/staff_const');
const SuperStaffData = require('../common/super_staff_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class StaffAddDoneController {
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
        // セッションIDを再生成
        sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {

            let staffName = req.body.name;
            let staffPass = req.body.pass;

            staffName = htmlspecialchars(staffName);
            staffPass = htmlspecialchars(staffPass);

            //--
            // データベースに保存
            //--
            db.mst_staff.create({ name: staffName, password: staffPass })
                .then(() => {
                    let superStaffData = new SuperStaffData();

                    superStaffData.sessionLogin = true;
                    superStaffData.sessionStaffName = req.session.staff_name;

                    res.render(StaffConst.buildViewPath('staff_add_done'), { name: staffName });
                })
                .catch((e) => {
                    // console.log(e);
                    // next();
                    res.send('ただいま障害により大変ご迷惑をお掛けしております。');
                });
        } else {

        }
    }
}