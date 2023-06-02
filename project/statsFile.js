const axios = require('axios');

// TODO: Devoler las estadisticas de cada link con axios.get()
const statsFile = (routePath) => {
  return new Promise((resolve, reject) => {
    const results = [];

    const viewLink = (link) => {
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
            status: error.response ? 404 : 'error',
            ok: 'fail'
          };
          results.push(result);
        });
    };

    const otherArray = [];
    for (let i = 0; i < routePath.length; i++) {
      otherArray.push(viewLink(routePath[i]));
    }

    Promise.all(otherArray)
      .then(() => {
        resolve(results);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const routePath = [
  {
    href: 'https://miro.com/app/board/uXjVMWUhOO0=/',
    text: 'Miro',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md'
  },
  {
    href: '#historia-de-usuario-2',
    text: 'Historia de Usuario 2.',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md'
  },
  {
    href: 'https://github.com/yoelexe/',
    text: 'Github',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md'
  },
  {
    href: 'https://www.adasdasdgfdyhgfretef.com/',
    text: 'Google',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md'
  },
];

statsFile(routePath)
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error('Error al procesar los enlaces:', error);
  });

module.exports = {
  statsFile
};
