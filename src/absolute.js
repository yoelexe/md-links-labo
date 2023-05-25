const fs = require('fs'); // file system
const path = require('path');
const clc = require('cli-color');
const process = require('process');

// TODO: Saber si la ruta existe
const existPath = (routePath) => {
  if (fs.existsSync(routePath)) {
    console.log('existe path')
  } else {
    console.log('no existe path')
  }
}

// const r = new RegExp('^(?:[a-z]+:)?//', 'i');

// TODO: Convertir el path
const convertPath = (routePath) => {
  if (path.isAbsolute(routePath)) {
    return console.log(clc.red.bgWhite.underline('ruta absoluta: ', routePath))
  } else {
    const pathRelative = path.resolve(routePath)
    return console.log(clc.blue.blackBright.underline('ruta convertida: ', pathRelative))
  }
}

// const dir = process.argv[2].replace(/\\/g, '/');

// convertPath(routePath);
console.log(path.isAbsolute('/contratacion/openxchange/'));
console.log(path.isAbsolute('https://contratacion/openxchange/'));
console.log(clc.red(`ejemplo de ruta absoluta: ${__dirname}`))

// testeo
// r.test('//cdn.ejemplo.com/lib.js'); // true - URL absoluta, relativa al protocolo
// r.test('/directorio/prueba.txt'); // false - URL relativa
// console.log(r.test('test'))
console.log(convertPath('./fileName.txt'))

// ? ¿Cuál es la diferencia de / y su inversa?

// TODO: Leer el directorio
const learnDirectory = (routePath) => {
  // ? readdirSync
  // ? statsSync
  // qué es direct?
  // isDirectory
  const learnRoute = fs.readdirSync(routePath, "utf8");
  return learnRoute;
  // console.log('hola', learnRoute);
}

// TODO: Saber si es un directorio
const checkDirectory = (routePath) => {
  return fs.statSync(routePath).isDirectory();
}

//learnDirectory(__dirname);
learnDirectory('./archive')
console.log('es un directorio', checkDirectory('./archive'));

// TODO: Saber si un archivo
const checkFile = (routePath) => {
  return fs.statSync(routePath).isFile();
}

console.log(checkFile('./archive/archive.txt'), 'es un archivo');


// TODO: Validar que tenga la extensión .md
const validateMd = (routePath) => {
  return path.extname(routePath) === '.md'
}

console.log(validateMd('./archive/myfile.md'), 'tiene la extensión .md')

// TODO: Operador Ternario

const saveArray = (routePath) => {
  let array = [];

  if(checkFile(routePath) && validateMd(routePath)) {
    array.push(routePath)
  } else {
    console.log('por el momento no se guarda nada')
  }

  return array;
}

console.log(saveArray('./archive/private/other.md'))

//! 
const args = process.argv;
  
console.log("number of arguments is "+args.length);
  
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

//* no sé

// extraer los archivos .md
const trayendoFiles = (routePath) => {
  const data = learnDirectory(routePath)
  let arrayFiles = data.filter((element) => {
    if (validateMd(element)) {
      return element
    }
  })
  return arrayFiles
}

console.log(trayendoFiles('./archive'))

module.exports = {
  existPath,
  convertPath,
  learnDirectory,
  checkDirectory,
  checkFile,
  validateMd,
  saveArray
}