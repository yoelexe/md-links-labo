const fs = require('fs')
const saveArray = require('./saveArray.js');
// const learnFile = require('./absolute.js')
const markdown = require('markdown-it');
const jsdom = require('jsdom');
const { JSDOM } = jsdom
const {verifyPath} = require('./verifyPath.js')

/* const abc = (routePath) => {
  // asíncrona
  fs.readFile(routePath, 'utf8', (err, data) => {
    if (err) {
      console.log('hola', err) 
    }   
    return console.log('leyendo el archivo', data)
  }) 
} */

/* const learnFile = (routePath) => {
  return fs.readFile(routePath, 'utf8');
}
 */
// TODO: Extraer los links de los archivos .md
const getFile = (routePath) => {

  const resultPath = verifyPath(routePath)
  fs.readFile(resultPath, 'utf8', (err, data) => {
    if (err) {
      console.log('hola', err) 
    } else {
      // [nombre] texto del enlace
      // (link)
      const regex = /\[([^\[]+)\](\(.*\))/gm;
      const linkMatch = data.match(regex);

      if(linkMatch !== null){
        const newArray = linkMatch.map((e) => {
          return{
            href: e.slice(e.indexOf(']') + 2, -1),
            text: e.slice(e.indexOf('[') + 1, e.indexOf(']')),
            file: resultPath
          }
        });

        return console.log(newArray);
      }
    }
  }) 
}

console.log(getFile('../resource/myfile.md'))

module.exports = {
  getFile
}

