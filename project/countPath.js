// TODO: Función que retorne las estadisticas del enlace
const getStats = (routePath) => {
  //* creando un nuevo objeto
  //! almacenar los elementos unicos
  const set = new Set();

  //! inicializadas en 0
  const total = {
    total: routePath.length,
    unique: 0,
  };

  //! iterar el arreglo
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



/* const routePath = [
  {
    href: '#historia-de-usuario-2',
    text: 'Historia de Usuario 2.',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md',
    status: 'error',
    message: 'fail'
  },
  {
    href: 'https://www.adasdasdgfdyhgfretef.com/',
    text: 'Google',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md',
    status: 'error',
    message: 'fail'
  },
  {
    href: 'https://miro.com/app/board/uXjVMWUhOO0=/',
    text: 'Miro',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://github.com/yoelexe/',
    text: 'Github',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md',
    status: 200,
    message: 'ok'
  }
]


console.table(getBroke(routePath)) */

module.exports = {
  getStats,
  getBroke
}
