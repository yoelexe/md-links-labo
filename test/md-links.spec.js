const axios = require('axios');
const { 
  saveArray,
  verifyPath,
  getFile,
  getStats,
  getBroke,
  statsFile
 } = require('../functions.js');
const { mdLinks } = require('../index.js');
const { describe } = require('test');

jest.mock('axios');

describe('statsFile', () => {
  test('statsFile should return an array of results', () => {
    axios.get = jest.fn();
  
    axios.get
      .mockResolvedValueOnce({ status: 200 })
      .mockRejectedValueOnce({ response: { status: 404 } })
      .mockRejectedValueOnce(new Error('Error'));
  
    return statsFile([
      { href: 'https://github.com/yoelexe/', text: 'Github', file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md'},
      { href: 'https://www.adasdasdgfdyhgfretef.com/', text: 'Google', file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md'}
    ]).then(result => {
      expect(result).toEqual([
        {
          href: 'https://github.com/yoelexe/',
          text: 'Github',
          file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md',
          status: 200,
          message: 'ok'
        },
        {
          href: 'https://www.adasdasdgfdyhgfretef.com/',
          text: 'Google',
          file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-routePath-labo\\resource\\private\\other.md',
          status: 404,
          message: 'fail'
        }
      ]);
      expect(axios.get).toHaveBeenCalledWith('https://github.com/yoelexe/');
      expect(axios.get).toHaveBeenCalledWith('https://www.adasdasdgfdyhgfretef.com/');
      
    });
  });
})

describe('verifyPath', () => {
  it('return is a function ', () => {
    expect(typeof verifyPath).toBe('function')
  });
  it('return "la ruta no existe" ', () => {
    const result = verifyPath('../ayuda')
    expect(result).toBe('error')
  });
  it('return la ruta absoluta si es absoluta ', () => {
    const result = verifyPath(__dirname)
    expect(result).toBe(__dirname)
  });
}); 

describe('saveArray', () => {
  it('saveArray is a function ', () => {
    expect(typeof saveArray).toBe('function')
  });
  it('return an array con los archivos .md', () => {
    const validMd = '/Users/Hogar/Desktop/Laboratoria/md-links-labo/resource'
    const expectResult = [
      '\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\archive.md',
      '\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\myfile.md',
      '\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\private\\other.md'
    ]
    const result = saveArray(validMd)
    expect(result).toEqual(expectResult)
  })
});

describe('getStats', () => {
  it('getStats is a function ', () => {
    expect(typeof getStats).toBe('function')
  });
  it('return an object and stats', () => {
    const routePath = [
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
    ];

    const result = getStats(routePath);
    const result2 = getBroke(routePath)

    expect(result).toEqual({
      total: 4,
      unique: 4
    })

    expect(result2).toEqual({
      total: 4,
      unique: 4,
      broken: 2
    })
  });
});

describe('getFile', () => {
  it('getFile is a function ', () => {
    expect(typeof getFile).toBe('function')
  });
  it('return data', () => {
    const routePath = './resource/myfile.md';

    return getFile(routePath)
    .then((response) => {
      expect(response).toEqual([
        {
          href: 'https://www.youtube.com/',
          text: 'enlace',
          file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\myfile.md'
        }
      ])
    })
  })
  it('return array vacio', () => {
    const routePath = './resource/archive.md';
    return getFile(routePath)
    .then((response) => {
      expect(response).toEqual([])
    })
  })
});


/* describe('getFile', () => {
  it('getFile is a function ', () => {
    expect(typeof getFile).toBe('function')
  });
  it('return an Object ', () => {
    
    const expectResult = [
      {
        href: 'https://www.youtube.com/',
        text: 'enlace',
        file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\myfile.md'
      }
    ]
    const validMd = ['C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\myfile.md']
    expect(getFile(validMd)).toEqual(expectResult)
  })
}); */

describe('mdLinks', () => {
  it('mdLinks is a function ', () => {
    expect(typeof mdLinks).toBe('function')
  });
});
