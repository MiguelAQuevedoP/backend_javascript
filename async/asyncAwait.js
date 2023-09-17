async function hi(name){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('Hola ' + name);
            resolve(name);
        },1500);
    });

};

async function speak(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('speaking... ');
            resolve();
        });
    });
};

async function bye(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bye ' + name);
            resolve();
        },1000);
    });
};

async function main(){
        let name = await hi('zaky');
        await speak();
        await speak();
        await bye(name);
        console.log('Process finished');
};

console.log('Process init');
main();