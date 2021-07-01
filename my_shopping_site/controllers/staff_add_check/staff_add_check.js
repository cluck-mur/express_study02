module.exports = new class StaffAddCheckController{
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
    staffAddCheck(req, res, next) {
        console.log(req.body);

        //let staffName
        // res.render('staff_add_check', { title: 'ろくまる農園 スタッフ追加チェック' });
        res.send("OK");
    }
}