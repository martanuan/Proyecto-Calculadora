// Nos traemos la pantalla y los botones y los nombramos por clase (.clase)
// Realizamos 2 constantes
// querySelector() --> devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".itembtn");

// con querySelectorAll se nos hace un array

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const pressbutton = button.textContent; //textContent -->atributo genérico
        
        if (button.id === "reset") {
            display.textContent = "0";
            return;
        }

        if (button.id === "delete") {
            if (display.textContent.length === 1 || display.textContent === "Error") {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice(0,-1);

            }
            return;
        }

        if(button.id === "equal") {
            try {
                display.textContent = eval (display.textContent);
            } catch {
                display.textContent = "Error";
            }
            return;
        }


        if (display.textContent === "0" || display.textContent === "Error") {
            display.textContent = pressbutton;
        } else {
        display .textContent += pressbutton;
        }
    })
})