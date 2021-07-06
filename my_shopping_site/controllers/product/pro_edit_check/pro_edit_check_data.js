'use strict';
const crypto = require('crypto');
const SuperProductData = require('../common/super_pro_data');
const ProductAddCheckData = require('../pro_add_check/pro_add_check_data');

module.exports = class ProductEditCheckData extends ProductAddCheckData {
    #productCode = null;

    /**
     * コンストラクター
     */
    constructor(productCode, productName, productPrice) {
        // super();
        super(productName, productPrice);

        this.#productCode = productCode;
    }

    get productCode() {
        return this.#productCode;
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
            productCode: this.productCode,
            productName: this.productName,
            productPrice: this.productPrice,
            productNameIsError: this.productNameIsError,
            productNameErrorMessage: this.productNameErrorMessage,
            productPriceIsError: this.productPriceIsError,
            productPriceErrorMessage: this.productPriceErrorMessage,
        };
    }
}