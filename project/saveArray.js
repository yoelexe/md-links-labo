const path = require("path");

const {
  checkFile,
  validateMd,
  checkDirectory,
  learnDirectory,
} = require("./absolute.js");

const {verifyPath} = require('./verifyPath.js')

// TODO: Retorna un array uniendo las rutas
// TODO: Usando { recursividad }
const saveArray = (routePath) => {
  let array = [];

  const resultPath = verifyPath(routePath)

  if (checkFile(resultPath) && validateMd(resultPath)) {
    array.push(resultPath);
  }
  
  if (checkDirectory(resultPath)) {
    const geDirectory = learnDirectory(resultPath);
    geDirectory.forEach((file) => {
      const joinPath = path.join(resultPath, file);
      array = array.concat(saveArray(joinPath))      
    });
  }
  return array;
};

// console.log('recursividad', saveArray('../resource'));

module.exports = {
  saveArray,
};
