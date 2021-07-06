'use strict'
const db = require("../../../models");

module.exports = new class ProductBranchController {
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
    productBranch(req, res, next) {
        if (req.body.disp) {
            if (!req.body.procode) {
                res.redirect('pro_ng');
            } else {
                res.redirect(307, 'pro_disp');
            }
        } else if (req.body.add) {
            res.redirect('pro_add');
        } else if (req.body.edit) {
            if (!req.body.procode) {
                res.redirect('pro_ng');
            } else {
                res.redirect(307, 'pro_edit');
            }
        } else if (req.body.delete) {
            if (!req.body.procode) {
                res.redirect('pro_ng');
            } else {
                res.redirect(307, 'pro_delete');
            }
        }
    }
}