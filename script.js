/* A ajouter
    - Homme ou Femme et la photo s'adapte en conséquence
*/

let usersNumber = document.querySelectorAll(".userProfileContainer").length-1; // -1 => Exclut le bloc d'ajout

function newUser() { // Ajout d'un nouvel utilisateur

    // Cible le container des profils
    const newUserContainer = document.querySelector(".selectUserProfileContainer");

    let myName = prompt("Prénom de l'utilisateur");

    if (myName.length !== 0) { // On vérifie que le prompt ne soit pas vide

        usersNumber+=1; // Incrémente le nombre d'utilisateurs

        // 1 - Créer une nouvelle div
        const newUserProfileContainer = document.createElement("div");
        // Lui assigner la classe userProfileContainer
        newUserProfileContainer.classList.add("userProfileContainer");
        // Lui assigner un ID
        newUserProfileContainer.id = `NewUserProfileContainer${usersNumber}`;
        // L'ajouter au DOM 
        newUserContainer.insertBefore(newUserProfileContainer, document.querySelector("#newUser"));

        // 2 - Créer une nouvelle div
        const newPortrait = document.createElement("div");
        // Lui assigner la classe portrait
        newPortrait.classList.add("portrait");
        // Lui assigner un ID
        newPortrait.id = `NewPortrait${usersNumber}`;
        // L'ajouter au DOM
        document.getElementById(`NewUserProfileContainer${usersNumber}`).appendChild(newPortrait);

        // 3 - Créer une nouvelle image de profil
        const newUserImage = document.createElement("img");
        // Lui assigner la classe userImage
        newUserImage.classList.add("userImage");
        // Lui assigner un ID
        newUserImage.id = `NewUserImage${usersNumber}`;
        // Ajouter une image automatiquement
        newUserImage.src = "assets/img/new_user_added.png";
        // L'ajouter au DOM
        document.getElementById(`NewPortrait${usersNumber}`).appendChild(newUserImage);

        // 4 - Créer un nouveau h2
        const newProfileName = document.createElement("h2");
        // Lui assigner la classe profileName
        newProfileName.classList.add("profileName");
        // Utiliser un innerHTML pour afficher le nom
        newProfileName.innerHTML = myName;
        // L'ajouter au DOM
        document.getElementById(`NewUserProfileContainer${usersNumber}`).appendChild(newProfileName);
    }
}

document.querySelector(".newUserImage").addEventListener("click", function() {
    // On ne peut pas avoir plus de 4 profils (+ le bloc d'ajout)
    if (usersNumber >= 4) {
        alert("Vous ne pouvez pas avoir plus de 4 profils");
    } else {
        newUser();
    }
});