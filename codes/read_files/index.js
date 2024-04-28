const fs = require('fs');
const path = require('path');

fs.readFile(path.join('files', 'read_files', 'starter.txt') , 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);
})

// This line to demontrade as asynchronous
console.log('Hello...');

// Don't need to specify utf8 here because it's default
fs.writeFile(path.join('files', 'read_files', 'reply.txt'), 'Hi, nice to meet you!', (err) => {
  if (err) throw err;

  console.log('Write complete');
})

fs.appendFile(path.join('files', 'read_files', 'test.txt'), 'Just test!', (err) => {
  if (err) throw err;

  console.log('Append complete');
})