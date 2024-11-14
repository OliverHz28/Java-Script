/**
 * Días de semana abrimos a las 11, 
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy....
let dia = 2; // 0: domingo... 1:Lunes....
const horaActual = 10;


let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 6 ) {
// if ( [0,6].includes( dia ) ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Diá de semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;
dia = ( [0,6].includes( dia ) ) ? `Fin de semana` : `Diá de semana`;
// if ( horaActual >= horaApertura ) {
//     mensaje = `Está abierto`;
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = ( horaActual >= horaApertura ) ? `Está abierto` : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log( { dia, horaActual, horaApertura, mensaje } );