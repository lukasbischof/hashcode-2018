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
    });
  }

  write(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.file, data, err => {
        if (err)
          reject(err);
        else
          resolve();
      });
    });
  }
}

module.exports = { FileIO };
