module.exports = new class DatMemberConst {
    #PASSWORD_LENGTH = 0;
    #NAME_LENGTH = 0;
    #EMAIL_LENGTH = 0;
    #POSTAL1_LENGTH = 0;
    #POSTAL2_LENGTH = 0;
    #ADDRESS_LENGTH = 0;
    #TEL_LENGTH = 0;

    constructor() {
        this.#PASSWORD_LENGTH = 32;
        this.#NAME_LENGTH = 15;
        this.#EMAIL_LENGTH = 50;
        this.#POSTAL1_LENGTH = 3;
        this.#POSTAL2_LENGTH = 4;
        this.#ADDRESS_LENGTH = 50;
        this.#TEL_LENGTH = 13;
    }

    get PASSWORD_LENGTH() {
        return this.#PASSWORD_LENGTH;
    }

    get NAME_LENGTH() {
        return this.#NAME_LENGTH;
    }

    get EMAIL_LENGTH() {
        return this.#EMAIL_LENGTH;
    }

    get POSTAL1_LENGTH() {
        return this.#POSTAL1_LENGTH;
    }

    get POSTAL2_LENGTH() {
        return this.#POSTAL2_LENGTH;
    }

    get ADDRESS_LENGTH() {
        return this.#ADDRESS_LENGTH;
    }

    get TEL_LENGTH() {
        return this.#TEL_LENGTH;
    }
}