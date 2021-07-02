'use strict';
const crypto = require('crypto');

module.exports = class StaffAddCheckReslt {
    /**
     * コンストラクター
     */
    constructor(staffName, staffPass, staffPass2) {
        this._staffName = staffName;
        this._staffPass = staffPass;
        this._staffPass2 = staffPass2;

        this._staffNameIsError = false;
        this._staffNameErrorMessage = '';
        this._staffPassIsError = false;
        this._staffPassErrorMessage = '';

        this._md5Pass = '';
        if (!(!staffPass || staffPass.length < 1)) {
            const md5 = crypto.createHash('md5');
            md5.update(this._staffPass);
            this._md5Pass = md5.digest('base64');
        }
    }

    get staffName() {
        return this._staffName;
    }
    get staffPass() {
        return this._staffPass;
    }
    get staffPass2() {
        return this._staffPass2
    }

    get staffNameIsError() {
        return this._staffNameIsError
    }
    set staffNameIsError(errorFlg) {
        this._staffNameIsError = errorFlg;
    }
    get staffNameErrorMessage() {
        return this._staffNameErrorMessage;
    }
    set staffNameErrorMessage(message) {
        this._staffNameErrorMessage = message;
    }
    get staffPassIsError() {
        return this._staffPassIsError;
    }
    set staffPassIsError(errorFlg) {
        this._staffPassIsError = errorFlg;
    }
    get staffPassErrorMessage() {
        return this._staffPassErrorMessage;
    }
    set staffPassErrorMessage(message) {
        this._staffPassErrorMessage = message;
    }
    get md5Pass() {
        return this._md5Pass;
    }

    /**
     * 
     */
    get resultObject() {
        console.log(this.makeObject());
        return this.makeObject();
    }

    /**
     * 
     * @returns 
     */
    makeObject() {
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