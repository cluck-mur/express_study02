'use strict'
const db = require("../../../models");
const ProductConst = require('../common/pro_const');
const SuperProductData = require('../common/super_pro_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

module.exports = new class ProductDispController {
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
    productDisp(req, res, next) {
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
                console.log(productData.gazou);
                res.render(ProductConst.buildViewPath('pro_disp'), { productData: productData });
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