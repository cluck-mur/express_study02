'use strict'

module.exports = class ProductConst {
    static #ROUTE_BASE_PATH = 'product';

    constructor() {
    }

    static get ROUTE_BASE_PATH() {
        return ProductConst.#ROUTE_BASE_PATH;
    }

    static buildRoutePathForRequire(target) {
        if (ProductConst.#ROUTE_BASE_PATH && ProductConst.#ROUTE_BASE_PATH.length > 0) {
            return 'routes/' + ProductConst.#ROUTE_BASE_PATH + '/' + target;
        } else {
            return target;
        }
    }
}