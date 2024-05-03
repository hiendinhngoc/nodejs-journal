// This code support for Event Emitter session

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join('files', 'events'))) {
      await fsPromises.mkdir(path.join(__dirname, '..', '..', 'files', 'events'), { recursive: true });
    }

    await fsPromises.appendFile(path.join(__dirname, '..', '..', 'files', 'events', 'eventLog.txt'), logItem);
  } catch (err) {
    console.log(err);
  }
}

module.exports = logEvents;