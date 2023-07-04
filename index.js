// Site WEB demo PI

"use strict";

const http = require("http");
const url = require("url");
let mon_serveur;
let port;

// DECLARATION DES DIFFERENTS MODULES CORRESPONDANT A CHAQUE ACTION

const req_commencer = require("./req_commencer.js");
const req_afficher_formulaire_inscription = require("./req_afficher_formulaire_inscription.js");
const req_inscrire = require("./req_inscrire.js");
const req_identifier = require("./req_identifier.js");
const req_identifier2 = require("./req_identifier2.js");
const req_identifier_Math = require("./req_identifier_Math.js");
const req_identifier_pfh = require("./req_identifier_pfh.js");

const req_statique = require("./req_statique.js");
const req_erreur = require("./req_erreur.js");
const req_presentation = require("./req_presentation.js");


const req_recuperer = require("./req_recuperer.js");
const req_recuperer2 = require("./req_recuperer2.js");
const req_recuperer_Math1 = require("./req_recuperer_Math1.js");
const req_recuperer_Math2 = require("./req_recuperer_Math2.js");
const req_recuperer_pfh1 = require("./req_recuperer_pfh1.js");
const req_recuperer_pfh2 = require("./req_recuperer_pfh2.js");
const req_jouer = require("./req_jouer.js");
const req_jouer2 = require("./req_jouer2.js");
const req_jouer_Math1 = require("./req_jouer_Math1.js");
const req_jouer_Math2 = require("./req_jouer_Math2.js");
const req_jouer_pfh1 = require("./req_jouer_pfh1.js");
const req_jouer_pfh2 = require("./req_jouer_pfh2.js");
const req_finir = require("./req_finir.js");


// FONCTION DE CALLBACK APPELLEE POUR CHAQUE REQUETE

const traite_requete = function (req, res) {

	let requete;
	let pathname;
	let query;

	console.log("URL reçue : " + req.url);
	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;

	// ROUTEUR

	try {
		switch (pathname) {
			case '/':
			case '/req_commencer':
				req_commencer(req, res, query);
				break;
			case '/req_afficher_formulaire_inscription':
				req_afficher_formulaire_inscription(req, res, query);
				break;
			case '/req_inscrire':
				req_inscrire(req, res, query);
				break;
			case '/req_identifier':
				req_identifier(req, res, query);
				break;
			case '/req_identifier2':
                req_identifier2(req, res, query);
                break;
			case '/req_identifier_Math':
                req_identifier_Math(req, res, query);
                break;
			case '/req_jouer_Math1':
                req_jouer_Math1(req, res, query);
                break;
			case '/req_jouer_Math2':
                req_jouer_Math2(req, res, query);
                break;
			case '/req_recuperer_Math1':
                req_recuperer_Math1(req, res, query);
                break;
			case '/req_recuperer_Math2':
                req_recuperer_Math2(req, res, query);
                break;
			case '/req_identifier_pfh':
                req_identifier_pfh(req, res, query);
                break;
            case '/req_jouer_pfh1':
                req_jouer_pfh1(req, res, query);
                break;
            case '/req_jouer_pfh2':
                req_jouer_pfh2(req, res, query);
                break;
            case '/req_recuperer_pfh1':
                req_recuperer_pfh1(req, res, query);
                break;
            case '/req_recuperer_pfh2':
                req_recuperer_pfh2(req, res, query);
                break;
			 case '/req_recuperer':
                               req_recuperer(req, res, query);
                                break;
			 case '/req_jouer':
                               req_jouer(req, res, query);
                                break;
			 case '/req_jouer2':
                               req_jouer2(req, res, query);
                                break;
			case '/req_presentation':
                               req_presentation(req, res, query);
                                break;
			case '/req_recuperer':
                               req_recuperer(req, res, query);
                                break;
			case '/req_recuperer2':
                               req_recuperer2(req, res, query);
                                break;
			case '/req_jouer':
                               req_jouer(req, res, query);
                                break;
			case '/req_finir':
                               req_finir(req, res, query);
                                break;
            

			default:
				req_statique(req, res, query);
				break;
		}
	} catch (e) {
		console.log('Erreur : ' + e.stack);
		console.log('Erreur : ' + e.message);
		// console.trace();
		req_erreur(req, res, query);
	}
};

// CREATION ET LANCEMENT DU SERVEUR

mon_serveur = http.createServer(traite_requete);
port = 5000;
// Pour récupérer le numéro du port depuis la ligne de commande. Exemple : node index.js 5000
// port = process.argv[2];
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);
