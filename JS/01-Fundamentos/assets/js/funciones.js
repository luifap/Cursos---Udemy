
//FUNCIÓN TIPICA 
//function saludar() {
 //   console.log('Hola Mundo');
//}
//saludar();

//FUNVIÓN ANONIMA
//const saludar = function() {   //se guarda la funcion como anonnima
  //  console.log('Hola Mundo');
//}
//saludar();


///FUNCIÓN CON ARGUMENTO
//function saludar( nombre ) {
      //console.log('Hola ' + nombre);
//}
//saludar('Fernanda');


///FUNCIÓN ARGUMENTS
//function saludar( nombre ) {
    //console.log('arguments');
//}
//saludar('Fernanda', 40, true, 'costa rica');

//FUNCIÓN FLECHA
//const saludarFlecha = () => {   
    // console.log('Hola Flecha');
  //}
//saludarFlecha();


//FUNCIÓN FLECHA CON ARGUMENTOS
//const saludarFlecha2 = ( nombre ) => {   
   // console.log('Hola Flecha ' + nombre);
 //}
//saludarFlecha2('Luisa');

//RETURN
//function sumar(  a, b ){
  //  return a + b;
//}
//console.log(sumar(1,5) );

//RETURN FUNCIÓN DE FLECHA
const sumar2 = (  a, b )=>{
   return a + b;
}
console.log(sumar2(5,5) );

//RETURN FUNCIÓN DE FLECHA resumido cuando es una linea de codigo
const sumar3 = (  a, b )=> a + b;

 console.log(sumar3(4,5) );

 //Función return aleatoria
 function getAleatorio(){
     return Math.random();
 }
 console.log( getAleatorio() );

 //Función return aleatoria con flecha
 const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );

