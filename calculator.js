var display = document.querySelector('#display');

function showDisplay(value) {
    if (value == ".") {
        display.value = "0";
    }
    display.value += value;
}

function clearAll() {
    display.value = "";
}

function result() {
    let resultado = eval(display.value);
    display.value = resultado;

    if (display.value == "undefined") {
        display.value = "";
    }
}