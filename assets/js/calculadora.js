document.addEventListener("DOMContentLoaded", function() {
    let pantalla = document.getElementById('screen');
    let operacionActual = '';
    let operador = '';
    let resultado = 0;

    function agregarNumero(numero) {
        operacionActual += numero;
        pantalla.value = operacionActual;
    }

    function operar(op) {
        if (operacionActual === '') return;

        if (resultado === 0) {
            resultado = parseFloat(operacionActual);
        } else {
            calcular();
        }

        operador = op;
        operacionActual = '';
    }

    function calcular() {
        if (operacionActual === '' || operador === '') return;

        switch (operador) {
            case '+':
                resultado += parseFloat(operacionActual);
                break;
            case '-':
                resultado -= parseFloat(operacionActual);
                break;
            case '*':
                resultado *= parseFloat(operacionActual);
                break;
            case '/':
                resultado /= parseFloat(operacionActual);
                break;
        }

        pantalla.value = resultado;
        operacionActual = '';
        operador = '';
    }

    function limpiar() {
        operacionActual = '';
        operador = '';
        resultado = 0;
        pantalla.value = '';
    }

    // Asegúrate de que estas funciones estén disponibles globalmente
    window.agregarNumero = agregarNumero;
    window.operar = operar;
    window.calcular = calcular;
    window.limpiar = limpiar;
});