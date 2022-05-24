// const elMayor = (a,b)=> {
//     return ( a > b) ? a : b
// }

// console.log ( elMayor (20,15));


//LO MISMO DE ARRIBA SIMPLIFICADO

 const elMayor = (a,b) =>  ( a > b) ? a : b


const tiendaMembresia = ( miembro) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log ( elMayor (20,15));
console.log( tiendaMembresia (false));

const amigo = false;
const amigosArr = 
    ['Peter',
    'Mateo',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(10,15)
]

console.log (  amigosArr);


const nota = 82.5 //A+ A B+ 
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log({ nota, grado});

