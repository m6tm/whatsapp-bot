import path from 'path';
import app from '../app';
import { getEnv } from './utils/appSettings';
import { APP_ENV } from './enums/appSettings';

require('dotenv').config()

let package_json = require(path.join(process.cwd(), "package.json"));

/**
 * Get port from environment and store in Express.
 */

const local_hosts = getEnv().APP_ENV != APP_ENV.local ? [] : [
  "http://localhost:3000",
  "http://localhost:8000",
]

var port = normalizePort(process.env.PORT || 3500) as number,
  origins = [
    ...local_hosts,
  ];
app
        .set('port', port)
        .listen(port, () => {
                console.log(
                    '%s App is running at http://localhost:%d in %s mode',
                    '>>>',
                    port,
                    app.get('env')
                );
            })


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

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