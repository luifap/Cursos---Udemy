let a = 5;

if (a => 10){//undefined, null, una asignación
    console.log('A es mayor a 10');
}else {
    console.log('A es menor a 10');
}

//console.log('Fin programa');

const hoy = new Date(); //{}
let dia  = hoy.getDay(); //0: Domigo 1:Lunes, 2: Martes....

console.log({ dia });

if ( dia === 0 ) {
    console.log('Domingo');
}else if( dia === 1){ //CONDICIÓN ANIDADA
    console.log('Lunes');
    //CONDICION LARGA
    //if ( dia === 1){
       // console.log('Lunes');
    //}else {
       // console.log('No es lunes ni domingo');
   // }
} else if (dia === 2){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}


//Sin usar If else, o Switch, únicamente objetos

dia = 3; //0: domingo, 1: lunes....

//OBJETOS
const diasletras = {
    0: ()=> 'domingo - 0',
    1: ()=> 'lunes - 1',
    2: ()=> 'martes - 2',
    3: ()=> 'miércoles - 3',
    4: ()=> 'jueves - 4',
    5: ()=> 'viernes - 5',
    6: ()=> 'sábado -',
}

//dia de la semana 
console.log( diasletras[dia]());


const diasletras2 = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado',];
   
console.log(diasletras2[dia]);