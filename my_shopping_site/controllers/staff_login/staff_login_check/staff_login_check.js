'use strict';
const db = require('../../../models');
const htmlspecialchars = require('htmlspecialchars');
const StaffLoginCheckData = require('./staff_login_check_data');
const StaffLoginConst = require('../common/staff_login_const');

module.exports = class StaffLoginCheckController {
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
    controller(req, res, next) {
        // console.log(req.body);
        let staffCode = req.body.code;
        let staffPass = req.body.pass;

        staffCode = htmlspecialchars(staffCode);
        staffPass = htmlspecialchars(staffPass);

        let staffLoginCheckData = new StaffLoginCheckData(staffCode, staffPass);

        // パスワードを確認 （データベースから取得）
        db.mst_staff.findAll({
            attributes: ['name'],
            where: {
                code: staffCode,
                password: staffLoginCheckData.md5Pass,
            }
        }).then((staffs) => {
            if (staffs && staffs.length > 0) {
                staffLoginCheckData.isLoginOk = true;

                // セッションに代入
                req.session.login = true;
                req.session.staff_code = staffCode;
                req.session.staff_name = staffs[0].name;

                res.redirect('staff_top');
            } else {
                staffLoginCheckData.isLoginOk = false;
                let dataObject = staffLoginCheckData.dataObject;
                res.render(StaffLoginConst.buildViewPath('staff_login_check'), dataObject);
            }
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });

        // res.send("OK");
    }
}