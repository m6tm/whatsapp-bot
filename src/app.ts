import AppRouter from './routes/api';
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import { AuthMiddleware } from './Http/middlewares/AuthMiddleware';
import AUTHORIZED_URLS from './utils/cors';
import { getEnv } from './utils/appSettings';

require('dotenv').config()

var port = process.env.PORT || '3500'
const serve = express();

serve
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false, type: 'multipart/form-data' }))
  .use(cookieParser())
  .use(AuthMiddleware)
  .use(cors({
    origin: AUTHORIZED_URLS,
  }))
  .use('/api', AppRouter)
  .use(function(req, res,) {
    // res.status(404);
    res.json({
      status: 404,
      message: 'Not Found',
    });
  })
  .set('port', port)
  .listen(port, () => {
    console.log('%s App is running at http://localhost:%s in %s mode', '>>>', port, getEnv().APP_ENV);
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