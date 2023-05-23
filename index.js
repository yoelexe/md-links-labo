const {existPath} = require('./src/absolute');

const mdLinks = (path, options) => new Promise((resolve, reject)=> {
  if (!existPath(path)) {
    return reject(`La ruta ${path} no existe`)
  } else {
    
  }
})