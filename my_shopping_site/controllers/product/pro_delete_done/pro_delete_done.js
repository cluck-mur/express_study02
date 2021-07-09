'use strict';
const db = require("../../../models");
const fs = require('fs');
const path = require('path');
const ProductConst = require('../common/pro_const');
const SuperProductData = require('../common/super_pro_data');
const ControllerConst = require('../../common/controller_const');
const SuperProductController = require('../common/super_pro_controller');

module.exports = class ProductDeleteDoneController extends SuperProductController {
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
            let imageName = sanitized.body.gazou_name;

            //--
            // データベースに保存
            //--
            db.mst_product.destroy({
                where: { code: productCode }
            }).then(() => {
                // 古い画像を参照する商品が0だったらストレージから消す
                if (imageName && imageName.length > 0) {
                    db.mst_product.count({
                        where: {
                            gazou: imageName
                        }
                    }).then((dataCount) => {
                        if (!(dataCount > 0)) {
                            // let currentPath = __dirname;
                            let currentPath = process.cwd();
                            let imagePath = path.join(currentPath, 'public', 'images', imageName);

                            // ファイルの存在チェック
                            let isExisting = fs.existsSync(imagePath);
                            if (isExisting) {
                                // ストレージから削除
                                fs.unlinkSync(imagePath)
                            }
                        }
                    }).catch((e) => {
                        res.send('ただいま障害により大変ご迷惑をお掛けしております。(画像削除)');
                    });
                }

                let superProductData = new SuperProductData();
                superProductData.sessionLogin = true;
                superProductData.sessionStaffName = req.session.staff_name;

                let dataObject = superProductData.dataObject;
                res.render(ProductConst.buildViewPath('pro_delete_done'), dataObject);
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {
            // NG画面にリダイレクト
            this.redirectToSessionNg(req, res);
        }
    }
}