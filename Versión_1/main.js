// Función que nos permite rellenar la pantalla
// document.calculator.displayPanel.value (es lo que se muestra en la pantalla)

function fillDisplay(inputvalue) {
    document.calculator.displayPanel.value += inputvalue;
}

// Función que realiza las diferentes operaciones
    // Si la pantalla es distinta a vacio, hacemos la operación.
function doOperation () {
    if (document.calculator.displayPanel.value != "") { 
        document.calculator.displayPanel.value = eval(document.calculator.displayPanel.value);
    }
}
