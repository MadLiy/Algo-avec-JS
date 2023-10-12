
// --------------------------------- TP 05 -----------------------------------------------

//----------------------------- FONCTION CALCUL ----------------------------------------

function Calcul(a,b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('Les deux paramètres doivent être renseignés et être des nombres');
        }

        return a*b+a+b;
    } catch (error){
        return 'Erreur : ' + error.message;
    }
}
console.log(Calcul(1,1));
console.log(Calcul('2',3));
console.log(Calcul(2));
console.log(Calcul());


//----------------------------- FONCTION MOYENNE ---------------------------------------

function Moyenne(array) {
    try {
        if (!Array.isArray(array)) {
            throw new Error(" le paramètre n'est pas un tableau ");
        }
        let sum = 0;
        let nbr = 0;
        for (i= 0; i< array.length; i++) {
            if (typeof array[i]!== 'number' || isNaN(array[i])) {
                throw new Error(" Un élément du tableau n'est pas un nombre ");
            }
            sum+=array[i];
            nbr++;
        }
        if (nbr===0){
            throw new Error(" Le tableau est vide ");
        }
        return sum/nbr;
    } catch (error) {
        return ' !!! : ' + error.message;
    }
}

console.log(Moyenne("oui"));
console.log(Moyenne([4,4,4,4]));
console.log(Moyenne([2,2,'2',2]));
console.log(Moyenne([]));
