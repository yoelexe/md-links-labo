// const fetch = require('node-fetch');
const axios = require('axios');
const {getFile} = require('./getFile.js');
const { saveArray } = require('./saveArray.js');

const statsFile = (links) => {
  return new Promise((resolve, reject) => {
    const results = [];

    const processLink = (link) => {
      return axios.get(link.href)
        .then((response) => {
          const result = {
            href: link.href,
            text: link.text,
            file: link.file,
            status: response.status,
            ok: 'ok'
          };
          results.push(result);
        })
        .catch((error) => {
          const result = {
            href: link.href,
            text: link.text,
            file: link.file,
            sstatus: error.response ? 404 : 'Error 404',
            ok: 'fail'
          };
          results.push(result);
        });
    };

    const linkPromises = [];
    for (const link of links) {
      linkPromises.push(processLink(link));
    }

    Promise.all(linkPromises)
      .then(() => {
        resolve(results);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const links = [
  {
    href: 'https://miro.com/app/board/uXjVMWUhOO0=/',
    text: 'Miro',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\private\\other.md'
  },
  {
    href: '#historia-de-usuario-2',
    text: 'Historia de Usuario 2.',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\private\\other.md'
  },
  {
    href: 'https://github.com/yoelexe/',
    text: 'Github',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\private\\other.md'
  },
  {
    href: 'https://www.adasdasdgfdyhgfretef.com/',
    text: 'Google',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\private\\other.md'
  },
];

statsFile(links)
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error('Error al procesar los enlaces:', error);
  });

// TODO: Función que retorne las estadisticas del enlace
const getStats = (routePath) => {

}

// TODO: Función que retorne estadisticas con los enlaces rotos

console.log('statsFile', statsFile('../resource/myfile.md'))

module.exports = {
  statsFile,
  getStats
};
