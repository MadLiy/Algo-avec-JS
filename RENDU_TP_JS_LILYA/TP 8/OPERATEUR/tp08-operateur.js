function operation() {
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let operator = document.getElementById("operator").value;
    let resultatSpan = document.getElementById("resultat");
    let message = document.getElementById("message");

    if (isNaN(x) || isNaN(y)) {  // Vérif que les entrées sont des nombres
        message.style.color = "red";
        message.textContent = "Vous devez saisir un nombre";
        resultatSpan.textContent = "";
    } else {
        message.textContent = "";
        let resultat;

        switch (operator) {  // Effectuer l'opération en fonction de l'opérateur sélectionné
            case "+":
                resultat = parseFloat(x) + parseFloat(y);
                break;
            case "-":
                resultat = parseFloat(x) - parseFloat(y);
                break;
            case "*":
                resultat = parseFloat(x) * parseFloat(y);
                break;
            case "/":
                if (parseFloat(y) === 0) {
                    message.style.color = "red";
                    message.textContent = "Division par zéro impossible";
                    resultatSpan.textContent = "";
                    return;
                }
                resultat = parseFloat(x) / parseFloat(y);
                break;
            // default:
            //     message.style.color = "red";
            //     message.textContent = "Opérateur invalide";
            //     resultatSpan.textContent = "";
            //     return;
        }

        resultatSpan.textContent = "Le résultat de l'opération est : " + resultat;
    }
}