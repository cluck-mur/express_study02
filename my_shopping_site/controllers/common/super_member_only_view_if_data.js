"use strict";
const crypto = require("crypto");
const SuperViewIfData = require('./super_view_if_data');


module.exports = class SuperMemberOnlyViewIfData extends SuperViewIfData {
    _sessionMemberLogin = false;
    _sessionMemberCode = null;
    _sessionMemberName = null;

    /**
     * コンストラクター
     */
    constructor() {
        super();
        this._sessionMemberLogin = false;
        this._sessionMemberCode = null;
        this._sessionMemberName = null;
    }

    get sessionMemberLogin() {
        return this._sessionMemberLogin;
    }
    set sessionMemberLogin(setData) {
        this._sessionMemberLogin = setData;
    }
    get sessionMemberCode() {
        return this._sessionMemberCode;
    }
    set sessionMemberCode(setData) {
        this._sessionMemberCode = setData;
    }
    get sessionMemberName() {
        return this._sessionMemberName;
    }
    set sessionMemberName(setData) {
        this._sessionMemberName = setData;
    }
};
