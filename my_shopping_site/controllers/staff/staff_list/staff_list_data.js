'use strict';
const crypto = require('crypto');
const SuperStaffData = require('../common/super_staff_data');

module.exports = class StaffListData extends SuperStaffData {
    #staffList = null;

    /**
     * コンストラクター
     */
    constructor(staffList) {
        super();

        this.#staffList = staffList;
    }

    get staffList() {
        return this.#staffList;
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
            staffList: this.staffList,
            sessionLogin: this.sessionLogin,
            sessionStaffName: this.sessionStaffName,
        };
    }
}