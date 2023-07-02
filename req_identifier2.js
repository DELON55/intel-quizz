// Traitement de "req_identifier"

"use strict";

const fs = require("fs");

const membre = function (req, res, query) {

	let page;

	page = fs.readFileSync('modele_accueil_membre2.html', 'UTF-8');


	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};

module.exports = membre;
