// let section1 = document.getElementById(`fSection`);
// let xValue = document.getElementsByClassName(`xValue`);
// let yValue = document.getElementsByClassName(`yValue`);
// récupérer l'id dans la fonction sinon ça charge des valeurs nul
// let section1 = document.querySelector(`#fSection`);
// let x = document.getElementById("number1");
// let y = document.getElementById("number2");
// let x = (document.querySelector("number1")).value;
// let x = Number(document.querySelector("#number1")).value;
// console.log(document.querySelector("#number1")).value;
// console.log(section1);
// console.log(xValue);
// console.log(yValue);

function Addition() {
    let x = Number(document.getElementById("number1").value);
    let y = Number(document.getElementById("number2").value);

    let span = document.getElementById("resultat");
    let message = document.getElementById("message");
    let add;
    
    if (typeof(x)!=='number' || typeof(y)!== 'number'){
        message.style.color = "red";
        message.textContent = "Vous devez saisir un nombre !";
        span.textContent = "";
    }else{
        message.textContent = "";
        add = parseFloat(x) + parseFloat(y);
        span.textContent = "Le résultat de l'addition est : " + add;
    }

    // try {
    //     if (typeof x !== 'number' || typeof y !== 'number') {
    //         throw new Error ("L'un des champs saisies n'est pas un nomre ou est pas renseigné ! ");
    //     }else {
    //         resultat = x + y;
    //         return document.formCalc.add.value = resultat;
    //     }
    // } catch (error) {
    //     return error.message
    // }
}


