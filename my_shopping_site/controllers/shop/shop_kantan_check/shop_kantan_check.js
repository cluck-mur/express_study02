'use strict';
const db = require("../../../models");
const ShopConst = require('../common/shop_const');
const ShopKantanCheckData = require('./shop_kantan_check_data');
const ControllerConst = require('../../common/controller_const');
const SuperShopController = require('../common/super_shop_controller');

module.exports = class ShopKantanCheckController extends SuperShopController {
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
        let sessionMemberCode = null;
        let sessionMemberName = null;
        if (req.session.member_login) {
            sessionMemberLogin = true;
            sessionMemberCode = req.session.member_code;
            sessionMemberName = req.session.member_name;
        } else {
            let shopKantanCheckData = new ShopKantanCheckData();
            shopKantanCheckData.sessionMemberLogin = sessionMemberLogin;
            shopKantanCheckData.sessionMemberName = sessionMemberName;

            let dataObject = shopKantanCheckData.dataObject;
            res.render(ShopConst.buildViewPath('shop_kantan_check'), dataObject);
        }

        // セキュリティ対策
        let sanitized = this.htmlspecialchars(req);

        // DBからデータを取得
        db.dat_member.findAll({
            // attributes: ['code', 'name'],
            where: {
                code: sessionMemberCode
            }
        }).then((members) => {
            if (members && members.length > 0) {

                let shopKantanCheckData = new ShopKantanCheckData(
                    members[0].name,
                    members[0].email,
                    members[0].postal1,
                    members[0].postal2,
                    members[0].address,
                    members[0].tel,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                shopKantanCheckData.sessionMemberLogin = sessionMemberLogin;
                shopKantanCheckData.sessionMemberCode = sessionMemberCode;
                shopKantanCheckData.sessionMemberName = sessionMemberName;

                let dataObject = shopKantanCheckData.dataObject;
                res.render(ShopConst.buildViewPath('shop_kantan_check'), dataObject);
            } else {
                res.send('会員情報がみつかりませんでした。障害により大変ご迷惑をお掛けします。');
            }
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });
    }
}