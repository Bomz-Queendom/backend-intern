var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var logger = require("./logger/winstonLogger");
var uploadImage = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//swagger
const swaggerDoc = require('./lib/swagger');
const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


//upload images
app.use(uploadImage({
  createParentPath: true,
  safeFileNames: false,
  preserveExtension: true
}))

//mongoose
const mongoose = require("mongoose");
main().catch(err => {
  logger.error(err);
  console.log(err);
});
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/deskplus', { useNewUrlParser: true });
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//Router
var villagerRouter = require("./routes/villagerRouter");
app.use('/villager', villagerRouter);

var agentRouter = require("./routes/agentRouter");
app.use("/agent", agentRouter);

var petitionRouter = require("./routes/petitionRouter");
const req = require('express/lib/request');
const res = require('express/lib/response');
app.use('/petition', petitionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;