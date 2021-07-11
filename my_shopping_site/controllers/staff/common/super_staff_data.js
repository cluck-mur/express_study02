"use strict";
const crypto = require("crypto");
const SuperStaffOnlyViewIfData = require('../../../controllers/common/super_staff_only_view_if_data');

module.exports = class SuperStaffData extends SuperStaffOnlyViewIfData {
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
