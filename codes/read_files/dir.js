const fs = require('fs');
const path = require('path');

if(!fs.existsSync(path.join('files', 'new_dir'))) {
  fs.mkdir(path.join('files', 'new_dir'), (err) => {
    if(err) throw err;

    console.log('Directory created')
  });
}
console.log("continue running");
if(fs.existsSync(path.join('files', 'new_dir'))) {
  fs.rmdir(path.join('files', 'new_dir'), (err) => {
    if(err) throw err;

    console.log('Directory removed')
  });
}