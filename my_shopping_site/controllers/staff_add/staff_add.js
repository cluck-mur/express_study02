'use strict'
const StaffConst = require('../common/staff_const');

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
    staffAdd(req, res, next) {
        res.render(StaffConst.buildViewPath('staff_add'), { title: 'ろくまる農園' });
    }
}