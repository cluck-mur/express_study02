module.exports = new class StaffAddController{
    /**
     * constructor
     * コンストラクタ
     */
     constructor() {
    }

    /**
     * ルーティング ルート(/)
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    staffAdd(req, res, next) {
        res.render('staff_add', { title: 'ろくまる農園' });
    }
}