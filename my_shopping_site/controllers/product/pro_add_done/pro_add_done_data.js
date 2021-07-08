'use strict';
const crypto = require('crypto');
const SuperProductData = require('../common/super_pro_data');

module.exports = class ProductAddDoneData extends SuperProductData {
    #productName = null;

    /**
     * コンストラクター
     */
    constructor(productName) {
        super();

        this.#productName = productName;
    }

    get productName() {
        return this.#productName;
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
            name: this.productName,
            productPrice: this.productPrice,
            imageName: this.imageName,
            productNameIsError: this.productNameIsError,
            productNameErrorMessage: this.productNameErrorMessage,
            productPriceIsError: this.productPriceIsError,
            productPriceErrorMessage: this.productPriceErrorMessage,
            sessionLogin: this.sessionLogin,
            sessionStaffName: this.sessionStaffName,
        };
    }
}