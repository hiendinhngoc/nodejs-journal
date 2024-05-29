const { logEvents } = require('./logEvent');

const errorHandler = async (err, req, res, next) => {
  logEvents(`${err.message}\t${err.stack}`, 'errorLog.txt');
  res.status(500).send(err.message);
}

module.exports = errorHandler;