'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const StaffConst = require('../common/staff_const');

module.exports = new class StaffNgController {
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
    staffNg(req, res, next) {
        res.render(StaffConst.buildViewPath('staff_ng'), {});
    }
}