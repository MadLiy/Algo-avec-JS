
//-------------------------------- TP 7---------------------------------------------------

//-------------------- FONCTION PLUS GRANDE DATE -----------------------------------------

function PlusGrandeDate(a,b) {
    
    if ( a < b) {
        return "La date la plus récente est " + a;
    }else{
        return "La date la plus récente est " + b;
    }
}
console.log(PlusGrandeDate((new Date(2023,01,22)).toDateString(),(new Date(2020,01,22)).toDateString()))

// const d1 = new Date(2023,00,22);
// let d2 = new Date(2020,01,01);
// let yd1 = d1.getFullYear;
// let yd2 = d2.getFullYear;
// console.log(d1.toDateString())
// console.log(d1.getFullYear());
// console.log(d2.toDateString())
// console.log(d2.getFullYear());



//-------------------------- FONCTION CALCULER AGE ------------------------------------------

function CalculerAge(a) {
    let m = (new Date().getMonth()) - ((a).getMonth());
    let y = (new Date().getYear()) - ((a).getYear());
    if ( m < 0){
        m = m + 12;
        y--;
    }
    return " Vous avez " + y + " ans et " + m + " mois." 
}
console.log(CalculerAge(new Date(2000,00,01)))
console.log(CalculerAge(new Date(2000,11,01)))


// const monthDiff = (new Date().getMonth()) - (new Date(2000,00,01).getMonth());
// console.log(monthDiff)
// const yearDiff = (new Date().getYear()) - (new Date(2000,00,01).getYear());
// console.log(yearDiff)
// console.log((new Date(2023,00,01).toDateString()))

