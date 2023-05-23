const fs = require('fs'); // file system
const path = require('path');

//
const existPath = (routePath) => {
  if (fs.existsSync(routePath)) {
    console.log('existe path')
  } else {
    console.log('no existe path')
  }
}

// const r = new RegExp('^(?:[a-z]+:)?//', 'i');

const convertPath = (routePath) => {
  if (path.isAbsolute(routePath)) {
    return console.log('ruta absoluta: ', routePath)
  } else {
    const pathRelative = path.resolve(routePath)
    return console.log('ruta convertida: ', pathRelative)
  }
}

// const dir = process.argv[2].replace(/\\/g, '/');

// convertPath(routePath);
console.log(path.isAbsolute('/contratacion/openxchange/'));
console.log(path.isAbsolute('https://contratacion/openxchange/'));
console.log(`ejemplo de ruta absoluta: ${__dirname}`)

// testeo
// r.test('//cdn.ejemplo.com/lib.js'); // true - URL absoluta, relativa al protocolo
// r.test('/directorio/prueba.txt'); // false - URL relativa
// console.log(r.test('test'))
console.log(convertPath('./fileName.txt'))

// ? ¿Cuál es la diferencia de / y su inversa?

// TODO: Leer el directorio
const checkDirectory = (routePath) => {
  // ? readdirSync
  // ? statsSync
  // qué es direct?
  // isDirectory
  const learnRoute = fs.readdirSync(routePath);
  console.log('hola', learnRoute);
}

// TODO: Saber si es un directorio
const checkOptions = (routePath) => {
  return fs.statSync(routePath).isDirectory();
}

checkDirectory(__dirname);
console.log('es un directorio', checkOptions('./archive'));

const checkFile = (routePath) => {
  return fs.statSync(routePath).isFile();
}

console.log(checkFile('./archive/archive.txt'), 'es un archivo');

// validar que sea md

const validateMd = (routePath) => {
  return path.extname(routePath) === '.md'
}

console.log(validateMd('./archive/myfile.md'), 'tiene la extensión .md')



module.exports = {
  convertPath,
  existPath,
  checkDirectory,
  checkOptions,
  checkFile,
  validateMd
}