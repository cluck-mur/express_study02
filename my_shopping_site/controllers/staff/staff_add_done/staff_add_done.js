'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const StaffConst = require('../common/staff_const');
const StaffAddDoneData = require('./staff_add_done_data');
const ControllerConst = require('../../common/controller_const');
const SuperStaffController = require('../common/super_staff_controller');

module.exports = class StaffAddDoneController extends SuperStaffController {
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

            let staffName = req.body.name;
            let staffPass = req.body.pass;

            staffName = htmlspecialchars(staffName);
            staffPass = htmlspecialchars(staffPass);

            //--
            // データベースに保存
            //--
            db.mst_staff.create({ name: staffName, password: staffPass })
                .then(() => {
                    let staffAddDoneData = new StaffAddDoneData(staffName);
                    staffAddDoneData.sessionLogin = true;
                    staffAddDoneData.sessionStaffName = req.session.staff_name;

                    let dataObject = staffAddDoneData.dataObject;
                    res.render(StaffConst.buildViewPath('staff_add_done'), dataObject);
                })
                .catch((e) => {
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