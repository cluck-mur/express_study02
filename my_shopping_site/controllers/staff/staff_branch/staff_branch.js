'use strict'
const db = require("../../../models");
const SuperStaffData = require('../common/super_staff_data');
const ControllerConst = require('../../common/controller_const');
const SuperStaffController = require('../common/super_staff_controller');

module.exports = class StaffBranchController extends SuperStaffController {
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
            let requestedFunction = req.body.name;

            if (req.body.disp) {
                if (!req.body.staffcode) {
                    res.redirect('staff_ng');
                } else {
                    res.redirect(307, 'staff_disp');
                }
            } else if (req.body.add) {
                res.redirect('staff_add');
            } else if (req.body.edit) {
                if (!req.body.staffcode) {
                    res.redirect('staff_ng');
                } else {
                    res.redirect(307, 'staff_edit');
                }
            } else if (req.body.delete) {
                if (!req.body.staffcode) {
                    res.redirect('staff_ng');
                } else {
                    res.redirect(307, 'staff_delete');
                }
            }
        } else {
            // NG画面にリダイレクト
            super.redirectToSessionNg(req, res);
        }
    }
}