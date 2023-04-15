let name = process.env.NOMBRE || 'Not name';
let web = process.env.WEB || 'http://localhost'
console.log('hola ' + name 
    + '\nMi web es: ' + web);
console.log('<h1>' + name + '</h1>');