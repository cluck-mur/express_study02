'use strict';
const htmlspecialchars = require('htmlspecialchars');
const ProductEditCheckData = require('./pro_edit_check_data');
const ProductConst = require('../common/pro_const');

module.exports = new class ProductEditCheckController{
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
    productEditCheck(req, res, next) {
        console.log(req.body);
        let productCode = req.body.code;
        let productName = req.body.name;
        let productPrice = req.body.price;

        productCode = htmlspecialchars(productCode);
        productName = htmlspecialchars(productName);
        productPrice = htmlspecialchars(productPrice);

        let productEditCheckData = new ProductEditCheckData(productCode, productName, productPrice);

        // 商品名を確認
        if (!productName | productName.length < 1) {
            productEditCheckData.productNameIsError = true;
            productEditCheckData.productNameErrorMessage = '商品名が入力されていません';
        } else {
            // 処理なし
        }

        // 価格を確認
        let isPriceOk = productPrice.match('^[0-9]+$'); // 半角数字のみかチェック
        if (!productPrice | productPrice.length < 1) {
            productEditCheckData.productPriceIsError = true;
            productEditCheckData.productPriceErrorMessage = '価格が入力されていません。';
        } else if (!isPriceOk) {
            productEditCheckData.productPriceIsError = true;
            productEditCheckData.productPriceErrorMessage = '価格をきちんと入力してください。';
        } else {
            // 処理なし   
        }
        
        let dataObject = productEditCheckData.dataObject;
        res.render(ProductConst.buildViewPath('pro_edit_check'), dataObject);
        // res.send("OK");
    }
}