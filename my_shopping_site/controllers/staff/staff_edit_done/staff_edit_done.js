'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const StaffConst = require('../common/staff_const');
const SuperStaffData = require('../common/super_staff_data');
const ControllerConst = require('../../common/controller_const');
const SuperStaffController = require('../common/super_staff_controller');

module.exports = class StaffEditDoneController extends SuperStaffController {
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
        // セッションIDを再生成
        this.sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
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
                let superStaffData = new SuperStaffData();
                superStaffData.sessionLogin = true;
                superStaffData.sessionStaffName = req.session.staff_name;

                let dataObject = superStaffData.dataObject;
                res.render(StaffConst.buildViewPath('staff_edit_done'), dataObject);
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {
            // NG画面にリダイレクト
            this.redirectToSessionNg(req, res);
        }
    }
}