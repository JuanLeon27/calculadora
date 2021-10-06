
"use strict";
let op;
let operador1;
let operador2;
let operadores;
let operacionValida = false;
let repetir = true;
let resultado;
let operandoValidacion = function () {
    salir = false;
    let operadoresDivididos = [];
    let operadoresFiltrados = [];
    while (!salir) {
        let operadores = prompt('Introduce los operadores separados por espacio', '');

        let i = 0;
        for (; i < operadores.length; i++) {
          if (operadores[i] !== ' ') {
            operador1 += operadores[i];
          } else {
            if (operador1 !== '') {
              break;
            }
          }
        }
  
        console.log(operador1);
  
        for (; i < operadores.length; i++) {
          if (operadores[i] !== ' ') {
            operador2 += operadores[i];
          } else {
            if (operador2 !== '') {
              break;
            }
          }
        }
        console.log(operador2);
  
        operador1 = Number(operador1);
        operador2 = Number(operador2);
        if (isNaN(operador1) || isNaN(operador2)) {
          alert('Tienes que introducir números')
          salir = false;
        } else {
          salir = true;
        }
      }
    }
    return operadoresFiltrados
}

let suma = (operador1, operador2) => {
    resultado = (Number(operador1) + Number(operador2));
    alert(`${operador1} ${op} ${operador2} es: ${resultado}`)
}

let resta = (operador1, operador2) => {
    resultado = (Number(operador1) - Number(operador2));
    alert(`${operador1} ${op} ${operador2} es: ${resultado}`);
}

let multiplicacion = (operador1, operador2) => {
    resultado = (Number(operador1) * Number(operador2));
    alert(`${operador1} ${op} ${operador2} es: ${resultado}`);
}

let division = (operador1, operador2) => {
    resultado = (Number(operador1) / Number(operador2));
    alert(`${operador1} ${op} ${operador2} es: ${resultado}`);
}

alert("Bienvenido");
do {
    op = operandoValidacion();
    let operadoresFiltrados = []
    operadoresFiltrados = operandoValidacion();
    operador1 = operadoresFiltrados[0];
    operador2 = operadoresFiltrados[1];
    switch (op) {
        case "+":
            suma(operador1, operador2);
            break;
        case "-":
            resta(operador1, operador2);
            break;
        case "*":
            multiplicacion(operador1, operador2);
            break;
        case "/":
            division(operador1, operador2);
            break;
    }
    operandoValidacion = false;
    repetir = confirm("Quieres realizar otra operacion?");
} while (repetir === true);
alert("Adios");



function operandoValidacion() {
    do {

        op = prompt("Ingresa el tipo de operacion: los simbolos son +, -, * y /");
        if (op === "+" || op === "-" || op === "*" || op === "/") {
            op = op.trim();
            let opValida = op;
            if (opValida === true) {
                operandoValidacion = true;
            } else {
                alert("Este tipo de operación no es valida");
            }
        } else {
            alert("Este tipo de operacion no valida");
        }
    } while (operandoValidacion === false);
    return op;
}