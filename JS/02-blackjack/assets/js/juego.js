/**
 * 2C = Two of clubs (Tréboles)
 * 2D = Two of clubs (Diamantes)
 * 2H = Two of clubs (Corazones)
 * 2S = Two of clubs (Espadas)
 */

let  deck        = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];



// Está funcion crea una nueva baraja
const crearDeck = () => {

    for( let i = 2; i <= 10; i++) { 

        for( let tipo of tipos) {
            deck.push( i + tipo);
        }
    
    }

    for( let tipo of tipos) { 

        for( let esp of especiales) {
            deck.push( esp + tipo);
        }
    }

  //  console.log( deck);
    deck = _.shuffle( deck);
    console.log( deck );
    return deck;
}


crearDeck();


//Está opción me permite pedir una carta
const pedirCarta = () => {

    if ( deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    console.log(deck);
    console.log(carta);
    return carta;
}
