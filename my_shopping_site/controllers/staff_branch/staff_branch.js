'use strict'
const db = require("../../models");

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

        if (!req.body.code) {
            res.redirect('staff_ng');
        }

        if (req.body.edit) {
            res.redirect(307, 'staff_edit');
        } else if (req.body.delete) {
            res.redirect(307, 'staff_delete');
        }
    }
}