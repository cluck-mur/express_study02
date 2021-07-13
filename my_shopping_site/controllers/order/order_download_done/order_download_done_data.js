'use strict';
const crypto = require('crypto');
const SuperOrderData = require('../common/super_order_data');

module.exports = class OrderDownloadDoneData extends SuperOrderData {
    _orderList = null;

    /**
     * コンストラクター
     */
    constructor(queryResult) {
        super();

        this._orderList = [];
        queryResult.forEach((element) => {
            // element.dat_sales_products.forEach((dsp_element) => {
            //     });
            this._orderList.push({
                code: element.code,
                date: element.date,
                date: element.code_member,
                name: element.name,
                email: element.email,
                postal1: element.postal1,
                postal2: element.postal2,
                address: element.address,
                tel: element.tel,
                code_product: element.dat_sales_products[0].code,
                mst_product_name: '',
                price: element.dat_sales_products[0].price,
                quantity: element.dat_sales_products[0].quantity
            });
        });
        // this.#productList = productList;
    }

    get orderList() {
        return this._orderList;
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
            sessionLogin: this.sessionLogin,
            sessionStaffName: this.sessionStaffName,
        };
    }
}