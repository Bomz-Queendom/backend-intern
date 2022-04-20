var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const rfs = require('rotating-file-stream');
const cors = require('cors');

//connect DB
const InitiateMongoServer = require('./lib/connectDB');
InitiateMongoServer();

//logger
var morgan = require('morgan');
var logger = require("./logger/logger");
var { stream } = logger;

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, '/logger/logs'),
});

// upload file
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


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//mogan
morgan.token('th-date', (req, res) => {
  const date = new Date();
  return date;
});
app.use(morgan('common', { stream: accessLogStream }));
app.use(
  morgan(
    ':th-date :method[pretty] :url :status :res[content-length] - :response-time ms',
    {
      stream: stream,
    }
  )
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//Router
var villagerRouter = require("./routes/villagerRouter");
app.use('/villager', villagerRouter);

var agentRouter = require("./routes/agentRouter");
app.use("/agent", agentRouter);

var petitionRouter = require("./routes/petitionRouter");
app.use('/petition', petitionRouter);

var authRouter = require('./routes/authRouter');
app.use('/auth', authRouter);

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