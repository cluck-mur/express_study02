'use strict';
const db = require("../../../models");
const ShopConst = require('../common/shop_const');
const ShopFormCheckData = require('./shop_form_check_data');
const ControllerConst = require('../../common/controller_const');
const SuperShopController = require('../common/super_shop_controller');

module.exports = class ShopFormCheckController extends SuperShopController {
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
        let sessionMemberLogin = false;
        let sessionMemberName = null;
        if (req.session.member_login) {
            sessionMemberLogin = true;
            sessionMemberName = req.session.member_name;
        }

        // セキュリティ対策
        let sanitized = this.htmlspecialchars(req);

        // 入力値チェック
        let isEmailOk = sanitized.body.email.match('^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$');
        let isPostal1Ok = sanitized.body.postal1.match('^[0-9]+$');
        let isPostal2Ok = sanitized.body.postal2.match('^[0-9]+$');
        let isTelOk = sanitized.body.tel.match('^0([0-9]-[0-9]{4}|[0-9]{2}-[0-9]{3}|[0-9]{3}-[0-9]{2}|[0-9]{4}-[0-9])-[0-9]{4}$');

        let shopFormCheckData = new ShopFormCheckData(
            sanitized.body.onamae,
            sanitized.body.email,
            sanitized.body.postal1,
            sanitized.body.postal2,
            sanitized.body.address,
            sanitized.body.tel
        );
        shopFormCheckData.isEmailOk = isEmailOk;
        shopFormCheckData.isPostal1Ok = isPostal1Ok;
        shopFormCheckData.isPostal2Ok = isPostal2Ok;
        shopFormCheckData.isTelOk = isTelOk;
        shopFormCheckData.sessionMemberLogin = sessionMemberLogin;
        shopFormCheckData.sessionMemberName = sessionMemberName;

        let dataObject = shopFormCheckData.dataObject;
        res.render(ShopConst.buildViewPath('shop_form_check'), dataObject);
    }
}