'use strict'
const db = require("../../../models");
const StaffConst = require('../common/staff_const');
const SuperStaffData = require('../common/super_staff_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class StaffDispController {
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
    staffDisp(req, res, next) {
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
                res.render(StaffConst.buildViewPath('staff_disp'), { staffData: staffData });
            } else {
                res.send('指定されたスタッフは見つかりませんでした。');
            }
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });
    }
}