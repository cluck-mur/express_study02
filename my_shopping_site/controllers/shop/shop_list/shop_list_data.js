'use strict';
const crypto = require('crypto');
const SuperShopData = require('../common/super_shop_data');

module.exports = class ProductListData extends SuperShopData {
    #shopProductList = null;

    /**
     * コンストラクター
     */
    constructor(shopProductList) {
        super();

        this.#shopProductList = shopProductList;
    }

    get shopProductList() {
        return this.#shopProductList;
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
            shopProductList: this.shopProductList,
            sessionMemberLogin: this.sessionMemberLogin,
            sessionMemberName: this.sessionMemberName,
        };
    }
}