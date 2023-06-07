const fs = require('fs'); // file system
const path = require('path');

const verifyPath = (routePath) => {
  if (fs.existsSync(routePath)) {
    // console.log('La ruta existe');
    return path.isAbsolute(routePath) ? routePath : path.resolve(routePath);
  } else {
    return 'la ruta no existe'
  }
}

// console.log(verifyPath('../resource/myfile.md'))

module.exports = {
  verifyPath
}