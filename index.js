// const {existPath} = require('./src/absolute');
const { verifyPath } = require('./project/verifyPath.js');
const { saveArray } = require('./project/saveArray.js');
const { getFile } = require('./project/getFile.js');
const { statsFile } = require('./project/statsFile.js');
// require('./resource')

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (verifyPath(path)) {
      const verify = verifyPath(path)
      const save = saveArray(verify)
      console.log(save)
    } else{
      return reject('la ruta no es válida')
    }
  })
}

// console.log(mdLinks('./resource/myfile.md'))


module.exports = {
  mdLinks
}