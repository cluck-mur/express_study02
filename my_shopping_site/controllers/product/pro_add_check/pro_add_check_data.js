'use strict';
const crypto = require('crypto');
const SuperProductData = require('../common/super_pro_data');

module.exports = class ProductAddCheckData extends SuperProductData {
    #productName = null;
    #productPrice = null;
    #imageName = null;

    #productNameIsError = false;
    #productNameErrorMessage = null;
    #productPriceIsError = false;
    #productPriceErrorMessage = null;

    /**
     * コンストラクター
     */
    constructor(productName, productPrice, imageName) {
        super();

        this.#productName = productName;
        this.#productPrice = productPrice;
        this.#imageName = imageName;

        this.#productNameIsError = false;
        this.#productNameErrorMessage = null;
        this.#productPriceIsError = false;
        this.#productPriceErrorMessage = null;
    }

    get productName() {
        return this.#productName;
    }
    get productPrice() {
        return this.#productPrice;
    }
    get imageName() {
        return this.#imageName;
    }

    get productNameIsError() {
        return this.#productNameIsError
    }
    set productNameIsError(errorFlg) {
        this.#productNameIsError = errorFlg;
    }
    get productNameErrorMessage() {
        return this.#productNameErrorMessage;
    }
    set productNameErrorMessage(message) {
        this.#productNameErrorMessage = message;
    }
    get productPriceIsError() {
        return this.#productPriceIsError;
    }
    set productPriceIsError(errorFlg) {
        this.#productPriceIsError = errorFlg;
    }
    get productPriceErrorMessage() {
        return this.#productPriceErrorMessage;
    }
    set productPriceErrorMessage(message) {
        this.#productPriceErrorMessage = message;
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
            productName: this.productName,
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