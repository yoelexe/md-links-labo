// const {existPath} = require('./src/absolute');
const verifyPath = require('./project/verifyPath.js');
const saveArray = require('./project/saveArray.js');

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (!verifyPath(path)) {
      return reject(`La ruta ${path} existe`)
    } else {
      /* const verify = verifyPath(path);
      const save = saveArray(verify) */
  
      return resolve(`La ruta falla`)
  
      /*
      ? usar length para saber si hay mas de un archivo.md
      ? recorrerlos
      ? usar la función de extraer links
      ? no sé q poner en options
      */
  
      //! si no hay contenido dentro del documento?
    }
  })
}

// mdLinks(__dirname)



module.exports = {
  mdLinks
}