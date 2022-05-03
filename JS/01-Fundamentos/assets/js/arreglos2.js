let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length); //Con este sabemos el largo del arreglo

let primero = juegos[2-2];
let ultimo = juegos [ juegos.length - 1];

console.log({primero, ultimo});

//El siguiente metodo es para conocer la posicón de cada no

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

//El siguiente metodo es para añadir un arreglo al final

let nuevaLongitud = juegos.push( 'F-zero' );
console.log({ nuevaLongitud, juegos });

//El siguiente metodo es para añadir un arreglo al inicio
let nuevaLongitudd = juegos.unshift('Fire Emblem');
console.log({nuevaLongitudd, juegos});

//Elimina el último arreglo que se añadio
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//Eliminar un arreglo en particular
let pos = 1;

console.log( juegos );
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

//Saber en que posición de encuentra un arreglo especifico.

let metroidIndex = juegos.indexOf('Metroid'); //CaSeSeNsItIvE
console.log({ metroidIndex });