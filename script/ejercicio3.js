function esInteger(e) {
    charCode = e.keyCode;
    if (charCode > 31 && charCode < 48 || charCode > 57) {
        alert("Esto no es un numero");
    }
    else {
        alert("Esto es un numero");
    }
}