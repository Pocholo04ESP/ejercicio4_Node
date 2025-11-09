const http = require('http');
const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');
const port = 3000;
const url = 'https://store.steampowered.com/?l=spanish';

let ultimoTitulo = '';
let ultimaDescarga = '';
let cantidadEnlaces = 0;

function descargarYProcesar() {
  console.log('Descargando página...');
  https.get(url, (respuesta) => {
    let datos = '';

    respuesta.on('data', (trozo) => {
      datos += trozo;
    });

    respuesta.on('end', () => {
      ultimaDescarga = new Date().toLocaleString();
      fs.writeFileSync('index.html', datos);

      const $ = cheerio.load(datos);

      // Extraer el título y el número de enlaces
      ultimoTitulo = $('title').text().trim() || '(sin título)';
      cantidadEnlaces = $('a').length;

      console.log(`Descargado y procesado ${url}`);
      console.log(`Título: ${ultimoTitulo}`);
      console.log(`Enlaces encontrados: ${cantidadEnlaces}`);
    });

  }).on('error', (error) => {
    console.error('Error al descargar la página:', error.message);
  });
}

descargarYProcesar();
setInterval(descargarYProcesar, 60 * 1000);

const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  const info = {
    url: url,
    ultima_descarga: ultimaDescarga,
    titulo_extraido: ultimoTitulo,
    cantidad_enlaces: cantidadEnlaces
  };

  res.end(JSON.stringify(info, null, 2));
});

servidor.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});