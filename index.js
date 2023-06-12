const {
  verifyPath,
  saveArray,
  usingFlat,
  statsFile,
  getStats,
  getBroke
} = require('./functions.js');

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (verifyPath(path)) {
      const final = saveArray(path)
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
    } else{
      reject('la ruta no es válida')
    }
  })
}

module.exports = {
  mdLinks
}