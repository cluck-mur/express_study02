"use strict";
const crypto = require("crypto");
const SuperViewIfData = require('./super_view_if_data');


module.exports = class SuperMemberOnlyViewIfData extends SuperViewIfData {
    #sessionMemberLogin = false;
    #sessionMemberName = null;

    /**
     * コンストラクター
     */
    constructor() {
        super();
        this.#sessionMemberLogin = false;
        this.#sessionMemberName = null;
    }

    get sessionMemberLogin() {
        return this.#sessionMemberLogin;
    }
    set sessionMemberLogin(setData) {
        this.#sessionMemberLogin = setData;
    }
    get sessionMemberName() {
        return this.#sessionMemberName;
    }
    set sessionMemberName(setData) {
        this.#sessionMemberName = setData;
    }
};
