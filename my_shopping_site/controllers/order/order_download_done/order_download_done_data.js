'use strict';
const crypto = require('crypto');
const SuperOrderData = require('../common/super_order_data');

module.exports = class OrderDownloadDoneData extends SuperOrderData {
    _orderList = null;
    _filePath = null;

    /**
     * コンストラクター
     */
    constructor(queryResult, filePath) {
        super();

        this._orderList = [];
        queryResult.forEach((element) => {
            element.dat_sales_products.forEach((dat_sales_product) => {
                this._orderList.push({
                    code: element.code,
                    date: element.date,
                    code_member: element.code_member,
                    name: element.name,
                    email: element.email,
                    postal1: element.postal1,
                    postal2: element.postal2,
                    address: element.address,
                    tel: element.tel,
                    code_product: dat_sales_product.code,
                    mst_product_name: dat_sales_product.mst_product.name,
                    price: dat_sales_product.price,
                    quantity: dat_sales_product.quantity
                });
            });
        });

        this._filePath = filePath;
        // console.log(this._orderList);
    }

    get orderList() {
        return this._orderList;
    }
    get filePath() {
        return this._filePath;
    }

    /**
     * 
     */
    get dataObject() {
        // console.log(this.#makeObject());
        return this.#makeObject();
    }

    /**
     * 
     * @returns 
     */
    #makeObject() {
        return {
            orderList: this.orderList,
            filePath: this.filePath,
            sessionLogin: this.sessionLogin,
            sessionStaffName: this.sessionStaffName,
        };
    }
}