const axios = require('axios');

/* const url = 'https://www.google.com';
axios.get(url).then(res => { 
    console.log("Test: "+ res.status)
}); */

const objeto = [
  {
    href: 'https://www.youtube.com/',
    text: 'enlace',
    file: 'C:\\Users\\Hogar\\Desktop\\Laboratoria\\md-links-labo\\resource\\myfile.md'
  }
];

const url = objeto[0].href;

axios.get(url)
  .then(response => {
    // Aquí puedes obtener el status de la respuesta
    const status = response.status;
    const text = response.text;
    console.log(`Status: ${status} Text: ${text}`);
  })
  .catch(error => {
    // Aquí puedes manejar el error en caso de que ocurra
    console.error(error);
  });