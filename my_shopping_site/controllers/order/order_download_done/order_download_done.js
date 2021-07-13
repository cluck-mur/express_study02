'use strict';
const db = require("../../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { gte, lt } = Sequelize.Op;
const moment = require('moment');
moment.locale('ja');
const fs = require('fs').promises;
const uuid = require('uuid');
const OrderConst = require('../common/order_const');
const OrderDownloadDoneData = require('./order_download_done_data');
const ControllerConst = require('../../common/controller_const');
const SuperOrderController = require('../common/super_order_controller');

module.exports = class OrderDownloadDoneController extends SuperOrderController {
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
            // セキュリティ対策
            let sanitized = this.htmlspecialchars(req);

            let year = sanitized.body.year;
            let month = sanitized.body.month;
            let day = sanitized.body.day;

            // クエリ―用の条件
            let utcStart = moment(`${year}${month}${day}`).utc();
            let utcEnd = moment(utcStart).add(1, 'd');
            //--
            // データベースから取得
            //--
            db.dat_sales.findAll({
                // attributes: ['code', 'name', 'price', 'gazou']
                where: {
                    date: {
                        [Op.gte]: utcStart.format('YYYY-MM-DD HH:mm:ss'),
                        [Op.lt]: utcEnd.format('YYYY-MM-DD HH:mm:ss')
                    },
                },
                include: [{
                    model: db.dat_sales_product,
                    required: false,
                    include: [{
                        model: db.mst_product,
                        required: false
                    },]
                },],
            }).then((result) => {
                // ファイル名を生成
                let dirPath = 'staffdl';
                let newUuid = uuid.v4();
                newUuid = newUuid.replace(/-/g, '');
                newUuid += '.csv';
                let filePath = '/' + dirPath + '/' + newUuid;

                // データオブジェクト作成
                let productListData = new OrderDownloadDoneData(result, filePath);
                productListData.sessionLogin = true;
                productListData.sessionStaffName = req.session.staff_name;

                let dataObject = productListData.dataObject;

                //
                // csvファイル作成
                //
                let csv = '注文コード,注文日時,会員番号,お名前,メール,郵便番号,住所,TEL,商品コード,商品名,価格,数量';
                csv += "\n";
                dataObject.orderList.forEach((element) => {
                    let tmpDate = moment(element.date);
                    let utcDate = moment().utc().set({
                        'year': tmpDate.year(),
                        'month': tmpDate.month(),
                        'date': tmpDate.date(),
                        'hour': tmpDate.hour(),
                        'minute': tmpDate.minute(),
                        'second': tmpDate.second()
                    });

                    csv += element.code;
                    csv += ",";
                    csv += utcDate.local().format('YYYY-MM-DD HH:mm:ss');
                    csv += ",";
                    csv += element.code_member;
                    csv += ",";
                    csv += element.name;
                    csv += ",";
                    csv += element.email;
                    csv += ",";
                    csv += element.postal1 + "-" + element.postal2;
                    csv += ",";
                    csv += element.address;
                    csv += ",";
                    csv += element.tel;
                    csv += ",";
                    csv += element.code_product;
                    csv += ",";
                    csv += element.mst_product_name;
                    csv += ",";
                    csv += element.price;
                    csv += ",";
                    csv += element.quantity;
                    csv += "\n";
                });
                // console.log(csv);

                // ファイルにセーブ
                let writePath = './public/' + dirPath + '/' + newUuid;
                this._writer(writePath, csv);

                res.render(OrderConst.buildViewPath('order_download_done'), dataObject);
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


    /**
     * ファイルに書き込む
     * @param {*} path 
     * @param {*} writeString 
     */
    _writer(path, writeString) {
        fs.writeFile(
            path,
            writeString
        ).then((result) => {
            // 処理なし
        }).catch((e) => {
            next();
        });
    }
}