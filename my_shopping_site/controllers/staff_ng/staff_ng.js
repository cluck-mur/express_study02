'use strict';
const db = require("../../models");
const htmlspecialchars = require('htmlspecialchars');
// const StaffAddDoneData = require('./staff_add_done_data');

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
        res.render('staff_ng', {});
    }
}