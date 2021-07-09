'use strict';
const db = require("../../../models");
const ProductConst = require('../common/pro_const');
const ProductAddDoneData = require('./pro_add_done_data');
const ControllerConst = require('../../common/controller_const');
const SuperProductController = require('../common/super_pro_controller');

module.exports = class ProductAddDoneController extends SuperProductController {
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
            let sanitized = this.htmlspecialchars(req);
            let productName = sanitized.body.name;
            let productPrice = sanitized.body.price;
            let imageName = sanitized.body.gazou_name;

            //--
            // データベースに保存
            //--
            db.mst_product.create({
                name: productName,
                price: productPrice,
                gazou: imageName
            }).then(() => {
                let productAddDoneData = new ProductAddDoneData(productName);
                productAddDoneData.sessionLogin = true;
                productAddDoneData.sessionStaffName = req.session.staff_name;

                let dataObject = productAddDoneData.dataObject;
                res.render(ProductConst.buildViewPath('pro_add_done'), dataObject);
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {
            // NG画面にリダイレクト
            this.redirectToSessionNg(req, res);
        }
    }
}