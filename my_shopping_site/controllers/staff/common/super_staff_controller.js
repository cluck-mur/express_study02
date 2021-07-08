'use strict'
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');
const SuperStaffOnlyController = require('../../common/super_staff_only_controller');

module.exports = class SuperStaffController extends SuperStaffOnlyController{
    /**
     * constructor
     * コンストラクタ
     */
    constructor() {
        super();
    }
}
