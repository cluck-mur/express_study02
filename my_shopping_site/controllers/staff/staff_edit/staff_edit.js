'use strict'
const db = require("../../../models");
const StaffConst = require('../common/staff_const');
const StaffEditData = require('./staff_edit_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class StaffEditController {
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
    staffEdit(req, res, next) {
        // セッションIDを再生成
        sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            let staffCode = req.body.staffcode;

            //--
            // データベースから取得
            //--
            db.mst_staff.findAll({
                attributes: ['code', 'name'],
                where: {
                    code: staffCode
                }
            }).then((staffs) => {
                if (staffs && staffs.length > 0) {
                    let staffData = staffs[0];

                    let staffEditData = new StaffEditData(staffData.code, staffData.name);
                    staffEditData.sessionLogin = true;
                    staffEditData.sessionStaffName = req.session.staff_name;

                    let dataObject = staffEditData.dataObject;
                    res.render(StaffConst.buildViewPath('staff_edit'), dataObject);
                } else {
                    res.send('指定されたスタッフは見つかりませんでした。');
                }
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {

        }
    }
}