'use strict'
const db = require("../../../models");
const SuperStaffData = require('../common/super_staff_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class StaffBranchController {
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
    staffBranch(req, res, next) {
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
    }
}