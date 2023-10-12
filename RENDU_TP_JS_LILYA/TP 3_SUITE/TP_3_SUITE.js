//-------------------------------------- TP 3 SUITE ------------------------------------------------------

//-------------------------------- AFFICHAGE SUIVANT -------------------------------------
let valEnt=12;
for (i=0;i<10;i++){
    valEnt++;
    console.log(valEnt);
}

//----------------------------------- CALCULSOMME -----------------------------------------

let sum=10;
let x=0;
for (i=1;i<=sum;i++){
    x+=i;
}
console.log(x);

//----------------------------- AFFICHAGEINVERSSE -----------------------------------------

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
for ( i=0; i < array.length; i++){
    console.log(array[i]);
}
let arrayCopy=new Array;
for (i=array.length; i>=0;i--){
    arrayCopy[i]=array[i];
}
console.log(arrayCopy);

//--------------------------- INVERSION CONTENU TAB --------------------------------------------------------------

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let i=array.length-1;
let arrayCopy=new Array;
let a=0;
while (i>=0){
    arrayCopy[a]=array[i];
    i--;
    a++;
}
console.log(array);
console.log(arrayCopy);

for (i=array.length; i>=0;i--){
    for (j=0;j<=i;j++){
        arrayCopy[j]=array[i];
    }
    console.log(array[i]);
}
console.log(arrayCopy);

//--------------------------- AFFICHAGE PARTIEL ---------------------------------------------

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let l=array.length;
let i=0;
while(i<=l){
    if(array[i]>3){
        console.log(`${array[i]} d'index ${i} est supérieur à 3`);
    }
    else {
        if (array[i]%2==0) {
            console.log(`${array[i]} d'index ${i} est pair :`);
        }
        else {
            if (array[i]%2!=0) {
                console.log(`${array[i]} d'index ${i} est impair`);
            }
            else (i%2==0)
                console.log(`${i} l'index est pair avec valeur ${array[i]}`);
        }
    }
    i++;
}

//-------------------------------- RECHERCHE MAX & MIN --------------------------------------

let max=array[0];
let min=array[1];
for (i=2;i<=array.length;i++){
    if (array[i]<min){
        min=array[i];
    }if (array[i]>max) {
        max=array[i];
    }
}
console.log(min);
console.log(max);

//----------------------------------- MOYENNE ------------------------------------------------

let sum=0;
let array=[2,2,2,2];
let sum=0;
let i=0;
let moy=0;
let l=array.length;
while (i<l){
    sum=sum +array[i];
    i++;
}
moy=sum/l;
console.log(moy);

//--------------------------------- SOMMETAB ----------------------------------------------

let array1=[1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
let array2=[-1,12,17,14,5,-9,0,18,-6,0,4,-13,5,7,-2,8,-1];
let sumTab=[];
for (i=0;i<=(Math.max(array1.length,array2.length));i++){
    sumTab=[array1[i]+array2[i]];
    console.log(sumTab);
}

//-------------------------------- SOMMTABDIFF --------------------------------------------

let array1=[1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
let array2=[-1, 12, 17, 14, 5, -9, 0, 18];
let sumTab=[];
let l1=array1.length;
let l2=array2.length;
let i=0;
while (i<=(l1 || l2)){
    sumTab=[array1[i]+array2[i]];
    i++;
    console.log(sumTab);
}

//------------------------------- COMPARAISON TAB ------------------------------------

let array1=[1,15,-3,8,7,4,-2,28,-1,17,2,3,0,14,-4];
let array2=[3,-8,17,5,-1,4,0,6,2,11,-5,-4,8];
let cpt=0;
let l1=array1.length;
let l2=array2.length;
for (i=0; i<l2;i++){
    for(j=0; j < l1;j++){
        if (array2[i]== array1[j]) {
            cpt++;
        }
    }
}
console.log(`il y a ${cpt} valeur en commun dans les tableaux`);

//---------------------------------- FIRST LAST6 --------------------------------------

let result=false;
let tab=[1,5];
for(i=0;i<=tab.length;i++){
    if (tab.length>0 && (tab[0]==6 || tab[tab.length-1]==6)) {
        result=true;
    }
}
console.log(result);

//---------------------------------- FIRSTLAST ----------------------------------------

let result=true;
let tab=[1,2];
for(i=0;i<=tab.length;i++){
    if (tab.length>=1 && (tab[0]==tab[tab.length-1])) {
        result=true;
    }
    else {
        result=false;
    }
}
console.log(result);
console.log(tab.length);

//------------------------- ROTATION ---------------------------------------------------

let tab=[2,4,5,6,9];
let tabCopy=[...tab];
let l=tab.length-1;
for (i=0;i<=l;i++){
    if (i==0) {
        tab[i]=tabCopy[l];
    }
    else {
        tab[i]=tabCopy[i-1];
    }
}
console.log(tab);

//----------------------------------- TABMULT ----------------------------------------

const x=3;
let z;
console.log(`Table de ${x} : `);
for(y=1;y<=10;y++){
    z=x*y;
    console.log(`${x} * ${y} = ${z}`);
}