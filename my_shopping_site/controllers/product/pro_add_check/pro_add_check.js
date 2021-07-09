'use strict';
const htmlspecialchars = require('htmlspecialchars');
const ProductAddCheckData = require('./pro_add_check_data');
const ProductConst = require('../common/pro_const');
const ControllerConst = require('../../common/controller_const');
const SuperProductController = require('../common/super_pro_controller');

module.exports = class ProductAddCheckController extends SuperProductController {
    /**
     * constructor
     * コンストラクタ
     */
    constructor() {
        super();
    }

    /**
     * ルーティング ルート(/)
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    controller(req, res, next) {
        // セッションIDを再生成
        this.sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            this.htmlspecialchars(req);

            let productName = req.body.name;
            let productPrice = req.body.price;
            let imageName = null;
            if (req.file && req.file.originalname.length) {
                imageName = req.file.originalname;
            }

            productName = htmlspecialchars(productName);
            productPrice = htmlspecialchars(productPrice);
            imageName = htmlspecialchars(imageName);

            let productAddCheckData = new ProductAddCheckData(productName, productPrice, imageName);

            // 商品名を確認
            if (!productName | productName.length < 1) {
                productAddCheckData.productNameIsError = true;
                productAddCheckData.productNameErrorMessage = '商品名が入力されていません';
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

            productAddCheckData.sessionLogin = true;
            productAddCheckData.sessionStaffName = req.session.staff_name;

            let dataObject = productAddCheckData.dataObject;
            res.render(ProductConst.buildViewPath('pro_add_check'), dataObject);
            // res.send("OK");
        } else {
            // NG画面にリダイレクト
            this.redirectToSessionNg(req, res);
        }
    }
}