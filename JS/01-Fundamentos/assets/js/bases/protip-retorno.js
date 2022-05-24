//function crearPersona (nombre, apellido) {
  //  return { nombre, apellido}
//}

//const persona =crearPersona('Fernanda', 'Parra');
// console.log(persona);

//La misma función de arriba con flecha resumida
const crearPersona = (nombre, apellido) => ({ nombre, apellido});
  
 const persona =crearPersona('Fernanda', 'Parra');
  console.log(persona);

  //arguments con función tradicional
  //function imprimeArgumentos () {
    //console.log(arguments);
  //}
  
 // imprimeArgumentos(10, true, false, 'Fernanda', 'Parra');

  //La misma función arguments de arriba con flecha resumida y con rest

 const imprimeArgumentos2 = (...args) =>{
    console.log(args);
  }
  
  imprimeArgumentos2(10, true, false, 'Fernanda', 'Parra');


  //////// con variable adelante del rest
  const imprimeArgumentos3 = ( edad, ...args) =>{
    console.log({edad,args});
  }
  
  imprimeArgumentos3(10, true, false, 'Fernanda', 'Parra');

   //////// los argumentos con variables definidas
   const imprimeArgumentos4 = ( edad, ...args) =>{
    return args;
  }
  
  const [casado, vivo, nombre, saludo] = imprimeArgumentos4(10, true, false, 'Fernanda', 'Hola');
  console.log({casado, vivo, nombre, saludo});

  const {apellido: nuevoApellido} = crearPersona ( 'Fernanda', 'Parra');
  console.log({nuevoApellido});

  //Destructuración de argumentos

  const tony = {  
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

//const imprimePropiedades = (personaje) => {
  //  consolelog ('nombre',personaje.nombre);
   // consolelog ('codeName',personaje.codeName);
  //  consolelog ('vivo',personaje.vivo);
  //  consolelog ('edad',personaje.edad);
   // consolelog ('trajes',personaje.trajes);
//}

const imprimePropiedades = ({nombre, codeName, edad, trajes}) => {
    edad = edad || 0;
    nombre = nombre || 0;
    codeName = codeName || 0;
    trajes = trajes || 0;

    consolelog({nombre});
    consolelog({codeName});
    consolelog({edad});
    consolelog({trajes});


    }
  


