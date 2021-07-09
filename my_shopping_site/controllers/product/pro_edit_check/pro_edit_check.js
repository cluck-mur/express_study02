'use strict';
const ProductEditCheckData = require('./pro_edit_check_data');
const ProductConst = require('../common/pro_const');
const ControllerConst = require('../../common/controller_const');
const SuperProductController = require('../common/super_pro_controller');

module.exports = class ProductEditCheckController extends SuperProductController {
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
            let sanitized = this.htmlspecialchars(req);
            let productCode = sanitized.body.code;
            let productName = sanitized.body.name;
            let productPrice = sanitized.body.price;
            let imageName = null;
            if (sanitized.file && sanitized.file.originalname.length) {
                imageName = sanitized.file.originalname;
            }
            let imageNameOld = sanitized.body.gazou_name_old;

            let productEditCheckData = new ProductEditCheckData(
                productCode,
                productName,
                productPrice,
                imageName,
                imageNameOld
            );

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

            productEditCheckData.sessionLogin = true;
            productEditCheckData.sessionStaffName = req.session.staff_name;

            let dataObject = productEditCheckData.dataObject;
            res.render(ProductConst.buildViewPath('pro_edit_check'), dataObject);
            // res.send("OK");
        } else {
            // NG画面にリダイレクト
            this.redirectToSessionNg(req, res);
        }
    }
}