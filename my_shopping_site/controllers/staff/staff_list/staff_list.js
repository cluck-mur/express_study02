'use strict';
const db = require("../../../models");
const StaffConst = require('../common/staff_const');
const StaffListData = require('./staff_list_data');
const ControllerConst = require('../../common/controller_const');
const SuperStaffController = require('../common/super_staff_controller');

module.exports = class StaffListController extends SuperStaffController {
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
            //--
            // データベースから取得
            //--
            db.mst_staff.findAll({
                attributes: ['code', 'name']
            }).then((staffs) => {
                let staffListData = new StaffListData(staffs);
                staffListData.sessionLogin = true;
                staffListData.sessionStaffName = req.session.staff_name;

                let dataObject = staffListData.dataObject;
                res.render(StaffConst.buildViewPath('staff_list'), dataObject);
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