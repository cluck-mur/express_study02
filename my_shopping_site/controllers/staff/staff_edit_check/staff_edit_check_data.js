'use strict';
const crypto = require('crypto');
const SuperStaffData = require('../common/super_staff_data');
const StaffAddCheckData = require('../staff_add_check/staff_add_check_data');

module.exports = class StaffEditCheckData extends StaffAddCheckData {
    #staffCode = null;

    /**
     * コンストラクター
     */
    constructor(staffCode, staffName, staffPass, staffPass2) {
        // super();
        super(staffName, staffPass, staffPass2);

        this.#staffCode = staffCode;
    }

    get staffCode() {
        return this.#staffCode;
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
            staffName: this.staffName,
            staffPass: this.staffPass,
            staffPass2: this.staffPass2,
            staffNameIsError: this.staffNameIsError,
            staffNameErrorMessage: this.staffNameErrorMessage,
            staffPassIsError: this.staffPassIsError,
            staffPassErrorMessage: this.staffPassErrorMessage,
            md5Pass: this.md5Pass,
        };
    }
}