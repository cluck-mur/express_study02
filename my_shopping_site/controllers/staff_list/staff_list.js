'use strict';
const db = require("../../models");
const htmlspecialchars = require('htmlspecialchars');

module.exports = new class StaffListController {
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
    staffList(req, res, next) {
        //--
        // データベースから取得
        //--
        db.mst_staff.findAll({
            attributes: ['code', 'name']
          })
            .then((staffs) => {
                res.render('staff_list', { staffList: staffs });
            })
            .catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
    }
}