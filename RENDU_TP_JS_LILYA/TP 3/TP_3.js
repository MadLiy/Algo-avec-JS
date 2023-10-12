// ------------------------TP 03--------------------------------------------------------

//AFFICHAGE 10 FOIS
let AFFICHAGE10= "Lilya";
for (i=0;i<11;i++){
    console.log("Lilya");
}

//AFFICHAGE1a10
for (i=1;i<11;i++){
    console.log(i)
}

//PAIR1a10PAIR
for (i=0;i<=10;i++){
    if (i%2==0){
        console.log(i);
    }
}

//AFFICHAGE TABLEAUX 
let array = [1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
for ( i=0; i < array.length; i++){
    console.log(array[i]);
}

// AFFICHAGE PAIR TAB
let array=[1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
for (i=0; i< array.length; i++){
    if (array[i]%2==0){
        console.log(array[i]);
    }
}