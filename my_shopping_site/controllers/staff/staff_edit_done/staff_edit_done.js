'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const StaffConst = require('../common/staff_const');

module.exports = new class StaffEditDoneController {
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
    staffEditDone(req, res, next) {
        console.log(req.body);
        let staffCode = req.body.code;
        let staffName = req.body.name;
        let staffPass = req.body.pass;

        staffCode = htmlspecialchars(staffCode);
        staffName = htmlspecialchars(staffName);
        staffPass = htmlspecialchars(staffPass);

        //--
        // データベースに保存
        //--
        db.mst_staff.update({
            name: staffName,
            password: staffPass
        }, {
            where: { code: staffCode }
        }).then(() => {
            res.render(StaffConst.buildViewPath('staff_edit_done'), {});
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });
    }
}