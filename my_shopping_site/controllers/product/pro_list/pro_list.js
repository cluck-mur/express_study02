'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');
const ProductListData = require('./pro_list_data');
const ControllerConst = require('../../common/controller_const');
const SuperProductController = require('../common/super_pro_controller');

module.exports = class ProductListController extends SuperProductController {
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
        super.sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            //--
            // データベースから取得
            //--
            db.mst_product.findAll({
                attributes: ['code', 'name', 'price', 'gazou']
            }).then((products) => {
                let productListData = new ProductListData(products);
                productListData.sessionLogin = true;
                productListData.sessionStaffName = req.session.staff_name;

                let dataObject = productListData.dataObject;
                res.render(ProductConst.buildViewPath('pro_list'), dataObject);
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {
            // NG画面にリダイレクト
            super.redirectToSessionNg(req, res);
        }
    }
}