// 4. Imprimir un arreglo
// Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a
// parte:

// // código de prueba
// console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// // 1
// // Hola
// // 2
// // Mundo

function imprimirArreglo(lista){

    lista.forEach(valor => {
        console.log(valor)
    });
}

let listas = [1, "Hola",2,"Mundo"];
imprimirArreglo(listas);
