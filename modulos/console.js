console.log('algo'); //ver algo en consola
console.info('algo'); //para saber por donde paso el codigo
console.error('algo'); //para ver errores o potenciales errores(warnings)
var table = [{
    a: 1,
    b: 2,
    c: 3},
    {
        a: 'uno',
        b: 'dos',
        c: 'tres'
    }]
console.table(table); // visualiza en una tabla los array
console.warn('algo'); //para ver errores o potenciales errores(warnings)
//console.clear(); //limpia la consola
/*console.group('conversacion');
console.log('Hi');
console.group('bla');
console.log('blablabla');
console.log('blablabla');
console.groupEnd('bla');
console.log('bye');
console.groupEnd('conversacion');*/

//ejemplo de function para console.group
function suma(a, b) {
    console.group('suma');
    console.log('suma');
    resta(a, b);
    let z = a + b;
    console.groupEnd('suma');
    return console.log(z);
}
function resta(a, b) {
    console.group('resta');
    console.log('resta');
    let z = a - b;
    console.groupEnd('resta');
    return console.log(z);
}

suma(1, 2);

console.count('veces'); // Crea un contador con la veces que repitamos el console.count
console.count('veces');
console.count('veces');
console.countReset('veces');// Resetea el contador
console.count('veces');
console.count('veces');