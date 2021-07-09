'use strict'
const ControllerConst = require('./controller_const');
const session_regerate_id = require('./session_regerate_id');
const SuperController = require('../common/super_controller');

module.exports = class SuperStaffOnlyController extends SuperController {
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
        } else {
        }
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    sessionRegerateId(req, res) {
        session_regerate_id(req, res);
    }

    /**
     * 
     * @param {*} res 
     * @param {*} req 
     */
    redirectToSessionNg(req, res) {
        res.redirect(ControllerConst.STAFF_NOLOGIN_NG_PATH);
    }
}
