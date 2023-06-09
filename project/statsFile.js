const axios = require('axios');

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

  //? devuelve un nuevo Array
  const otherArray = routePath.map(viewLink);

  return Promise.all(otherArray)
    .then(() => results)
    .catch((error) => {
      throw error;
    });
};
/* const routePath = [
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
  }); */

module.exports = {
  statsFile
};
