const fs = require("fs");
const { verifyPath } = require("./verifyPath.js");

// TODO: Extraer los links de los archivos .md
const getFile = (routePath) => {
  return new Promise((resolve, reject) => {
    const resultPath = verifyPath(routePath);
    fs.readFile(resultPath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const regex = /\[([^\[]+)\](\(.*\))/gm;
        const linkMatch = data.match(regex);

        if (linkMatch !== null) {
          const newArray = linkMatch.map((e) => {
            return {
              href: e.slice(e.indexOf("]") + 2, -1),
              text: e.slice(e.indexOf("[") + 1, e.indexOf("]")),
              file: resultPath,
            };
          });

          resolve(newArray);
        } else {
          resolve([]);
        }
      }
    });
  });
};

/* const ejemplo = [
  'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\myfile.md',
  'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\private\\other.md'
] */


const usingFlat = (path) => {
  const result = path.map(file => getFile(file))
  return Promise.all(result).then(res => res.flat())
}

/* getFile('../resource/myfile.md')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error al leer el archivo:", error);
  }); */

// console.log(getFile('../resource/myfile.md'))

module.exports = {
  getFile,
  usingFlat
};