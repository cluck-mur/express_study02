'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');

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
        //--
        // データベースから取得
        //--
        db.mst_product.findAll({
            attributes: ['code', 'name', 'price']
          })
            .then((products) => {
                res.render(ProductConst.buildViewPath('pro_list'), { productList: products });
            })
            .catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
    }
}