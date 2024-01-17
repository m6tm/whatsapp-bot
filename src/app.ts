import app from './routes/api';
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import logger from "morgan";
import { useExpressServer } from 'routing-controllers';
import UserController from './Http/Controller/UserController';

require('dotenv').config()

var port = process.env.PORT || '3500'
const serve = express();

useExpressServer(serve, {
  controllers: [
    UserController
  ]
})

serve
  .use(logger('dev'))
  // .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(function(req, res,) {
    // res.status(404);
    res.json({
      status: 404,
      message: 'Not Found',
    });
  })
  .set('port', port)
  .listen(port, () => {
    console.log('%s App is running at http://localhost:%d in %s mode', '>>>', port, app.get('env'));
  })

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}