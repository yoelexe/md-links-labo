const fs = require('fs'); // file system
const path = require('path');
const axios = require('axios');

// TODO: Leer el directorio
const learnDirectory = (routePath) => {
  return fs.readdirSync(routePath);
}

// TODO: Saber si es un directorio
const checkDirectory = (routePath) => {
  const element= fs.statSync(routePath).isDirectory();
  return element
}

// TODO: Saber si un archivo
const checkFile = (routePath) => {
  const element = fs.statSync(routePath).isFile();
  return element
}

// TODO: Validar que tenga la extensión .md
const validateMd = (routePath) => {
  return path.extname(routePath) === '.md'
}

//TODO: Verificar la ruta y convertirla en absoluta
const verifyPath = (routePath) => {
  if (fs.existsSync(routePath)) {
    if(path.isAbsolute(routePath)){
      return routePath
    }else{
      return path.resolve(routePath)
    }}else {
      return 'error'
    }
}

// TODO: Retorna un array uniendo las rutas
// TODO: Usando { recursividad }
const saveArray = (routePath) => {
  let array = [];

  const resultPath = verifyPath(routePath)

  if (checkFile(resultPath) && validateMd(resultPath)) {
    array.push(resultPath);
  }
  
  if (checkDirectory(resultPath)) {
    const geDirectory = learnDirectory(resultPath);
    geDirectory.forEach((file) => {
      const joinPath = path.join(resultPath, file);
      array = array.concat(saveArray(joinPath))      
    });
  }
  return array;
};

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

const usingFlat = (path) => {
  const result = path.map(file => getFile(file))
  return Promise.all(result).then(res => res.flat())
}

// TODO: Devoler las estadisticas de cada link con axios.get()
const statsFile = (routePath) => {
  const results = [];

  const viewLink = (link) => {
    return axios.get(link.href)
    .then((response) => {
        const result = {
          href: link.href,
          text: link.text,
          file: link.file,
          status: response.status,
          message: 'ok'
        };
        results.push(result);
      })
      .catch((error) => {
        const result = {
          href: link.href,
          text: link.text,
          file: link.file,
          status: error.response ? 404 : 'error',
          message: 'fail'
        };
        results.push(result);
      });
  };

  const otherArray = routePath.map(viewLink);

  return Promise.all(otherArray)
    .then(() => results)
    .catch((error) => {
      throw error;
    });
};


// TODO: Función que retorne las estadisticas del enlace
const getStats = (routePath) => {
  const set = new Set();

  const total = {
    total: routePath.length,
    unique: 0,
  };

  for (let i = 0; i < routePath.length; i++) {
    const href  = routePath[i];
    set.add(href);
  }

  total.unique = set.size;

  return total;
};

const getBroke = (routePath) => {
  const broke = routePath.reduce((count, path) => {
    if (path.message === 'fail') {
      return count + 1
    }
    return count
  },0);

  const total = {
    total: routePath.length,
    unique: new Set(routePath.map(( href ) => href)).size,
    broken: broke
  };

  return total;
};

module.exports = {
  learnDirectory,
  checkDirectory,
  checkFile,
  validateMd,
  verifyPath,
  saveArray,
  getFile,
  usingFlat,
  statsFile,
  getStats,
  getBroke
}