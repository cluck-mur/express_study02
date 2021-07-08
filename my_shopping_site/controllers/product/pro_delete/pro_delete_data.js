'use strict';
const crypto = require('crypto');
const SuperProductData = require('../common/super_pro_data');

module.exports = class ProductDeleteData extends SuperProductData {
    #productCode = null;
    #productName = null;
    #productPrice = null;
    #productImageName = null;

    /**
     * コンストラクター
     */
    constructor(productCode, productName, productPrice, productImageName) {
        super();

        this.#productCode = productCode;
        this.#productName = productName;
        this.#productPrice = productPrice;
        this.#productImageName = productImageName;
    }

    get productCode() {
        return this.#productCode;
    }
    get productName() {
        return this.#productName;
    }
    get productPrice() {
        return this.#productPrice;
    }
    get productImageName() {
        return this.#productImageName;
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
            code: this.productCode,
            name: this.productName,
            price: this.productPrice,
            gazou: this.productImageName,
            sessionLogin: this.sessionLogin,
            sessionStaffName: this.sessionStaffName,
        };
    }
}