'use strict';
const crypto = require('crypto');
const SuperStaffData = require('../common/super_staff_login_data');

module.exports = class StaffLoginCheckData extends SuperStaffData {
    #staffCode = null;
    #staffPass = null;

    #isLoginOk = null;

    /**
     * コンストラクター
     */
    constructor(staffCode, staffPass) {
        // super();
        super();

        this.#staffCode = staffCode;
        this.#staffPass = staffPass;
        this.#isLoginOk = false;

        super.md5Pass = this.#staffPass;
    }

    get staffCode() {
        return this.#staffCode;
    }
    get staffPass() {
        return this.#staffPass;
    }
    get isLoginOk() {
        return this.#isLoginOk;
    }
    set isLoginOk(setData) {
        this.#isLoginOk = setData;
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
            staffCode: this.staffCode,
            md5Pass: this.md5Pass,
            isLoginOk: this.isLoginOk,
        };
    }
}