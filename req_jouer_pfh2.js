"use strict";

const fs = require("fs");
const nj = require("nunjucks");
let manche = 0;
let s2 =0;
let m = 2;
const req_recuperer = function (req, res,query){
  	
	let fichier;
	let page;
	let marqueurs;
	let html;
	let n = 0;
    let w;

//	let j1 ={};
	let joueure={};
	let plateaux={};
	let ecrire;
    let plateaux_tourej1;
    let plateaux_tourej2;

	let r;
	let all1;
	let liste_color1;
	let tab_question1;
	
	let all2;
	let liste_color2;
	let tab_question2;
	let chaine;
	let dis2;
	let dis1;
	let con;

    let alert;

    html = ` `;

    m = m + 1;
    manche = manche + 2;


  ecrire= fs.readFileSync("joueure.json", "UTF-8");
   joueure = JSON.parse(ecrire);

   con =fs.readFileSync("data.json" , "UTF-8");
  plateaux = JSON.parse(con);




    r = m.toString();

    let answer = false

   let rep = query.reponse;

     if(plateaux.reponse2 ===  rep){
         console.log("reponse juste");
         answer = true;œ:w

        s2 = s2 + 1
     }
    else{
        console.log("reponse fause");
  }


     if( answer === true){
       html += `
    <script>
          window.alert("Bien joué!, bonne réponse.");
          </script>
 
 `

     }else{

       html += `
    <script>
          window.alert("Oups! mauvaise réponse");
          </script>
 
 `
     }
	
	// Both jouueur 1 and 2
	ecrire = JSON.stringify(joueure);
	fs.writeFileSync("joueure.json", ecrire, "UTF-8");



	
	con =fs.readFileSync("data.json" , "UTF-8");
	plateaux = JSON.parse(con);

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
		dis2= "disabled";
	}	
	else if( plateaux.tourej2==="1"){
		plateaux_tourej2 = "Attendez";	
		dis2= "disabled";
	}


	ecrire= fs.readFileSync("joueure.json", "UTF-8");
	joueure = JSON.parse(ecrire);

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
                    <h2>Score: `+" "+joueure.j1_score+`</h2>
                </div> 
                <div class="attribue" >
                    <h2>Timer:0 S</h2>
                </div>
                <div class="attribue" >
                    <h2>Manche:`+" "+joueure.j1_manche+`</h2>
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
            <form action="/req_jouer_pfh1" method="GET">
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
                    <h2>Score:`+" "+joueure.j2_score+`</h2>
                </div>
                <div class="attribue_bis" >
                    <h2>Timer: 0 S</h2>
                </div>
                <div class="attribue_bis" >
                    <h2>Manche:`+" "+joueure.j2_manche+`</h2>
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
            <form action="/req_jouer_pfh1" method="GET">
            <div class="row3_bis">
                <div class="li1"value="{{ reponse }}"  >
                <input`+dis2+` class="input_id_bis" type="number" min="1" max="4" name="reponse" required>

                </div>
                <div class="li2">
                    <div class="li21_bis">
                        <button `+dis2+` type="submit">Valider</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>

`




/* === Fabrication et envoi de la reponse (page HTML) ===*/
      	page = fs.readFileSync(`modele_page_pfh.html`,`UTF-8`);
	  
      marqueurs = {};
      marqueurs.morp = html;
      page = nj.renderString(page,marqueurs);
  
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(page);
//	   res.end();

  	chaine=fs.readFileSync("data.json", "UTF-8");
	plateaux = JSON.parse(chaine);

	if(plateaux.tourej1 ==="0"){
		plateaux_tourej1 ="C est a vous de jouer";	
		dis1= " ";
	}	
	else if(plateaux.tourej1==="1"){
		
		plateaux_tourej1 = "Attendez";
		dis1= "disabled";
	}


	if( plateaux.tourej2 ==="0"){
		plateaux_tourej2 ="C est a vous de jouer";
		dis2= " ";
		console.log("joueure 2 jouer");
	}	
	else if( plateaux.tourej2==="1"){
		plateaux_tourej2 = "Attendez";	
		dis2= "disabled";
		console.log("joueure 2 attender");
	}


	html=`
	<style>
		.container{
			position:absolute; 
		}
	</style>
	<div class="container">
        <div class="column">
            <div class="row1">
                    <h2> Joueure 1:`+" "+plateaux_tourej1+`</h2>
            </div>
            </br>
            </br>
            <div class="row101">
                <div class="attribue" >
                    <h2>Score: `+" "+joueure.j1_score+`</h2>
                </div> 
                <div class="attribue" >
                    <h2>Timer:0 S</h2>
                </div>
                <div class="attribue" >
                    <h2>Manche:`+" "+joueure.j1_manche+`</h2>
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
            <form action="/req_jouer_pfh1" method="GET">
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
                    <h2>Score:`+" "+joueure.j2_score+`</h2>
                </div>
                <div class="attribue_bis" >
                    <h2>Timer: 0 S</h2>
                </div>
                <div class="attribue_bis" >
                    <h2>Manche:`+" "+joueure.j2_manche+`</h2>
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
            <form action="/req_jouer_pfh1" method="GET">
            <div class="row3_bis">
                <div class="li1"value="{{ reponse }}"  >
                <input `+dis2+` class="input_id_bis" type="number" min="1" max="4" name="reponse" required>

                </div>
                <div class="li2">
                    <div class="li21_bis">
                        <button `+dis2+` type="submit">Valider</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>

`






let toure = {};
let lire;

lire = fs.readFileSync("toure.json", "UTF-8");
toure = JSON.parse(lire);

toure.web_page = " ";
toure.web_page = html;

toure.joueure = "0";

ecrire = JSON.stringify(toure);
fs.writeFileSync("toure.json",ecrire,"UTF-8");

let c =0;
let i=0;

let k=1;
//let toure = {};

setInterval (function() {


       let contenant = fs.readFileSync("toure.json", "UTF-8");
       toure = JSON.parse(contenant);

      if( toure.joueure === "1"  && c===0){
      console.log("papa");
       let  lire = JSON.parse(contenant);

       html = toure.web_page;

       c++;


    let con = fs.readFileSync("data.json", "UTF-8");
    plateaux=JSON.parse(con);

    plateaux.tourej1 = "0";
    plateaux.tourej2 = "1";

    ecrire = JSON.stringify(plateaux);
    fs.writeFileSync("data.json", ecrire, "UTF-8");




/* === Fabrication et envoi de la reponse (page HTML) ===*/
      page = fs.readFileSync(`modele_page_pfh2.html`,`UTF-8`);

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
                                                      
