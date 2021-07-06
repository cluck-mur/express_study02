'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');

module.exports = new class ProductAddDoneController {
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
    productAddDone(req, res, next) {
        console.log(req.body);
        let productName = req.body.name;
        let productPrice = req.body.price;
        let imageName = req.body.gazou_name;

        productName = htmlspecialchars(productName);
        productPrice = htmlspecialchars(productPrice);
        imageName = htmlspecialchars(imageName);

        //--
        // データベースに保存
        //--
        db.mst_product.create({ name: productName, price: productPrice, gazou: imageName })
            .then(() => {
                res.render(ProductConst.buildViewPath('pro_add_done'), { name: productName });
            })
            .catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
    }
}