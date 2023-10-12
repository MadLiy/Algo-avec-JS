//--------------------------- TP 4 --------------------------------------------------

// ----------------------- FONCTION CONSTANTE ---------------------------------------

function CONSTANTE() {
    return 33;
}
console.log(CONSTANTE());

//---------------------- BONJOUR_UNTEL ----------------------------------------

function BonjourUntel(a) {
    return "Bonjour " + a;
}
console.log(BonjourUntel("Marcel"))

//------------------------ CALCUL ---------------------------------------------

function CALCUL(a,b) {
    return ((a*b)+a+b);
}
console.log(CALCUL(1,1));
console.log(CALCUL("non","oui")) 
//affiche NaNnonoui donc n'est pas un nombre et concatène les deux chaînes de caractères

//------------------------ FONCTION CONTROLE TABLEAU -----------------------------

function ControleTab(array) {
    if (array.length==0){
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if ((typeof array[i]!= "number")){
            return false;
        }
        if ((i==array.length-1) && (typeof array[i]=== "number")){
            return true;
        }
    }
}
console.log(ControleTab([1,"coucou","bonjour",2]))
console.log(ControleTab([1,2,3]))
console.log(ControleTab([]))
console.log(ControleTab(["coucou","bonjour"]))


//----------------------- FONCTION MOYENNE ------------------------------------------

function Moy(array) {
    let sum=0;
    let moy=0;
    for (i=0; i < array.length; i++){
        sum= sum + array[i];
    }
    moy=sum/array.length;
    if ((moy >=0) || (moy<=0)) {
        return moy;
    }if (array.length==0){
        return 0;
    }
    else{
        return " ! Attention ! Erreur le tableau ne contient pas que des nombre !"
    }
}
console.log(Moy([2,2,2,2]))
console.log(Moy([2,2,"coucou",2])) // -> NaN
console.log(Moy([]))

//------------------------------ FONCTION MAJ ---------------------------------------

function Maj(chaine) {
    if (!chaine){
        return chaine;
    }
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}
console.log(Maj("lilya emad"))


//------------------------------- FONCTION PHRASEMAJ -----------------------------------

function PhraseMaj(chaine) {
    if (!chaine) {
        return chaine;
    }
    let words= chaine.split(' ');
    for(i=0;i<words.length;i++){
        words[i]=Maj(words[i]);
    }
    return words.join(' ');
}

console.log(PhraseMaj("hello world"))
