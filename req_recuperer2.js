"use strict";

const fs = require("fs");
const nj = require("nunjucks");
  
const req_recuperer = function (req, res,query){
  	
	let fichier;
	let page;
	let marqueurs;
	let html;
	let n = 0;


	let j1 ={};
	let j2={};
	let plateaux={};
	let ecrire;
    let plateaux_tourej1;
    let plateaux_tourej2;
    let m = 1;
	let r;
	let all1;
	let liste_color1;
	let tab_question1;
	
	let all2;
	let liste_color2;
	let tab_question2;

    let dis2;
    let dis1;

	r =	m.toString();
	plateaux.tourej1 = "0";
	plateaux.tourej2 = "1";

	plateaux.question1="Dans quelle ville la série Skins se déroule-t-elle ?";
	plateaux.liste1="<p> 1.Brigthon<br>2.Londres<br>3.York<br>4.Bristol</p>";
  	plateaux.reponse1="4";
	
	plateaux.question2="Comment la famille qui vit sur les îles de Fer dans Game of Thrones se nomme-t-elle ?";
	plateaux.liste2="<p> 1.Les Baratheon<br>2.Les Martell<br>3.Les Tully<br>4.Les Greyjoy</p>";
  	plateaux.reponse2="4";

	plateaux.question3="Quelle chanson Max écoute-t-elle dans Stranger Things ?";
	plateaux.liste3="<p> 1.Running Up That Hill<br>2.Up Where Belong<br>3.I wanna Dance with Somebody<br>4.Army Dreamers</p>";
  	plateaux.reponse3="1";

	
	plateaux.question4="Où commence l’aventure de Rick Grimes dans le premier épisode de The Walking Dead ?";
	plateaux.liste4="<p> 1.Dans un laboratoire d expérimentations<br>2.Dans un parc<br>3.Dans une prison<br>4.Dans un hopital</p>";
  	plateaux.reponse4="4";


// Writing text
	//joueur 1
	let sc1=0;
	sc1 = sc1.toString();
	j1.score=sc1;

	let a1= 0;
	let b1 =3;
    let ma1 = a1+"/"+b1;
	ma1 = ma1.toString();
	j1.manche=ma1;
	
	

	//joueure 2
	let sc2=0;
	sc2 = sc2.toString();
	j2.score=sc2;

	let a2= 0;
	let b2 =3;
    let ma2 = a2+"/"+b2;
	ma2 = ma2.toString();
	j2.manche=ma2;

	
	// Both jouueur 1 and 2
	ecrire = JSON.stringify(plateaux,j1,j2);
	fs.writeFileSync("data.json", ecrire, "UTF-8");

	let q = "plateaux.question"+r;
	q = eval(q);


	let l = "plateaux.liste"+r;
	l = eval(l);

	
	let re = "plateaux.reponse"+r;
	re = eval(re);


	if(plateaux.tourej1 ==="0"){
		plateaux_tourej1 ="C est a vous de jouer";
		dis1= "disabled";

	}	
	else if(plateaux.tourej1==="1"){
		
		plateaux_tourej1 = "Attendez";
		dis1= "disabled";

	}


	if( plateaux.tourej2 ==="0"){
		plateaux_tourej2 ="C est a vous de jouer";
		dis2= "";

	}	
	else if( plateaux.tourej2==="1"){
		
		plateaux_tourej2 = "Attendez";
        dis2= "disabled";
	
	}



	html=`

	<div class="container">
        <div class="column">
            <div class="row1">
                    <h2> Joueure 1:`+" "+plateaux_tourej1+`</h2>
            </div>
            </br>
            </br>
            <div class="row101">
                <div class="attribue" >
                    <h2>Score: `+" "+j1.score+`</h2>
                </div> 
                <div class="attribue" >
                    <h2>Timer:0 S</h2>
                </div>
                <div class="attribue" >
                    <h2>Manche:`+" "+j1.manche+`</h2>
                </div>
            </div>
            </br>
            </br>
            <div class="row2">
                <div class="row21">
                    <h3> `+q+` </h3>
                </div>
                <div class="row22">
					`+l+`
                </div>
            </div>
            </br>
            </br>
            <form action="/req_jouer" method="GET">
            <div class="row3">
                <div class="li1" value="{{ reponse }}" >
                <input`+dis1+` class="input_id" type="number" min="1" max="4" name="reponse"  required>

                </div>
                <div class="li2">
                    <div class="li21">
                        <button `+dis1+` type="submit">Valider</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        <div class="column">
            <div class="row1_bis">
                    <h2> Joueure 2:`+" "+plateaux_tourej2+` </h2>
            </div>
            </br>
            </br>
            <div class="row101_bis">
                <div class="attribue_bis" >
                    <h2>Score:`+" "+j2.score+`</h2>
                </div>
                <div class="attribue_bis" >
                    <h2>Timer: 0 S</h2>
                </div>
                <div class="attribue_bis" >
                    <h2>Manche:`+" "+j2.manche+`</h2>
                </div>
            </div>
			           </br>
            </br>
            <div class="row2_bis">
                <div class="row21_bis">
                    <h3>`+q+`  </h3>
                </div>
                <div class="row22_bis">
				 `+l+`
                </div>
            </div>
            </br>
            </br>
            <form action="/req_jouer2" method="GET">
            <div class="row3_bis">
                <div class="li1" value="{{ reponse }}" >
                <input `+dis2+` class="input_id_bis" type="number" min="1" max="4" name="reponse"  required>

                </div>
                <div class="li2">
                    <div class="li21_bis" href= "localhost:5000/req_jouer2" id="bonbon >
                        <button `+dis2+` type="submit">Valider</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>

`


	let con = fs.readFileSync("data.json", "UTF-8");
	plateaux=JSON.parse(con);
    
	plateaux.tourej1 = "1";
    plateaux.tourej2 = "0";

	ecrire = JSON.stringify(plateaux);
	fs.writeFileSync("data.json", ecrire, "UTF-8");

/* === Fabrication et envoi de la reponse (page HTML) ===*/
      page = fs.readFileSync(`modele_page.html`,`UTF-8`);
  
      marqueurs = {};
      marqueurs.morp = html;
      page = nj.renderString(page,marqueurs);
  
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(page);
//	   res.end();


let c =0;
let i=0;

let k=1;
let toure = {};

setInterval (function() {


       let contenant = fs.readFileSync("toure.json", "UTF-8");
       toure = JSON.parse(contenant);
    
      if( toure.joueure == "1"  && c===0){
	  console.log("papa");
       let  lire = JSON.parse(contenant);

       html = toure.web_page;

       c++;


/* === Fabrication et envoi de la reponse (page HTML) ===*/
      page = fs.readFileSync(`modele_page2.html`,`UTF-8`);

      marqueurs = {};
      marqueurs.morp = html;
      page = nj.renderString(page,marqueurs);

//      res.writeHead(200, {'Content-Type':'text/html'});
//      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(page);
     res.end();
      k=0;

}

}," 2");




}
module.exports = req_recuperer ;
                                                      
