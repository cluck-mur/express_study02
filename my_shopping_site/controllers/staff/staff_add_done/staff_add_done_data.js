'use strict';
const crypto = require('crypto');
const SuperStaffData = require('../common/super_staff_data');

module.exports = class StaffAddDoneData extends SuperStaffData {
    #staffName = null;

    /**
     * コンストラクター
     */
    constructor(staffName) {
        super();

        this.#staffName = staffName;
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
            name: this.staffName,
            sessionLogin: this.sessionLogin,
            sessionStaffName: this.sessionStaffName,
        };
    }
}