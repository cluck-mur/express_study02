'use strict'
const ProductConst = require('../common/pro_const');

module.exports = new class StaffAddController{
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
    productAdd(req, res, next) {
        res.render(ProductConst.buildViewPath('pro_add'), {});
    }
}