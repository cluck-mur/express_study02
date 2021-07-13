'use strict'
const OrderConst = require('../common/order_const');
const SuperOrderData = require('../common/super_order_data');
const ControllerConst = require('../../common/controller_const');
const SuperOrderController = require('../common/super_order_controller');

module.exports = class OrderDownloadController extends SuperOrderController {
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
            let superOrderData = new SuperOrderData();
            superOrderData.sessionLogin = true;
            superOrderData.sessionStaffName = req.session.staff_name;

            // 画面表示
            let dataObject = superOrderData.dataObject;
            res.render(OrderConst.buildViewPath('order_download'), dataObject);
        } else {
            // NG画面にリダイレクト
            this.redirectToSessionNg(req, res);
        }
    }
}
