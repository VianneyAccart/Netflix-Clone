let usersNumber = document.querySelectorAll(".user-profile").length-1; // -1 => Exclut le bloc d'ajout

function newUser() { // Ajout d'un nouvel utilisateur

    // Cible le container des profils
    const userProfileContainer = document.querySelector(".user-profile-container");

    let myName = prompt("Prénom de l'utilisateur");

    if (myName.length !== 0) { // On vérifie que le prompt ne soit pas vide

        usersNumber+=1; // Incrémente le nombre d'utilisateurs

        // 1 - Créer un nouveau user-profile
        const userProfile = document.createElement("div");
        // Lui assigner la classe userProfileContainer
        userProfile.classList.add("user-profile");
        // Lui assigner un ID
        userProfile.id = `user-profile-${usersNumber}`; 
        // L'ajouter au DOM 
        userProfileContainer.insertBefore(userProfile, document.querySelector("#add-user"));

        // 2 - Créer un nouveau user portrait
        const userPortrait = document.createElement("div");
        // Lui assigner la classe portrait
        userPortrait.classList.add("user-portrait");
        // Lui assigner un ID
        userPortrait.id = `user-portrait-${usersNumber}`;
        // L'ajouter au DOM
        document.getElementById(`user-profile-${usersNumber}`).appendChild(userPortrait);

        // 3 - Créer un nouveau user-portrait__image
        const userPortraitImage = document.createElement("img");
        // Lui assigner la classe userImage
        userPortraitImage.classList.add("user-portrait__image");
        // Lui assigner un ID
        userPortraitImage.id = `user-portrait-image-${usersNumber}`;
        // Ajouter une image automatiquement
        userPortraitImage.src = "assets/img/new_user_added.png";
        // L'ajouter au DOM
        document.getElementById(`user-portrait-${usersNumber}`).appendChild(userPortraitImage);

        // 4 - Créer un nouveau user-name
        const userName = document.createElement("h2");
        // Lui assigner la classe profileName
        userName.classList.add("user-name");
        // Utiliser un innerHTML pour afficher le nom
        userName.innerHTML = myName;
        // L'ajouter au DOM
        document.getElementById(`user-portrait-${usersNumber}`).appendChild(userName);
    }
}

document.querySelector("#add-user").addEventListener("click", function() {
    // On ne peut pas avoir plus de 4 profils (+ le bloc d'ajout)
    if (usersNumber >= 4) {
        alert("Vous ne pouvez pas avoir plus de 4 profils");
    } else {
        newUser();
    }
});