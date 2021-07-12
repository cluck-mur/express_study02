const ControllerConst = require('../../common/controller_const');
const session_regerate_id = require('../../common/session_regerate_id');
const SuperController = require('../../common/super_controller');

module.exports = class SuperShopController extends SuperController{
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
        if (req.session.member_login) {
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
     * @param {*} cart 
     * @returns 
     */
     _makeOpWhereOrCode(cart) {
        let op = [];
        cart.forEach((value, key) => {
            let pushObj = { code: value };
            op.push(pushObj);
        });
        return op;
    }
}
