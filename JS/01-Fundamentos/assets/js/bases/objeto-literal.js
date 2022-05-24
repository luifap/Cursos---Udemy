let personaje = {  
            nombre: 'Tony Stark',
            codeName: 'Iroman',
            vivo: false,
            edad: 40,
            cords: {
                lat: 34.034,
                lng: -118.70
            },
            trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
            direccion: {
                zip: '10880, 90265',
                ubicacion: 'Malibu, California'
        },
        'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.cords);
console.log('Lat', personaje.cords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('Último traje', personaje.trajes [personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Última película', personaje['ultima-pelicula']);

//MÁS DETALLES

//Eliminar la edad
delete personaje.edad;
console.log(personaje);

//Crear una nueva propiedad en el objeto que se va a crear en el momento de la ejecución
//personaje.casado = true;

//Intercalar posiciones
const entriesPares = Object.entries( personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 100000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});

















