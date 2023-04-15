function hi(name, callback){
    setTimeout(function(){
        console.log('Hola ' + name);
        callback(name);
    },1500);
};

function bye(name, callback){
    setTimeout(() => {
        console.log('Bye ' + name);
        callback();
    },1000);
};

console.log('Init process');
hi('zaky',(name)=> {
    bye(name,()=> {
        console.log('End Process');
    });
});