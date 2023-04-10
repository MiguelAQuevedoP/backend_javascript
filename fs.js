//FS is file System: a module but in this example is with Sync or sinchronous
const fs = require('fs');
/*
const first = fs.readFileSync('./data/first.txt', 'utf-8');//leer archivos
const second = fs.readFileSync('./data/second.txt', 'utf-8');

console.log(first);
console.log(second);

//fs.writeFileSync('./data/third.txt','Tercer archivo');//crea archivos

const third = fs.readFileSync('./data/third.txt', 'utf-8');

console.log(third);


const title =  'agregar texto a uno ya existente';

fs.writeFileSync('./data/fourth.txt', title,{
    flag: 'a' //La parte del flag es para agregar texto ya existente
});*/


//MODO ASINCRONO
fs.readFileSync('./data/first.txt', 'utf-8', (error, data) => {
    if (error){
        console.log(error);
    }
    console.log(data); 
    fs.readFileSync('./data/third.txt', 'utf-8', (err, data) => {
        if (err){
            console.log(error);
        }
        console.log(data);
        fs.writeFile('.data/new_file.txt', 'archivo new_file', (err, data) => {
            console.log(err);
            console.log(data);
        });

    });
});