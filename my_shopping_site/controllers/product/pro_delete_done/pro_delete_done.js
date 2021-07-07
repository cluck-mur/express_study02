'use strict';
const db = require("../../../models");
const fs = require('fs');
const path = require('path');
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');
const SuperProductData = require('../common/super_pro_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

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
        // セッションIDを再生成
        sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            let productCode = req.body.code;
            let productName = req.body.name;
            let productPrice = req.body.price;
            let imageName = req.body.gazou_name;

            productCode = htmlspecialchars(productCode);
            productName = htmlspecialchars(productName);
            productPrice = htmlspecialchars(productPrice);
            imageName = htmlspecialchars(imageName);

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

                res.render(ProductConst.buildViewPath('pro_delete_done'), {});
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {

        }
    }
}