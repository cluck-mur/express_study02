'use strict';
const db = require('../../../models');
const MemberLoginCheckData = require('./member_login_check_data');
const ShopConst = require('../common/shop_const');
const SuperController = require('../../common/super_controller');

module.exports = class StaffLoginCheckController extends SuperController {
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
        let sanitized = this.htmlspecialchars(req);
        let memberEmail = sanitized.body.email;
        let memberPass = sanitized.body.pass;

        let memberLoginCheckData = new MemberLoginCheckData(memberEmail, memberPass);

        // パスワードを確認 （データベースから取得）
        db.dat_member.findAll({
            attributes: ['code'],
            where: {
                email: memberEmail,
                password: memberLoginCheckData.md5Pass,
            }
        }).then((members) => {
            if (members && members.length > 0) {
                memberLoginCheckData.isLoginOk = true;

                // セッションに代入
                req.session.member_login = true;
                req.session.member_code = members[0].code;
                req.session.member_name = members[0].name;

                res.redirect('shop_list');
            } else {
                memberLoginCheckData.isLoginOk = false;
                let dataObject = memberLoginCheckData.dataObject;
                res.render(ShopConst.buildViewPath('member_login_check'), dataObject);
            }
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });

        // res.send("OK");
    }
}