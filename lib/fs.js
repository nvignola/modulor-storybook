const fs = require('fs');

const readFile = file => {
  return new Promise((resolve) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if(err){
        resolve(false);
        return;
      }
      resolve(data.toString());
    });
  });
}

const checkFile = file => readFile(file).then((content) => content ? file : false);

const saveFile = (file, content) => new Promise((resolve, reject) => {
  fs.writeFile(file, content, (err) => {
    if(err){
      return reject(err);
    }
    resolve(true);
  });
});


module.exports = { readFile, checkFile, saveFile }
