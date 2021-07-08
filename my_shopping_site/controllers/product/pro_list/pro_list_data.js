'use strict';
const crypto = require('crypto');
const SuperProductData = require('../common/super_pro_data');

module.exports = class ProductListData extends SuperProductData {
    #productList = null;

    /**
     * コンストラクター
     */
    constructor(productList) {
        super();

        this.#productList = productList;
    }

    get productList() {
        return this.#productList;
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
            productList: this.productList,
            sessionLogin: this.sessionLogin,
            sessionStaffName: this.sessionStaffName,
        };
    }
}