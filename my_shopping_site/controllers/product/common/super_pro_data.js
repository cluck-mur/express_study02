"use strict";
const crypto = require("crypto");
const SuperViewIfData = require('../../../controllers/common/super_view_if_data');

module.exports = class SuperProductData extends SuperViewIfData {
    /**
     * コンストラクター
     */
    constructor() {
        super();
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
            sessionLogin: this.sessionLogin,
            sessionStaffName: this.sessionStaffName,
        };
    }
};
