// const {existPath} = require('./src/absolute');
/* const { verifyPath } = require('./project/verifyPath.js');
const { saveArray } = require('./project/saveArray.js');
const { getFile, usingFlat } = require('./project/getFile.js');
const { statsFile } = require('./project/statsFile.js');
const { getStats, getBroke } = require('./project/countPath.js'); */
// require('./resource')

const {
  verifyPath,
  saveArray,
  usingFlat,
  statsFile,
  getStats,
  getBroke
} = require('./functions.js');


//! Orden de las funciones:
//* verifyPath
//* saveArray -> guardar en un array las rutas
//* getFile -> extraer links
//* statsFile -> peticion http con axios
//* counPath -> estadisticas
//* cliPath -> CLI

/* const path = process.argv[2];
const validate = process.argv.filter((element) => element === '--validate').length > 0
const stats = process.argv.filter((element) => element === '--stats').length > 0
const options = {
  validate: validate,
  stats: stats,
} */
/* const path = process.argv[2];
const validate = process.argv.filter((element) => element === '--validate').length > 0
const stats = process.argv.filter((element) => element === '--stats').length > 0
const options = {
  validate: validate,
  stats: stats,
} */

//? encadenar promesas
const mdLinks = (path, options) => {

  return new Promise((resolve, reject) => {
    if (verifyPath(path)) {
      const final = saveArray(path)
      /* const get = usingFlat(final) */
      usingFlat(final)
      .then((response) => {
        if(options.validate  && !options.stats){
          resolve(statsFile(response))
        }else if(options.stats && !options.validate ){
          resolve(getStats(response))
        }else if(options.stats && options.validate){
          resolve(getBroke(response))
        }else {
          resolve(response)
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

/* mdLinks(path, options).then((response) => {
  console.log(response)
})
.catch((err) => {
  console.log(err)
}) */

/* mdLinks(path, options)
.then((response) => {
  console.log(response)
})
.catch((err) => {
  console.error(err)
}) */


module.exports = {
  mdLinks
}