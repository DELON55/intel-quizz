"use strict";

const fs = require("fs");
const nj = require("nunjucks");

const req_recuperer = function (req, res,query){

    let fichier;

    let page;
    let marqueurs;
    let html;
    let n = 0;
    let joueure={};
    let plateaux={};
    let ecrire;
    let plateaux_tourej1;
    let plateaux_tourej2;
    let m = 1;
    let r;
/bin/bash: ligne 1: q : commande introuvable
    let liste_color1;
    let tab_question1;

    let all2;
    let liste_color2;
    let tab_question2;

    let dis2;
    let dis1;
    let toure={};

    toure.joueure ="0";
    toure.web_page = " ";
    ecrire = JSON.stringify(toure);
    fs.writeFileSync("toure.json",ecrire,"UTF-8");


    r = m.toString();
    plateaux.tourej1 = "0";
    plateaux.tourej2 = "1";

    plateaux.question1="Quelle instance est compétente pour traiter un litige entre un salarié et son employeur ? ";
    plateaux.liste1="<p> 1.Le tribunal de grande instance<br>2.Le Conseil des prud'hommes <br>3.La Cour de cassation <br>4.Julien Courbet</p>";
    plateaux.reponse1="2";

    plateaux.question2="Un litige oppose un salarié à son employeur. Le salarié souhaite saisir le CPH, il travaille dans plusieurs établissements différents toute l'année. Quel CPH est compétent ?";
    plateaux.liste2="<p> 1. Le CPH proche du domicile de l'employeur<br>2. Le CPH proche du siège social de l'entreprise<br>3. Le CPH proche du domicile du salarié<br>4. Le CPH proche de l'établissement où est né le litige</p>";
    plateaux.reponse2="4";

    plateaux.question3="Comment s'appelle le juge qui délibère en cas d'égalité  ?";
    plateaux.liste3="<p> 1.Juge délibérateur <br>2.Juge médiateur <br>3.Juge départiteur <br>4.Patrick Sébastien </p>";
    plateaux.reponse3="3";


    plateaux.question4="Gérard a travaillé plusieurs mois en intérim en tant qu'ouvrier, son employeur est satisfait et souhaite l'embaucher en CDI. Quelle période d'essai est adaptée ?";
    plateaux.liste4="<p> 1. 2 mois<br>2. 3 mois<br>3. 4 mois<br>4. Aucune</p>";
    plateaux.reponse4="4";
    //joueur 1
    let sc1=0;
    sc1 = sc1.toString();
    joueure.j1_score=sc1;

    let a1= 0;
    let b1 =3;
    let ma1 = a1+"/"+b1;
    ma1 = ma1.toString();
    joueure.j1_manche=ma1;



    //joueure 2
    let sc2=0;
    sc2 = sc2.toString();
    joueure.j2_score=sc2;

    let a2= 0;
    let b2 =3;
    let ma2 = a2+"/"+b2;
    ma2 = ma2.toString();
    joueure.j2_manche=ma2;


    // Both jouueur 1 and 2
    ecrire = JSON.stringify(plateaux);
    fs.writeFileSync("data.json", ecrire, "UTF-8");


    ecrire = JSON.stringify(joueure);
    fs.writeFileSync("joueure.json", ecrire, "UTF-8");

    let q = "plateaux.question"+r;
    q = eval(q);


    let l = "plateaux.liste"+r;
    l = eval(l);


    let re = "plateaux.reponse"+r;
    re = eval(re);


    if(plateaux.tourej1 ==="0"){
        plateaux_tourej1 ="C est a vous de jouer";
        dis1= "";

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



    /* === Récupération du contexte ===*/

    ecrire = fs.readFileSync("joueure.json","UTF-8");
    joueure = JSON.parse(ecrire);

    console.log(joueure.j1_score)

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
            <form action="/req_jouer_Math1" method="GET">
            <div class="row3">
                <div class="li1" value="{{ reponse }}" >
                <input`+dis1+` class="input_id" type="number" min="1" max="4"  name="reponse"  required>

                </div>
                <div class="li2">
                    <div class="li21">
                        <button`+dis1+` type="submit">Valider</button>
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
            <form action="/req_jouer_Math1" method="GET">
            <div class="row3_bis">
                <div class="li1" value="{{ reponse }}" >
                <input `+dis2+` class="input_id_bis" type="number" min="1" max="4" name="reponse"  required>

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


    let con = fs.readFileSync("data.json", "UTF-8");
    plateaux=JSON.parse(con);

    plateaux.tourej1 = "1";
    plateaux.tourej2 = "0";

    ecrire = JSON.stringify(plateaux);
    fs.writeFileSync("data.json", ecrire, "UTF-8");

/* === Fabrication et envoi de la reponse (page HTML) ===*/
      page = fs.readFileSync(`modele_page_pfh.html`,`UTF-8`);

      marqueurs = {};
      marqueurs.morp = html;
      page = nj.renderString(page,marqueurs);

      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(page);
      res.end();

}
module.exports = req_recuperer ;
                                                        
