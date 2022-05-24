/**
 * Días de semana abrimos a las 11, 
 * pero los fines de semana abrimos a las 9
 *  */

//Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 1; //0: domingo... 1:Lunes...
const horaActual = 10; 

let horaApertura;
let mensaje; //Está abierto, está cerrado, hoy abrimos a las xxx

//if (dia === 0 || dia === 6){
//   if ( [0,6].includes( dia )){ 
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de la semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes( dia )) ? 9 : 11;

// if (horaActual >= horaApertura){
//     mensaje = 'Esta abierto'
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje =( [ horaActual >= horaApertura]) ?'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});
