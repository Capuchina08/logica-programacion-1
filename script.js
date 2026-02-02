// 1. Solicitar los nuemros al usuario
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));
// Variables para guardar el mensaje de salida
let mensajeDOM = "";
// 2. Analizar si son iguales
    if (num1 === num2 && num1 === num3) {
        mensajeDOM = `Los números son iguales: ${num1}, ${num2}, ${num3}`;
        console.log("Los números son iguales.");
    } else {
        // 3. Lógica de ordenamiento usando un Array
        // Guardamos los números en un arreglo para facilitar el orden
        let numeros = [num1, num2, num3];

        // Ordenamos de Menor a Mayor
    
        let menorAMayor = [...numeros].sort((a, b) => a - b);
        
        // Ordenamos de Mayor a Menor
        let mayorAMenor = [...numeros].sort((a, b) => b - a);

        // Identificamos variables individuales 
        let menor = menorAMayor[0];
        let centro = menorAMayor[1];
        let mayor = menorAMayor[2];

        // 4. Imprimir en Consola
        console.log("Mayor a menor:", mayorAMenor.join(", "));
        console.log("Menor a mayor:", menorAMayor.join(", "));
    }
