function hi(name){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('Hola ' + name);
            resolve(name);
        },1500);
    });

};

function speak(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('speaking... ');
            resolve();
        });
    });
};

function bye(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bye ' + name);
            resolve();
        },1000);
    });
};

console.log('Init process');
hi('Juan')
   .then(speak)
   .then(speak)
   .then(speak)
   .then(speak)
   .then(bye)
    .then((name => {
        console.log('End process');
   })).catch(error => {
        console.error("Ha sucedido un error");
        console.error(error);
   });