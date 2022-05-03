
//const arr =new Array(10); Se define un arreglo tiene 10 elementos internamente
//cons arr = []; Es lo mismo como se definiría un arreglo pero en este caso tiene 0 elementos
//console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chromo Trigger'];
console.log(videoJuegos);

console.log(videoJuegos[0]); //Imprimimos el primer array que en este caso es Mario 3

let arregloCosas = [
    true,
    123,
    'Fernanda',
    1 + 2,
    function(){},
    ()=>{},
    { a:1 },
    [ 'X','Megaman', 'Zero', 'Dr. Light', ['Dr. Willy','Woodman']]
];
//console.log(arregloCosas);
//console.log(arregloCosas[7][3]); //imprimir solo el Dr Light
console.log(arregloCosas[7][4][1]);