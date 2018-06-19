var express = require ('express');
var server = express();


/**
 * Route statique vers dossier public
 */
server.use(express.static('public'));

/**
 * Route vers index.html
 */
server.get('/', function (req, res) {
    res.sendFile(__dirname + '/Index.html');
});


/**
 * Afficher les equipes participantes 
 */
server.get('/equipes', function(req, res) {
	res.sendFile(__dirname+'/equipes.json');
});


/**
 * Port d'écoute
 */
server.listen(7777, function() { console.log("Listening on port 7777")});
