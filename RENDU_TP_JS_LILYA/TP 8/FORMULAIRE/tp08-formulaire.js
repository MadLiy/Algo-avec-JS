function confirmForm() {
    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    let birthDay = document.getElementById("birthday").value;
    let message = document.getElementById("message");

    if (nom === "") {     // Vérif
        message.textContent = "Le nom doit être renseigné.";
    } else if (prenom === "") {
        message.textContent = "Le prénom doit être renseigné.";
    } else if (birthDay === "") {
        message.textContent = "La date de naissance doit être renseignée.";
    } else {
        message.style.color = "green";
        message.textContent = "Votre formulaire a bien été envoyé";

        // Soumission du formulaire ajouter le code de traitement
        // document.getElementById("monFormulaire").submit();
    }
}