'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');

module.exports = new class ProductEditDoneController {
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
    productEditDone(req, res, next) {
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
        db.mst_product.update({
            name: productName,
            price: productPrice
        }, {
            where: { code: productCode }
        }).then(() => {
            res.render(ProductConst.buildViewPath('pro_edit_done'), {});
        }).catch((e) => {
            // console.log(e);
            // next();
            res.send('ただいま障害により大変ご迷惑をお掛けしております。');
        });
    }
}