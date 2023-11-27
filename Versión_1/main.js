// Función que nos permite rellenar la pantalla
// document.calculator.displayPanel.value (es lo que se muestra en la pantalla)


function fillDisplay(inputvalue) {
    //Verificamos si la pantalla tiene un '0'. En caso afirmativo vaciamos la pantalla (cadena vacía '')
    if (document.calculator.displayPanel.value === '0')
        document.calculator.displayPanel.value = '';//Vaciamos la pantalla
    //Rellenamos en la pantalla la opción pulsada que viene definido en el parámetro inputValue
    document.calculator.displayPanel.value += inputvalue;
}
// Función que realiza las diferentes operaciones
// Si la pantalla es distinta a vacio, hacemos la operación.
function doOperation () {
    //Verificamos que la pantalla no sea vacía. Si no lo es realizamos la operación mediante el eval.
    if (document.calculator.displayPanel.value != "") {
        //eval es una función que evalúa lo que se le pase por parámetro. eval("5+3") --> 8 
        document.calculator.displayPanel.value = eval(document.calculator.displayPanel.value);
    }
}
