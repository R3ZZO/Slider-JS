// On établit la liste des slides
var slides = document.querySelectorAll(".slide");

/* Ce qu'on doit pouvoir faire (en une action) :
- Afficher une slide
- Masquer les autres slides
- Il nous faut aussi une manière de spécifier quelle slide afficher
*/

function show_slide(slide_number) {
    // Ici, le paramètre slide_numer permettra de savoir quelle slide doit être affichée par cette fonction
    
    // Ici les insctructions correspondant à cette fonction
    
    // 1) Retirer la classe "visible" de la slide qui la porte
    
        // -> cibler un élément portant les classes "slide" et "visible"
        // -> retirer de sa classList la classe "visible"
        // (la propriété classList des éléments possède, de la même manière que .add() , une autre méthode .remove() pour faire l'inverse)
    
    var old_slide = document.querySelector(".slide.visible");
   // Lorsqu'on arrive sur la page, aucun élément ne correspond à ce sélecteur. old_slide vaudra donc null. Il faut donc que l'instruction suivante ne se fasse qu'à condition que le bon élément existe, sinon cela occasionnera un bug qui bloquera tout le script.
    
    if (old_slide != null) { // "!=" veut dire "différent de"
        old_slide.classList.remove("visible");
    }
    
    // 2) Donner la classe "visible" à la slide numéro slide_number (parmi la liste établie en début de script)
    var the_slide = slides[slide_number];
    
    the_slide.classList.add("visible");
    
}

// Pour appeler une fonction qu'on a déclaré (ou préparée) :
show_slide(0);
//show_slide(1);
//show_slide(2);


// Pour relier boutons aux fonctions - manière NON OPTIMALE (qu'il faudrait répéter autant de fois qu'il y a de boutons) :

/*var button1 = document.querySelector("#buttons_container button:first-child");

// Ici on détermine que lorsqu'un clic a lieu sur le bouton 1, le bloc de code délimité par cette function(){} devra s'exécuter
button1.onclick = function() {
    show_slide(0);
}*/

// manière optimisée :

// liste des boutons (du conteneur)
var buttons = document.querySelectorAll("#buttons_container button");

// On passe en revue cette liste, pour effectuer une action similaire sur chacun des boutons
buttons.forEach(function(the_button , button_number){
    // ici the_button correspond, à chaque passage de cette boucle, au bouton correspondant. De la même manière, button_number correspond à l'indice de ce bouton dans la liste (des boutons)
    
    // On peut se baser sur la correspondance entre les indices des slides et ceux des boutons pour savoir quoi passer en paramètre de show_slide pour chaque bouton :
    
    the_button.onclick = function() {
        show_slide(button_number);
    }
    
});




