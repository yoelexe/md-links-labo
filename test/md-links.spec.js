const fs = require('fs');
const path = require('path');
const {
  verifyPath
} = require('../project/verifyPath.js');

const {
  saveArray
} = require('../project/saveArray.js');

const {
  getFile
} = require('../project/getFile.js')


describe('verifyPath', () => {
  it('return is a function ', () => {
    expect(typeof verifyPath).toBe('function')
  });
  it('return "la ruta no existe" ', () => {
    const result = verifyPath('../ayuda')
    expect(result).toBe('la ruta no existe')
  });
  it('return la ruta absoluta si es absoluta ', () => {
    const result = verifyPath(__dirname)
    expect(result).toBe(__dirname)
  });
});

describe('saveArray', () => {
  it('return an array con los archivos .md', () => {
    const validMd = '/Users/Hogar/Desktop/Laboratoria/md-links-labo/resource'
    const expectResult = [
      '\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\myfile.md',
      '\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\private\\other.md'
    ]
    const result = saveArray(validMd)
    expect(result).toEqual(expectResult)
  })
});

/* describe('getFile', () => {
  it('return an Object ', () => {
    const validMd = '/Users/Hogar/Desktop/Laboratoria/md-links-labo/resource/myfile.md'
    const expectResult = [
      {
        href: 'https://www.youtube.com/',
        text: 'enlace',
        file: '../resource/myfile.md'
      }
    ]
    const result = getFile(validMd)
    expect(result).toEqual(expectResult)
  })
}); */
