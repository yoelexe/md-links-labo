const fetch = require("node-fetch");

const statsFile = (routePath) => {
  let newArray = [];

  newArray = routePath.map((path) =>
    fetch(path.href)
      .then((response) => {
        return {
          href: path.href,
          text: path.text,
          file: path.file,
          status: response.status,
          statusText: response.statusText

        }
      })
      .catch((error) => {
        // handle the error
        return {
          ref: path.href,
          text: path.text,
          file: path.file,
          status: 400,
          statusText: error
        }
      })
  );
  return newArray
};

// TODO: Función que retorne las estadisticas del enlace
const getStats = (routePath) => {

}

// TODO: Función que retorne estadisticas con los enlaces rotos

console.log(statsFile('../resource/myfile.md'))

module.exports = {
  statsFile,
  getStats
};
