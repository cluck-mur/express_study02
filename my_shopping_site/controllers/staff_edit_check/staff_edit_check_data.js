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
    get staffName() {
        return super.staffName;
    }
    get staffPass() {
        return super.staffPass;
    }
    get staffPass2() {
        return super.staffPass2
    }

    get staffNameIsError() {
        return super.staffNameIsError
    }
    set staffNameIsError(errorFlg) {
        super.staffNameIsError = errorFlg;
    }
    get staffNameErrorMessage() {
        return super.staffNameErrorMessage;
    }
    set staffNameErrorMessage(message) {
        super.staffNameErrorMessage = message;
    }
    get staffPassIsError() {
        return super.staffPassIsError;
    }
    set staffPassIsError(errorFlg) {
        super.staffPassIsError = errorFlg;
    }
    get staffPassErrorMessage() {
        return super.staffPassErrorMessage;
    }
    set staffPassErrorMessage(message) {
        super.staffPassErrorMessage = message;
    }
    get md5Pass() {
        return super.md5Pass;
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