function salida() {
    var cont, paso = 1, res;
    for (cont = 1; cont <= 100; cont++) {
        alert("Contador " + cont);
        if (paso == 10) {
            paso = 0;
            res = confirm("¿Desea Continuar?");
            if (res == false) {
                break;
            }
        }
        paso++;
    }
}

salida()