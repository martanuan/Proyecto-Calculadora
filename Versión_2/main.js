// Nos traemos la pantalla y los botones y los nombramos por clase (.clase)
// Realizamos 2 constantes
// querySelector() --> devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".itembtn");

// con querySelectorAll se nos hace un array

buttons.forEach(button => {
    button.addEventListener("click", () => {
    console.log(button.textContent); //textContent -->atributo genérico
    })
})