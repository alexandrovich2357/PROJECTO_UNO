/* var scraper = require('table-scraper');
var fs = require('fs');

scraper
  .get('https://es.wikipedia.org/wiki/Campeonato_del_mundo_de_ajedrez')
  .then(function(tableData) {
    fs.writeFile("chessPlayers.json", JSON.stringify(tableData), function(err) {
        if (err) {
            console.log(err);
        }
    });
  }); */

  fetch('api.js')
  .then(response => response.json())
  .then(data=> console.log(data))
  .catch(error => console.error(error));
