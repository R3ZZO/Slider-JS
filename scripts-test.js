/*

On veut :
- Rendre invisible la 1ere slide (lui enlever la classe "visible")
- Rendre visible la 2eme slide (lui donner la classe "visible")

*/

// Désigner la première slide et en stocker une référence dans une variable "slide1" :
var slide1 = document.querySelector(".slide:nth-child(1)");

// Note de debug : pour afficher le contenu de la variable slide1 dans la console (par exemple pour s'assurer qu'elle contient bien ce qu'on veut) :
console.log(slide1);

console.log(slide1.classList);

// Depuis cette variable, on peut faire des modifications sur l'élément référencé. Ici on s'adresse à sa propriété classList, à laquelle on souhaite enlever la classe "visible".
slide1.classList.remove("visible");

// Faire la même manipulation en sens inverse pour la seconde slide :
var slide2 = document.querySelector(".slide:nth-child(2)");

slide2.classList.add("visible");


