const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const timeout = require('connect-timeout')

//////////////////
// Server Setup
//////////////////

app.set("env", process.env.NODE_ENV || "development");
app.set("host", process.env.HOST || "localhost");
app.set("port", process.env.PORT || 3000);
app.use(helmet());
app.disable('x-powered-by')

app.listen(app.get("port"), function () {
  console.log('\n' + '**********************************');
  console.log('REST API listening on port ' + app.get("port"));
  console.log('**********************************' + '\n');
});

const rest_api = require('./app/index')
app.use('/', rest_api);

////////////////////
// Error Handlers
////////////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res,next) {
    if (err.code && err.code == "ETIMEDOUT")
    {
      err.status = 404
    }
    res.status( err.status || 500 )
    .json({
      status: 'error',
      message: err.message? err.message.message? err.message.message : err.message : err
    })
    .end();
  });
}

module.exports=app;
