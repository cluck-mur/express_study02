'use strict';
const crypto = require('crypto');
const SuperStaffLoginData = require('../common/super_staff_login_data');

module.exports = class StaffTopData extends SuperStaffLoginData {
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
}