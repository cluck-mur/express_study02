'use strict'
const db = require("../../../models");
const ProductConst = require('../common/pro_const');
const ProductDeleteData = require('./pro_delete_data');
const ControllerConst = require('../../common/controller_const');
const SuperProductController = require('../common/super_pro_controller');

module.exports = class ProductDeleteController extends SuperProductController {
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
            let productCode = req.body.procode;

            //--
            // データベースから取得
            //--
            db.mst_product.findAll({
                attributes: ['code', 'name', 'price', 'gazou'],
                where: {
                    code: productCode
                }
            }).then((products) => {
                if (products && products.length > 0) {
                    let productData = products[0];

                    let productDeleteData = new ProductDeleteData(
                        productData.code,
                        productData.name,
                        productData.price,
                        productData.gazou
                    );
                    productDeleteData.sessionLogin = true;
                    productDeleteData.sessionStaffName = req.session.staff_name;

                    let dataObject = productDeleteData.dataObject;
                    res.render(ProductConst.buildViewPath('pro_delete'), dataObject);
                } else {
                    res.send('指定された商品は見つかりませんでした。');
                }
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