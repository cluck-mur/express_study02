'use strict';
const db = require('../../../models');
const StaffLoginCheckData = require('./staff_login_check_data');
const StaffLoginConst = require('../common/staff_login_const');
const SuperController = require('../../common/super_controller');

module.exports = class StaffLoginCheckController extends SuperController {
    /**
     * constructor
     * コンストラクタ
     */
    constructor() {
        super();
    }

    /**
     * ルーティング ルート(/)
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    controller(req, res, next) {
        let sanitized = this.htmlspecialchars(req);
        let staffCode = sanitized.body.code;
        let staffPass = sanitized.body.pass;

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