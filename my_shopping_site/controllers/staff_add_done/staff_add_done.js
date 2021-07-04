'use strict';
const db = require("../../models");
const htmlspecialchars = require('htmlspecialchars');
// const StaffAddDoneData = require('./staff_add_done_data');

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
        console.log(req.body);
        let staffName = req.body.name;
        let staffPass = req.body.pass;

        staffName = htmlspecialchars(staffName);
        staffPass = htmlspecialchars(staffPass);

        //--
        // データベースに保存
        //--
        db.mst_staff.create({ name: staffName, password: staffPass })
            .then(() => {
                res.render('staff_add_done', { name: staffName });
            })
            .catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
    }
}