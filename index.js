// const {existPath} = require('./src/absolute');
const { verifyPath } = require('./project/verifyPath.js');
const { saveArray } = require('./project/saveArray.js');
const { getFile, usingFlat } = require('./project/getFile.js');
const { statsFile } = require('./project/statsFile.js');
const { getStats, getBroke } = require('./project/countPath.js');
// require('./resource')

//! Orden de las funciones:
//* verifyPath
//* saveArray -> guardar en un array las rutas
//* getFile -> extraer links
//* statsFile -> peticion http con axios
//* counPath -> estadisticas
//* cliPath -> CLI


//? encadenar promesas
const mdLinks = (path, options) => {

  return new Promise((resolve, reject) => {
    if (verifyPath(path)) {
      const final = saveArray(path)
      /* const get = usingFlat(final) */
      usingFlat(final)
      .then((response) => {
        if(options.validate){
          resolve(statsFile(response))
        }else if(options.stats){
          resolve(getStats(response))
        }else if(options.stats && options.validate){
          resolve(getBroke(response))
        }
      })
      .catch((err) => {
        console.log(err)
      })
      /* resolve(get) */
    } else{
      reject('la ruta no es válida')
    }
  })
}

// node console.log(mdLinks('./resource/myfile.md'))


module.exports = {
  mdLinks
}