'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');
const SuperProductData = require('../common/super_pro_data');
const ControllerConst = require('../../common/controller_const');
const SuperProductController = require('../common/super_pro_controller');

module.exports = class ProductNgController extends SuperProductController {
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
            let superProductData = new SuperProductData();
            superProductData.sessionLogin = true;
            superProductData.sessionStaffName = req.session.staff_name;

            let dataObject = superProductData.dataObject;
            res.render(ProductConst.buildViewPath('pro_ng'), dataObject);
        } else {
            // NG画面にリダイレクト
            super.redirectToSessionNg(req, res);
        }
    }
}