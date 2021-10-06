'use strict'

alert('Bienvenido')

let repetir;

do {
    let enumerador = prompt("Qué operación quieres realizar, +, -,* ó /.");
    enumerador = enumerador.trim();
    if (enumerador === '+' || enumerador === '-' || enumerador === '*' || enumerador === '/') {
        let operador1;
        let operador2;
        let acabar = false;


        do {
            let enumerador = prompt('Introduce los operadores separados por espacios');
            let i = 0;
            for (; i < enumerador.length; i++) {
                if (enumerador[i] !== ' ') {
                    operador1 += enumerador[i];
                } else {
                    if (operador1 !== '') {
                        break;
                    }
                }
            }
            for (; i < enumerador.length; i++) {
                if (enumerador[i] !== ' ') {
                    operador2 += enumerador[i];
                } else {
                    if (operador2 !== '') {
                        break;
                    }
                }
            }

            operador1 = Number(operador1);
            operador2 = Number(operador2);
            if (isNaN(operador1) || isNaN(operador2)) {
                alert('Introduce números para poder hacer la operación')
                acabar = false;
            } else {
                alert('Todo correcto')
                acabar = true;
            }

        } while (!acabar);

        let resultado;

        switch (enumerador) {
            case '+': resultado = operador1 + operador2;
                break;
            case '-': resultado = operador1 - operador2;
                break;
            case '*': resultado = operador1 * operador2;
                break;
            case '/': resultado = operador1 / operador2;
                break;

        }
        alert(`El resultado es: ${resultado}`)
        repetir = confirm("¿Quieres volver a utilizar la calculadora?");
    } else {
        alert('La operación introducida es errónea. Prueba de nuevo.')
    }
} while ((op !== '+' && op !== '-' && op !== '*' && op !== '/') || repetir);

alert("Adios usuario");