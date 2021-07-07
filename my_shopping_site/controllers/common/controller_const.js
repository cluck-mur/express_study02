module.exports = class ControllerConst {
    static #STAFF_NOLOGIN_NG_PATH = '/staff_login/staff_nologin_ng';

    constructor() {
    }

    static get STAFF_NOLOGIN_NG_PATH() {
        return ControllerConst.#STAFF_NOLOGIN_NG_PATH;
    }

}