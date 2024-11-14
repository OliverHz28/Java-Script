const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() ); // true


console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && !false ); // true

console.log('=========');
console.log(  regresaFalse() && regresaTrue() ); // false
console.log(  regresaTrue() && regresaFalse() ); // false

console.log('==== && =====');
regresaFalse() && regresaTrue();

console.log( '4 condiciones ', true && true && true && false ); // false


console.warn('OR'); // true
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );
console.log( '4 condiciones ', true || true || true || false ); // true



console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && false && 150; // ?
const a2 = 'Hola' && 'Mundo' && true && 'Yo nunca pierdo';
const a3 = true  || 'Ya no soy falso' || soyFalso;
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || false || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5 });

if ( regresaFalse() && regresaTrue() && (true || false || true) ) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}




