var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var staffListRouter = require('./routes/staff_list');
var staffAddRouter = require('./routes/staff_add');
var staffAddCheckRouter = require('./routes/staff_add_check');
var staffAddDoneRouter = require('./routes/staff_add_done');
var staffEditRouter = require('./routes/staff_edit');
var staffEditCheckRouter = require('./routes/staff_edit_check');
var staffEditDoneRouter = require('./routes/staff_edit_done');
var staffBranchRouter = require('./routes/staff_branch');
var staffNgRouter = require('./routes/staff_ng');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/staff_list', staffListRouter);
app.use('/staff_add', staffAddRouter);
app.use('/staff_add_check', staffAddCheckRouter);
app.use('/staff_add_done', staffAddDoneRouter);
app.use('/staff_edit', staffEditRouter);
app.use('/staff_edit_check', staffEditCheckRouter);
app.use('/staff_edit_done', staffEditDoneRouter);
app.use('/staff_branch', staffBranchRouter);
app.use('/staff_ng', staffNgRouter);

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
