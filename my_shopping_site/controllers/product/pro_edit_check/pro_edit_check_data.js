'use strict';
const crypto = require('crypto');
const SuperProductData = require('../common/super_pro_data');
const ProductAddCheckData = require('../pro_add_check/pro_add_check_data');

module.exports = class ProductEditCheckData extends ProductAddCheckData {
    #productCode = null;
    #imageNameOld = null;

    /**
     * コンストラクター
     */
    constructor(productCode, productName, productPrice, imageName, imageNameOld) {
        // super();
        super(productName, productPrice, imageName);

        this.#productCode = productCode;
        this.#imageNameOld = imageNameOld;
    }

    get productCode() {
        return this.#productCode;
    }
    get imageNameOld() {
        return this.#imageNameOld;
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
            imageName: this.imageName,
            imageNameOld: this.imageNameOld,
            productNameIsError: this.productNameIsError,
            productNameErrorMessage: this.productNameErrorMessage,
            productPriceIsError: this.productPriceIsError,
            productPriceErrorMessage: this.productPriceErrorMessage,
        };
    }
}