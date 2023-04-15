const fs = require('fs');
//function for read a file or archive
function read(path, cb){
    fs.readFile(path, 'utf8', (err, data) =>{
        console.log(data);
    });
}
//function for write a file or archive
function write(path, data, cb){
    fs.writeFile(path, data, 'utf8', (err) =>{
        if(err){
            console.log('Ha ocurrido un error: ' + err);
        }else{
            console.log('Escrito correctamente en: ' + path);
        }
    });
}
//function for delete a file or archive
function del(path, cb){
    fs.unlink(path, (err) =>{
        if(err){
            console.log('Ha ocurrido un error:'+ err);
        }else{
            console.log('El archivo ha sido eliminado');
        }
    });
}

//read(__dirname + '/archivo.txt');
//write(__dirname + '/archivo_2.txt', 'new archive wrote by the function write', console.log);
del(__dirname + '/archivo.txt', console.log);