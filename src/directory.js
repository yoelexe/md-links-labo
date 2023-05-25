// check a file exists
const fs = require('fs');
const path = require('path');
const { checkDirectory, learnDirectory} = require('./absolute.js');

/* const path = __dirname + '/file.text';

if (fs.existsSync(path)) {
  console.log('File exists')
} else {
  console.error('File not exists')
} */

// entraer los links (en un array) por cada archivo .md
const otherFunction = (routePath) => {
  // * readdirSync
  const learnRoute = fs.readdirSync(routePath);
  // console.log(learnRoute);
  console.log("\nCurrent directory filenames:");
  learnRoute.forEach((file) => {
  // console.log(file);
  // ? statSync
  // path.join() -> para unir las rutas
  const joinPath = path.join(routePath, file)
  console.log(joinPath)
  const statsPath = fs.statSync(joinPath);
  if(statsPath.isDirectory()){
    otherFunction(joinPath)
  } 

});

}
// devolver información sobre el archivo o directorio dado.
// stat -> estadisticas de un directorio
const existsFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, stats) => {
        if (err) {
          if (err.code === 'ENOENT') {
           resolve(false);
          } else { // en caso de otro error
            reject(err);
          }
        }
        // devolvemos el resultado de `isFile`.
        resolve(stats.isFile());
      });
  });
}

otherFunction('./archive');
// ? ENOENT

console.log('podemos retornar la extensión', path.extname('index.html'));
// return .html
// ? existsSync
// ? readFile
// ? readFileSync

module.exports = {
  otherFunction,
  existsFile
}