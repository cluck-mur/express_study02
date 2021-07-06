'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');

module.exports = new class ProductDeleteDoneController {
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
    productDeleteDone(req, res, next) {
        console.log(req.body);
        let productCode = req.body.code;
        let productName = req.body.name;
        let productPrice = req.body.price;

        productCode = htmlspecialchars(productCode);
        productName = htmlspecialchars(productName);
        productPrice = htmlspecialchars(productPrice);

        //--
        // データベースに保存
        //--
        db.mst_product.destroy({
            where: { code: productCode }
        }).then(() => {
            res.render(ProductConst.buildViewPath('pro_delete_done'), {});
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });
    }
}