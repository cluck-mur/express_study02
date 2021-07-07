'use strict'

module.exports = class StaffTopConst {
    static #ROUTE_BASE_PATH = 'staff_login';

    constructor() {
    }

    static get ROUTE_BASE_PATH() {
        return StaffTopConst.#ROUTE_BASE_PATH;
    }

    static buildRoutePathForRequire(target) {
        if (StaffTopConst.#ROUTE_BASE_PATH && StaffTopConst.#ROUTE_BASE_PATH.length > 0) {
            return 'routes/' + StaffTopConst.#ROUTE_BASE_PATH + '/' + target;
        } else {
            return target;
        }
    }
}