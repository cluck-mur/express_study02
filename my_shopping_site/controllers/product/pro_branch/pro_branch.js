'use strict'
const db = require("../../../models");
const SuperProductData = require('../common/super_pro_data');
const ControllerConst = require('../../common/controller_const');
const SuperProductController = require('../common/super_pro_controller');

module.exports = class ProductBranchController extends SuperProductController {
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
        } else {
            // NG画面にリダイレクト
            this.redirectToSessionNg(req, res);
        }
    }
}