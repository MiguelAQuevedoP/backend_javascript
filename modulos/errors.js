//para una funcion sincrona
function breack(){
    try {
        return 3 + z;
    }
    catch(e){
        console.error('algo roto' + e);
        console.error(e.stack);
    }
}
//breack();
//para una funcion asincrona
async function breackAsync(){
    try {
        return 3 + z;
    }
    catch(e){
        console.error('algo roto' + e);
        console.error(e.stack);
    }
}
//breackAsync();
//funcion asincrona con promise
function breackPromise(){
    return new Promise((resolve, reject) => {
        try {
            resolve(3 + z);
        }
        catch(e){
            console.error('algo roto' + e);
            reject();
        }
    });
}
breackPromise()
   .then(res => console.log(res))
   .catch(error => console.error('error: ' + error));