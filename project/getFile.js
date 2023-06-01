const fs = require('fs')
const saveArray = require('./saveArray.js');
const markdown = require('markdown-it');
const jsdom = require('jsdom');
const { JSDOM } = jsdom

/* const abc = (routePath) => {
  // asíncrona
  fs.readFile(routePath, 'utf8', (err, data) => {
    if (err) {
      console.log('hola', err) 
    }   
    return console.log('leyendo el archivo', data)
  }) 
} */

// TODO: Extraer los links de los archivos .md
const getFile = (routePath) => {

  fs.readFile(routePath, 'utf8', (err, data) => {
    if (err) {
      console.log('hola', err) 
    } else {
      // [nombre] texto del enlace
      // (link)
      const regex = /\[([^\[]+)\](\(.*\))/gm;
      const linkMatch = data.match(regex);

      if(linkMatch !== null){
        const result = linkMatch.map((e) => {
          return{
            href: e.slice(e.indexOf(']') + 2, -1),
            text: e.slice(e.indexOf('[') + 1, e.indexOf(']')),
            file: routePath
          }
        });

        return console.log(result);
      }
    }
  }) 
}

console.log(getFile('C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\private\\other.md' ))

module.exports = {
  getFile
}

