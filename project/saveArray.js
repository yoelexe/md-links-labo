const fs = require("fs"); // file system
const path = require("path");
// const clc = require('cli-color');

const {
  checkFile,
  validateMd,
  checkDirectory,
  learnDirectory,
} = require("./absolute.js");

const {verifyPath} = require('./verifyPath.js')

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
      // console.log(array)
      
    });
  }

  return array;
};
console.log('recursividad', saveArray('../resource'));
module.exports = {
  saveArray,
};
