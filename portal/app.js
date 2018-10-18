var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var bodyParser = require('body-parser')
var logger = require('morgan');

var indexRouter = require('./routes/indexPage');
var usersRouter = require('./routes/usersPage');
var filesRouter = require('./routes/filesPage');
var loginRouter = require('./routes/loginPage')
var apiRouter = require('./routes/api')



var app = express();
const port = 3000


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));


app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('123456789000'));
app.use(session({secret:"123", resave:false, saveUninitialized:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/files', filesRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('errorPage');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))