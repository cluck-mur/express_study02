'use strict'
const db = require("../../../models");
const ProductConst = require('../common/pro_const');

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
                res.render(ProductConst.buildViewPath('pro_edit'), { productData: productData });
            } else {
                res.send('指定された商品は見つかりませんでした。');
            }
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });
    }
}