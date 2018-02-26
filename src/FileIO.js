const fs = require('fs');

class FileIO {
  constructor(file) {
    this.file = file;
  }

  read() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, (err, data) => {
        if (err)
          reject(err);
        else
          resolve(data.toString());
      });
    })
  }
};

module.exports = { FileIO };
