const fs = require("fs"); // file system
const path = require("path");
// const clc = require('cli-color');
const process = require("process");

const {
  checkFile,
  validateMd,
  checkDirectory,
  learnDirectory,
} = require("./absolute.js");

const {verifyPath} = require('./verifyPath.js')

const saveArray = (routePath) => {
  let array = [];

  if (verifyPath(checkFile(routePath))) {
    array.push(routePath);
  }
  
  if (checkDirectory(routePath)) {
    const geDirectory = learnDirectory(routePath);
    geDirectory.forEach((file) => {
      const joinPath = path.join(routePath, file);
      array = array.concat(saveArray(joinPath))
      console.log(array)
      
    });
  } 

  return array;
};
console.log('saveArray', saveArray('../resource'));
module.exports = {
  saveArray,
};
