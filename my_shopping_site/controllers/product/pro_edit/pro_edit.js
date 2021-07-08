'use strict'
const db = require("../../../models");
const ProductConst = require('../common/pro_const');
const ProductEditData = require('./pro_edit_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class ProductEditController {
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
    productEdit(req, res, next) {
        // セッションIDを再生成
        sessionRegerateId(req, res);
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

                    let productEditData = new ProductEditData(
                        productData.code,
                        productData.name,
                        productData.price,
                        productData.gazou
                    );
                    productEditData.sessionLogin = true;
                    productEditData.sessionStaffName = req.session.staff_name;

                    let dataObject = productEditData.dataObject;
                    res.render(ProductConst.buildViewPath('pro_edit'), dataObject);
                } else {
                    res.send('指定された商品は見つかりませんでした。');
                }
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {

        }
    }
}