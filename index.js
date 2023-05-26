const {existPath} = require('./src/absolute');
const verifyPath = require('./project/verifyPath.js');

const mdLinks = (path, options) => new Promise((resolve, reject)=> {
  if (!verifyPath(path)) {
    return reject(`La ruta ${path} no existe`)
  } else {
    
  }
})

mdLinks()