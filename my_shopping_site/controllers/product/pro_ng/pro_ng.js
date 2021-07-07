'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');
const SuperProductData = require('../common/super_pro_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class ProductNgController {
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
    productNg(req, res, next) {
        res.render(ProductConst.buildViewPath('pro_ng'), {});
    }
}