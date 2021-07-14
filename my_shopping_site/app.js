var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var StaffLoginConst = require('./routes/staff_login/staff_login_const');
var StaffConst = require('./routes/staff/staff_const');
var ProductConst = require('./routes/product/pro_const');
var ShopConst = require('./routes/shop/shop_const');
var OrderConst = require('./routes/order/order_const');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// staff_login 系
var staffLoginRouter = require('./' + StaffLoginConst.buildRoutePathForRequire('staff_login'));
var staffLoginCheckRouter = require('./' + StaffLoginConst.buildRoutePathForRequire('staff_login_check'));
var staffTopRouter = require('./' + StaffLoginConst.buildRoutePathForRequire('staff_top'));
var staffNologinNgRouter = require('./' + StaffLoginConst.buildRoutePathForRequire('staff_nologin_ng'));
var staffLogoutRouter = require('./' + StaffLoginConst.buildRoutePathForRequire('staff_logout'));
// staff 系
var staffListRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_list'));
var staffBranchRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_branch'));
var staffNgRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_ng'));
var staffAddRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_add'));
var staffAddCheckRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_add_check'));
var staffAddDoneRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_add_done'));
var staffEditRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_edit'));
var staffEditCheckRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_edit_check'));
var staffEditDoneRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_edit_done'));
var staffDeleteRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_delete'));
var staffDeleteDoneRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_delete_done'));
var staffDisplayRouter = require('./' + StaffConst.buildRoutePathForRequire('staff_disp'));
// product 系
var productListRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_list'));
var productBranchRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_branch'));
var productNgRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_ng'));
var productAddRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_add'));
var productAddCheckRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_add_check'));
var productAddDoneRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_add_done'));
var productDispRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_disp'));
var productEditRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_edit'));
var productEditCheckRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_edit_check'));
var productEditDoneRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_edit_done'));
var productDeleteRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_delete'));
var productDeleteDoneRouter = require('./' + ProductConst.buildRoutePathForRequire('pro_delete_done'));
// order 系
var orderDownloadRouter = require('./' + OrderConst.buildRoutePathForRequire('order_download'));
var orderDownloadDoneRouter = require('./' + OrderConst.buildRoutePathForRequire('order_download_done'));
// shop 系
var shopListRouter = require('./' + ShopConst.buildRoutePathForRequire('shop_list'));
var shopProductRouter = require('./' + ShopConst.buildRoutePathForRequire('shop_product'));
var shopCartinRouter = require('./' + ShopConst.buildRoutePathForRequire('shop_cartin'));
var shopCartlookRouter = require('./' + ShopConst.buildRoutePathForRequire('shop_cartlook'));
var clearCartRouter = require('./' + ShopConst.buildRoutePathForRequire('clear_cart'));
var kazuChangeRouter = require('./' + ShopConst.buildRoutePathForRequire('kazu_change'));
var shopFormCheckRouter = require('./' + ShopConst.buildRoutePathForRequire('shop_form_check'));
var shopFormDoneRouter = require('./' + ShopConst.buildRoutePathForRequire('shop_form_done'));
var memberLoginCheckRouter = require('./' + ShopConst.buildRoutePathForRequire('member_login_check'));
var memberLogoutRouter = require('./' + ShopConst.buildRoutePathForRequire('member_logout'));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxage: 1000 * 60 * 30
  }
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// staff_top 系
app.use('/staff_login/staff_login', staffLoginRouter);
app.use('/staff_login/staff_login_check', staffLoginCheckRouter);
app.use('/staff_login/staff_top', staffTopRouter);
app.use('/staff_login/staff_nologin_ng', staffNologinNgRouter);
app.use('/staff_login/staff_logout', staffLogoutRouter);
// staff 系
app.use('/staff/staff_list', staffListRouter);
app.use('/staff/staff_add', staffAddRouter);
app.use('/staff/staff_add_check', staffAddCheckRouter);
app.use('/staff/staff_add_done', staffAddDoneRouter);
app.use('/staff/staff_edit', staffEditRouter);
app.use('/staff/staff_edit_check', staffEditCheckRouter);
app.use('/staff/staff_edit_done', staffEditDoneRouter);
app.use('/staff/staff_branch', staffBranchRouter);
app.use('/staff/staff_ng', staffNgRouter);
app.use('/staff/staff_delete', staffDeleteRouter);
app.use('/staff/staff_delete_done', staffDeleteDoneRouter);
app.use('/staff/staff_disp', staffDisplayRouter);
// product 系
app.use('/product/pro_list', productListRouter);
app.use('/product/pro_branch', productBranchRouter);
app.use('/product/pro_ng', productNgRouter);
app.use('/product/pro_add', productAddRouter);
app.use('/product/pro_add_check', productAddCheckRouter);
app.use('/product/pro_add_done', productAddDoneRouter);
app.use('/product/pro_disp', productDispRouter);
app.use('/product/pro_edit', productEditRouter);
app.use('/product/pro_edit_check', productEditCheckRouter);
app.use('/product/pro_edit_done', productEditDoneRouter);
app.use('/product/pro_delete', productDeleteRouter);
app.use('/product/pro_delete_done', productDeleteDoneRouter);
// order 系
app.use('/order/order_download', orderDownloadRouter);
app.use('/order/order_download_done', orderDownloadDoneRouter);
// shop 系
app.use('/shop/shop_list', shopListRouter);
app.use('/shop/shop_product', shopProductRouter);
app.use('/shop/shop_cartin', shopCartinRouter);
app.use('/shop/shop_cartlook', shopCartlookRouter);
app.use('/shop/clear_cart', clearCartRouter);
app.use('/shop/kazu_change', kazuChangeRouter);
app.use('/shop/shop_form_check', shopFormCheckRouter);
app.use('/shop/shop_form_done', shopFormDoneRouter);
app.use('/shop/member_login_check', memberLoginCheckRouter);
app.use('/shop/member_logout', memberLogoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
