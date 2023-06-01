const fs = require('fs'); // file system
const path = require('path');
// const clc = require('cli-color');
const process = require('process');

// TODO: Saber si la ruta existe
/* const existPath = (routePath) => {
 if (fs.existsSync(routePath)) {
    console.log('existe path')
 } else {
    console.log('no existe path')
  }
} */


// TODO: Convertir el path
/* const convertPath = (routePath) => {
  if (path.isAbsolute(routePath)) {
    console.log('ruta absoluta: ', routePath)
    return routePath
  } else {
    const pathRelative = path.resolve(routePath)
    console.log('ruta convertida: ', pathRelative);
    return pathRelative
  }
} */

// ? ¿Cuál es la diferencia de / y su inversa?

// TODO: Leer el directorio
const learnDirectory = (routePath) => {
  return fs.readdirSync(routePath);
  // return learnRoute;
}

// TODO: Leer el archivo
const learnFile = (routePath) => {
  return fs.readFile(routePath, 'utf-8');
}

// TODO: Saber si es un directorio
const checkDirectory = (routePath) => {
  const element= fs.statSync(routePath).isDirectory();
  return element
}

// learnDirectory(__dirname);
// learnDirectory(__dirname)
// console.log('es un directorio', checkDirectory('../resource')); 

// TODO: Saber si un archivo
const checkFile = (routePath) => {
  return fs.statSync(routePath).isFile();
}

// console.log(checkFile('../resource/archive.txt'), 'es un archivo');


// TODO: Validar que tenga la extensión .md
const validateMd = (routePath) => {
  return path.extname(routePath) === '.md'
}

// console.log(validateMd('../resource/myfile.md'), 'tiene la extensión .md')

// TODO: Operador Ternario

/* const saveArray = (routePath) => {
  let array = [];

  if(checkFile(routePath) && validateMd(routePath)) {
    array.push(routePath)
  }

  return array;
} */

// console.log('saveArray', saveArray('../resource'))

//! 
/* const args = process.argv;
  
console.log("number of arguments is "+args.length);
  
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
}); */

//* no sé

// extraer los archivos .md
/* const trayendoFiles = (routePath) => {
  const data = learnDirectory(routePath)
  let arrayFiles = data.filter((element) => {
    if (validateMd(element)) {
      return element
    }
  })
  return arrayFiles
}

console.log(trayendoFiles('../resource')) */

module.exports = {
  learnDirectory,
  checkDirectory,
  checkFile,
  validateMd,
  learnFile
}