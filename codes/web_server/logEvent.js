const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join('files', 'events'))) {
      await fsPromises.mkdir(path.join(__dirname, '..', '..', 'files', 'web_server'), { recursive: true });
    }

    await fsPromises.appendFile(path.join(__dirname, '..', '..', 'files', 'web_server', logName), logItem);
  } catch (err) {
    console.log(err);
  }
}

module.exports = logEvents;