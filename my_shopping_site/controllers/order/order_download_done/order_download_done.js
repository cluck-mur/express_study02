'use strict';
const db = require("../../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { gte, lt } = Sequelize.Op;
const moment = require('moment');
moment.locale('ja');
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
            let m = moment(`${year}${month}${day}`);
            let utcStart = moment().utc(true);
            utcStart.set({'year': year, 'month': month, 'date': day, 'hour': 0, 'minute': 0, 'second':  0 });
            let utcEnd = moment(utcStart).add(1, 'd');

            //--
            // データベースから取得
            //--
            db.dat_sales.findAll({
                // attributes: ['code', 'name', 'price', 'gazou']
                where: {
                    date: {
                        [Op.gte]: utcStart.format('YYYY-MM-DD hh:mm:ss'),
                        [Op.lt]: utcEnd.format('YYYY-MM-DD hh:mm:ss')
                    },
                    // date: {
                    //     [Op.lt]: utcEnd.format('YYYY-MM-DD hh:mm:ss')
                    // },
                },
                include: [{
                    model: db.dat_sales_product,
                    required: false
                }],
            }).then((result) => {
                let productListData = new OrderDownloadDoneData(result);
                productListData.sessionLogin = true;
                productListData.sessionStaffName = req.session.staff_name;

                let dataObject = productListData.dataObject;
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
}