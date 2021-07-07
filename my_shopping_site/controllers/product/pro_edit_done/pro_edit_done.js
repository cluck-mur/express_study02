'use strict';
const db = require("../../../models");
const fs = require('fs');
const path = require('path');
const htmlspecialchars = require('htmlspecialchars');
const ProductConst = require('../common/pro_const');
const SuperProductData = require('../common/super_pro_data');
const ControllerConst = require('../../common/controller_const');
const sessionRegerateId = require('../../common/session_regerate_id');

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
        // セッションIDを再生成
        sessionRegerateId(req, res);
        // セッションを確認
        if (req.session.login) {
            let productCode = req.body.code;
            let productName = req.body.name;
            let productPrice = req.body.price;
            let imageName = req.body.gazou_name;
            let imageNameOld = req.body.gazou_name_old;

            productCode = htmlspecialchars(productCode);
            productName = htmlspecialchars(productName);
            productPrice = htmlspecialchars(productPrice);
            imageName = htmlspecialchars(imageName);
            imageNameOld = htmlspecialchars(imageNameOld);

            let imageNameForSave = null;
            if (imageName && imageName.length > 0) {
                imageNameForSave = imageName;
            } else if (imageNameOld && imageNameOld.length > 0) {
                imageNameForSave = imageNameOld;
            }

            //--
            // データベースに保存
            //--
            db.mst_product.update({
                name: productName,
                price: productPrice,
                gazou: imageNameForSave
            }, {
                where: { code: productCode }
            }).then(() => {
                // 古い画像を参照する商品が0だったらストレージから消す
                if (imageNameOld && imageNameOld.length > 0) {
                    db.mst_product.count({
                        where: {
                            gazou: imageNameOld
                        }
                    }).then((dataCount) => {
                        if (!(dataCount > 0)) {
                            // let currentPath = __dirname;
                            let currentPath = process.cwd();
                            let imagePath = path.join(currentPath, 'public', 'images', imageNameOld);

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

                res.render(ProductConst.buildViewPath('pro_edit_done'), {});
            }).catch((e) => {
                // console.log(e);
                // next();
                res.send('ただいま障害により大変ご迷惑をお掛けしております。');
            });
        } else {

        }
    }
}