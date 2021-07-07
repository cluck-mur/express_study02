'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');
const SuperProductData = require('../common/super_pro_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class ProductListController {
    /**
     * constructor
     * コンストラクタ
     */
    constructor() {
    }

    /**
     * ルーティング ルート(/)
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    productList(req, res, next) {
        // セッションIDを再生成
        sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            //--
            // データベースから取得
            //--
            db.mst_product.findAll({
                attributes: ['code', 'name', 'price']
            }).then((products) => {
                let superProductData = new SuperProductData();

                superProductData.sessionLogin = true;
                superProductData.sessionStaffName = req.session.staff_name;

                res.render(ProductConst.buildViewPath('pro_list'), { productList: products });
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {

        }
    }
}