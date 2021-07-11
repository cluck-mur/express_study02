'use strict'

module.exports = class ShopConst {
    static #ROUTE_BASE_PATH = 'shop';

    constructor() {
    }

    static get ROUTE_BASE_PATH() {
        return ShopConst.#ROUTE_BASE_PATH;
    }

    static buildRoutePathForRequire(target) {
        if (ShopConst.#ROUTE_BASE_PATH && ShopConst.#ROUTE_BASE_PATH.length > 0) {
            return 'routes/' + ShopConst.#ROUTE_BASE_PATH + '/' + target;
        } else {
            return target;
        }
    }
}