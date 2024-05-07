// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

// FOR
for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }

 //THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    },
 };
