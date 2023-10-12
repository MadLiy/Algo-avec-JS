function initialiserDonnees(array) {
    let spanText = document.getElementById("listePays");
    let h1Title = document.getElementById("titre");
    let h2Title = document.getElementById("annee");
    let data = 
    {
        "polluant":"CO2", 
        "unite":"milliards de tonnes",
        "annee":2017,
        "pays":[
            {
                "nom":"Chine",
                "valeur":9.26,
                "pourcentage":28.2,
                "code":"cn"
            },
            {
                "nom":"Etats-Unis",
                "valeur":4.76,
                "pourcentage":14.5,
                "code":"us"
            }, 
            {
                "nom":"Inde",
                "valeur":2.16,
                "pourcentage":6.6,
                "code":"in"
            }, 
            {
                "nom":"Russie", 
                "valeur":1.54, 
                "pourcentage":4.7, 
                "code":"ru"
            }, 
            {
                "nom":"Japon", 
                "valeur":1.13, 
                "pourcentage":3.4,
                "code":"jp"
            }, 
            {
                "nom":"Allemagne",
                "valeur":0.72, 
                "pourcentage":2.2, 
                "code":"de"
            }, 
            {
                "nom":"Corée du Sud", 
                "valeur":0.6, 
                "pourcentage":1.8, 
                "code":"kr"
            }, 
            {
                "nom":"Iran", 
                "valeur":0.57, 
                "pourcentage":1.7, 
                "code":"ir"
            }, 
            {
                "nom":"Canada", 
                "valeur":0.55, 
                "pourcentage":1.7, 
                "code":"ca"
            }
        ]
    }
    if (h1Title){
        let texth1 = data.polluant + " (" + data.unite + ") ";
        h1Title.textContent = texth1;
    }
    if (h2Title){
        let texth2 = "En : " + data.annee;
        h2Title.textContent = texth2;
    }
    if (spanText){
        let infoPays = "";
        for (i=0;i < data.pays.length;i++){
            let pays = data.pays[i];
            let infoPays1 = "Pays : " + pays.nom + " ,  Quantité de polluant émis : " + pays.valeur + ", Pourcentage dans le monde : " + pays.pourcentage + ", Code du drapeau : " + pays.code + "<br>" + "<br>";
            infoPays += infoPays1;
            // let textSpan = data.pays.nom; 
            // spanText.textContent = textSpan;
        }
        spanText.innerHTML = infoPays;
    } else {
        console.error("La balise <span> avec l'ID spécifié n'a pas été trouvée. ")
    }
}