// Permet l'ajout d'un nouvel utilisateur
    /* A AJOUTER
        - Homme ou Femme et la photo s'adapte en conséquence
        - Le profil s'ajoute avant "Ajouter un profil"
        - Vérification du nombre maximum de profils autorisés (5)
        - Plusiers ajouts possibles sans casser la structure de la page
    */
function newUser() {

// Cible le container des profils
const newUserContainer = document.querySelector(".selectUserProfileContainer");

// Demander à l'utilisateur d'entrer un nom et le stocker dans une variable myName
let myName = prompt("Prénom de l'utilisateur");

if (myName.length !== 0) { // On vérifie que le nom ne soit pas vide
    // 1 - Créer une nouvelle div
    const newUserProfileContainer = document.createElement("div");
        // Lui assigner la classe userProfileContainer
        newUserProfileContainer.classList.add("userProfileContainer");
            // Lui assigner un ID
            newUserProfileContainer.id = "lastNewUserProfileContainer";
                // L'ajouter au DOM
                newUserContainer.appendChild(newUserProfileContainer);

    // 2 - Créer une nouvelle div
    const newPortrait = document.createElement("div");
        // Lui assigner la classe portrait
        newPortrait.classList.add("portrait");
            // Lui assigner un ID
            newPortrait.id = "lastNewPortrait";
                // L'ajouter au DOM
                document.getElementById("lastNewUserProfileContainer").appendChild(newPortrait);

    // 3 - Créer une nouvelle image de profil
    const newUserImage = document.createElement("img");
        // Lui assigner la classe userImage
        newUserImage.classList.add("userImage");
            // Lui assigner un ID
            newUserImage.id = "lastNewUserImage";
                // Ajouter une image automatiquement
                newUserImage.src = "assets/img/new_user_added.png";
                    // L'ajouter au DOM
                    document.getElementById("lastNewPortrait").appendChild(newUserImage);

    // 4 - Créer un nouveau h2
    const newProfileName = document.createElement("h2");
        // Lui assigner la classe profileName
        newProfileName.classList.add("profileName");
            // Utiliser un innerHTML pour afficher le nom
            newProfileName.innerHTML = myName;
                // L'ajouter au DOM
                document.getElementById("lastNewUserProfileContainer").appendChild(newProfileName)
    }
}



document.querySelector(".newUserImage").addEventListener("click", newUser);