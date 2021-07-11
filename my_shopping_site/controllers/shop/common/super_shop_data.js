"use strict";
const crypto = require("crypto");
const SuperMemberOnlyViewIfData = require('../../common/super_member_only_view_if_data');

module.exports = class SuperShopData extends SuperMemberOnlyViewIfData {
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
            sessionMemberLogin: this.sessionMemberLogin,
            sessionMemberName: this.sessionMemberName,
        };
    }
};
