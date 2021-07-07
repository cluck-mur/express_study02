'use strict';
const db = require("../../../models");
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');
const SuperProductData = require('../common/super_pro_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

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
        // セッションIDを再生成
        sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
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
        } else {

        }
    }
}