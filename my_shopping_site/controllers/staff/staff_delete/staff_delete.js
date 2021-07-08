'use strict'
const db = require("../../../models");
const StaffConst = require('../common/staff_const');
const StaffDeleteData = require('./staff_delete_data');
const ControllerConst = require('../../common/controller_const');
const SuperStaffController = require('../common/super_staff_controller');

module.exports = class StaffDeleteController extends SuperStaffController {
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
        super.sessionRegerateId(req, res);
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

                    let staffDeleteData = new StaffDeleteData(staffData.code, staffData.name);
                    staffDeleteData.sessionLogin = true;
                    staffDeleteData.sessionStaffName = req.session.staff_name;

                    let dataObject = staffDeleteData.dataObject;
                    res.render(StaffConst.buildViewPath('staff_delete'), dataObject);
                } else {
                    res.send('指定されたスタッフは見つかりませんでした。');
                }
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {
            // NG画面にリダイレクト
            super.redirectToSessionNg(req, res);
        }
    }
}