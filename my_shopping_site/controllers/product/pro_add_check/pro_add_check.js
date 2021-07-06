'use strict';
const htmlspecialchars = require('htmlspecialchars');
const ProductAddCheckData = require('./pro_add_check_data');
const ProductConst = require('../common/pro_const');

module.exports = new class ProductAddCheckController{
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
    productAddCheck(req, res, next) {
        console.log(req.body);
        let staffName = req.body.name;
        let productPrice = req.body.price;

        staffName = htmlspecialchars(staffName);
        productPrice = htmlspecialchars(productPrice);

        let productAddCheckData = new ProductAddCheckData(staffName, productPrice);

        // 商品名を確認
        if (!staffName | staffName.length < 1) {
            productAddCheckData.staffNameIsError = true;
            productAddCheckData.staffNameErrorMessage = '商品名が入力されていません';
        } else {
            // 処理なし
        }

        // 価格を確認
        let isPriceOk = productPrice.match('^[0-9]+$'); // 半角数字のみかチェック
        if (!productPrice | productPrice.length < 1) {
            productAddCheckData.productPriceIsError = true;
            productAddCheckData.productPriceErrorMessage = '価格が入力されていません。';
        } else if (!isPriceOk) {
            productAddCheckData.productPriceIsError = true;
            productAddCheckData.productPriceErrorMessage = '価格をきちんと入力してください。';
        } else {
            // 処理なし   
        }
        
        let dataObject = productAddCheckData.dataObject;
        res.render(ProductConst.buildViewPath('pro_add_check'), dataObject);
        // res.send("OK");
    }
}