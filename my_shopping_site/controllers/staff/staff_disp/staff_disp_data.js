'use strict';
const crypto = require('crypto');
const SuperStaffData = require('../common/super_staff_data');

module.exports = class StaffDispData extends SuperStaffData {
    #staffCode = null;
    #staffName = null;

    /**
     * コンストラクター
     */
    constructor(staffCode, staffName) {
        super();

        this.#staffCode = staffCode;
        this.#staffName = staffName;
    }

    get staffCode() {
        return this.#staffCode;
    }
    get staffName() {
        return this.#staffName;
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
            code: this.staffCode,
            name: this.staffName,
            sessionLogin: this.sessionLogin,
            sessionStaffName: this.sessionStaffName,
        };
    }
}