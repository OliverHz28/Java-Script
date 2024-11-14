
// function crearPersona( nombre, apellido ) {
//     return {
//         nombre : nombre,
//         apellido : apellido,
//     }
// }

// function crearPersona( nombre, apellido ) {
//     return { nombre, apellido };
// }

const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });


const persona = crearPersona( 'Frank', 'Hinojosa' );
console.log( persona );

function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log( { edad,args } );
    return args;
}

const [ casado, vivo, nombre, saudo ]  = imprimeArgumentos2( 10, true, false, 'Frank', 'Hola' );
console.log( { casado, vivo, nombre, saudo } );

const { nombre: name } = crearPersona( 'Frank', 'Hinojosa' );
console.log( { name } );

let tony = {
    nombre : 'Tony Stark',
    codeName : 'Iroman',
    vivo : false,
    edad : 40,
    trajes : [ 'Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log( 'nombre : ', personaje.nombre);
//     console.log( 'codeName : ', personaje.codeName);
//     console.log( 'vivo : ', personaje.vivo);
//     console.log( 'edad : ', personaje.edad);
//     console.log( 'trajes : ', personaje.trajes);
// }


const imprimePropiedades = ( { nombre, codeName, vivo, edad = 15, trajes } ) => {
  
   console.log( { nombre } );
   console.log( { codeName } );
   console.log( { vivo } );
   console.log( { edad } );
   console.log( { trajes } );
}

imprimePropiedades( tony );