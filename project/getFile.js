const fs = require('fs')
const saveArray = require('./saveArray.js');
const markdown = require('markdown-it');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const abc = (routePath) => {
  fs.readFile(routePath, 'utf8', (err, data) => {
    if (err) {
      return 'abc', err 
    }   
    return data
  }) 
}

// TODO: Extraer los links de los archivos .md
const getFile = (routePath) => {
  let pathArray = []
  const matchRegex = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;
  

  saveArray(routePath).forEach(file => {
    const matchRegex = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;
    let linkMatch = fs.readFile(file).match(matchRegex);
    console.log(linkMatch)

    if (linkMatch != null) {
      let result = markdown().render(fs.readFile(routePath))
      let dom = new JSON(result);

      linkMatch = dom.window.document.querySelectorAll('a');
      linkMatch.forEach((nose) => {
        const links = nose.href
        const text = nose.textContent.substring(0, 100);

        pathArray.push({
          href: links,
          text: text,
          file: file,
        })
      })
    }
  });

  return pathArray
}

getFile('../resource/myfile.md').then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})

module.exports = {
  getFile,
  abc
}

