module.exports = new class MstStaffConst {
    constructor() {
        this._NAME_LENGTH = 15;
        this._PASSWORD_LENGTH = 32;
    }

    get NAME_LENGTH() {
        return this._NAME_LENGTH;
    }

    get PASSWORD_LENGTH() {
        return this._PASSWORD_LENGTH;
    }

}