'use strict';
const crypto = require('crypto');
const SuperStaffData = require('../common/super_staff_data');

module.exports = class StaffAddCheckData extends SuperStaffData {
    #staffName = null;
    #staffPass = null;
    #staffPass2 = null;

    #staffNameIsError = false;
    #staffNameErrorMessage = null;
    #staffPassIsError = false;
    #staffPassErrorMessage = null;

    /**
     * コンストラクター
     */
    constructor(staffName, staffPass, staffPass2) {
        super();

        this.#staffName = staffName;
        this.#staffPass = staffPass;
        this.#staffPass2 = staffPass2;

        this.#staffNameIsError = false;
        this.#staffNameErrorMessage = null;
        this.#staffPassIsError = false;
        this.#staffPassErrorMessage = null;

        super.md5Pass = this.#staffPass;
    }

    get staffName() {
        return this.#staffName;
    }
    get staffPass() {
        return this.#staffPass;
    }
    get staffPass2() {
        return this.#staffPass2
    }

    get staffNameIsError() {
        return this.#staffNameIsError
    }
    set staffNameIsError(errorFlg) {
        this.#staffNameIsError = errorFlg;
    }
    get staffNameErrorMessage() {
        return this.#staffNameErrorMessage;
    }
    set staffNameErrorMessage(message) {
        this.#staffNameErrorMessage = message;
    }
    get staffPassIsError() {
        return this.#staffPassIsError;
    }
    set staffPassIsError(errorFlg) {
        this.#staffPassIsError = errorFlg;
    }
    get staffPassErrorMessage() {
        return this.#staffPassErrorMessage;
    }
    set staffPassErrorMessage(message) {
        this.#staffPassErrorMessage = message;
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