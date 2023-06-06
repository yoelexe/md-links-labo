const fs = require('fs'); // file system
const path = require('path');
const process = require('process');

// ? ¿Cuál es la diferencia de / y su inversa?

// TODO: Leer el directorio
const learnDirectory = (routePath) => {
  return fs.readdirSync(routePath);
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

// TODO: Saber si un archivo
const checkFile = (routePath) => {
  return fs.statSync(routePath).isFile();
}

// TODO: Validar que tenga la extensión .md
const validateMd = (routePath) => {
  return path.extname(routePath) === '.md'
}


//! 
const args = process.argv;
  
console.log("number of arguments is "+args.length);
  
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

module.exports = {
  learnDirectory,
  checkDirectory,
  checkFile,
  validateMd,
  learnFile
}