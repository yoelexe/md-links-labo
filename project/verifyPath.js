const fs = require('fs'); // file system
const path = require('path');

const verifyPath = (routePath) => {
  if (fs.existsSync(routePath)) {
    // console.log('existe path')
    if (path.isAbsolute(routePath)) {
      // console.log('ruta absoluta: ', routePath)
      return routePath
    } else {
      const pathRelative = path.resolve(routePath)
      // console.log('ruta convertida: ', pathRelative);
      return pathRelative
    }
  } else {
    return 'error';
  }
}

console.log(verifyPath(__dirname))


module.exports = {
  verifyPath
}