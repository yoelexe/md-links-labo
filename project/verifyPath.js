const fs = require('fs'); // file system
const path = require('path');

const verifyPath = (routePath) => {
  if (!fs.existsSync(routePath)) {
    return 'la ruta no existe'
  } else if(path.isAbsolute(routePath)){
    return routePath
  } else {
    const pathRelative = path.resolve(routePath)
    return pathRelative
  }
}

// console.log(verifyPath('../resource/myfile.md'))
//const routePath = '../resource/myfile.md'
// console.log(verifyPath(routePath))

module.exports = {
  verifyPath
}