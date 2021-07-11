'use strict';
const ShopConst = require('../common/shop_const');
const ControllerConst = require('../../common/controller_const');
const SuperShopController = require('../common/super_shop_controller');

module.exports = class KazuChangeController extends SuperShopController {
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

        // 数変更対応
        let max = sanitized.body.max;
        // let kazu = [];
        let isKazuOk = true;
        let isKazuRangeOk = true;
        if (max && max > 0) {
            for (let i = 0; i < max; i++) {
                if (sanitized.body[`sakujyo${i}`] && sanitized.body[`sakujyo${i}`] == 'on') {
                    // 処理なし
                } else {
                    let kazu = sanitized.body[`kazu${i}`];
                    isKazuOk = kazu.match('^[0-9]+$'); // 半角数字のみかチェック
                    if (!isKazuOk) {
                        break;
                    }
                    if (kazu < 1 || kazu > 10) {
                        isKazuRangeOk = false;
                        break;
                    }
                }
            }

            if (isKazuOk && isKazuRangeOk) {
                for (let i = max - 1; i >= 0; i--) {
                    if (sanitized.body[`sakujyo${i}`] && sanitized.body[`sakujyo${i}`] == 'on') {
                        req.session.cart.splice(i, 1);
                        req.session.kazu.splice(i, 1);
                    } else {
                        req.session.kazu[i] = sanitized.body[`kazu${i}`];
                    }
                }
            }
        }

        if (isKazuOk && isKazuRangeOk) {
            res.redirect('shop_cartlook');
        } else {
            res.render(ShopConst.buildViewPath('kazu_change'), {
                isKazuOk: isKazuOk,
                isKazuRangeOk: isKazuRangeOk,
            });
        }
    }
}