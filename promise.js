const { readFile } = require("fs/promises");

//const { promisify } = require("util");
//const readFilePromise = promisify(readFile);
/*
const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};*/
/*
getText('./data/fourth.txt')
   .then((result) => console.log(result))
   .then(() => getText('./data/first.txt'))
   .then(result => console.log(result))
   .catch(error => console.error(error))*/

async function read() {
  try {
    //throw new Error('error no esperado')//En esta linea se crea un error con el texto 'error no esperado'
    const result = await readFile("./data/first.txt", 'utf-8');
    console.log(result);
    const result2 = await readFile("./data/second.txt", 'utf-8');
    console.log(result2);
    const result3 = await readFile("./data/third.txt", 'utf-8');
    console.log(result3);
    const result4 = await readFile("./data/fourth.txt", 'utf-8');
    console.log(result4);
  } catch (error) {
    console.error(error);
  }
}

read();
