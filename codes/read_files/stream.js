const fs = require('fs');
const path = require("path");

const rs = fs.createReadStream(path.join('files', 'read_files', 'lorem.txt'), { encoding: 'utf8'} );

const ws = fs.createWriteStream(path.join('files', 'read_files', 'new-lorem.txt') );

// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk);
// })

// More efficient way to write the content of lorem.txt to new-lorem.txt
rs.pipe(ws)