// check a file exists
const fs = require('fs');
const path = require('path');

/* const path = __dirname + '/file.text';

if (fs.existsSync(path)) {
  console.log('File exists')
} else {
  console.error('File not exists')
} */

const checkDirectory = (routePath) => {
  // ? readdirSync
  const learnRoute = fs.readdirSync(routePath);
  // console.log(learnRoute);
  console.log("\nCurrent directory filenames:");
  learnRoute.forEach(file => {
  console.log(file);
});

  /* learnRoute.forEach((routes) => {
    const absolutePath = path.join(routePath, routes);
    const stats = fs.statSync(absolutePath);
    if (stats.isDirectory()) {
      checkDirectory(absolutePath);
    } else {
      console.log(absolutePath)
    }
  }) */
}

const existsFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, stats) => {
        if (err) {
          if (err.code === 'ENOENT') {
           resolve(false);
          } else { // en caso de otro error
            reject(err);
          }
        }
        // devolvemos el resultado de `isFile`.
        resolve(stats.isFile());
      });
  });
}

// checkDirectory(__dirname.replace(/\\/g, '/') + '/file.text')
checkDirectory(__dirname);
// ? ENOENT

path.extname('index.html')
// return .html
// ? existsSync
// ? readFile

module.exports = {
  checkDirectory,
  existsFile
}