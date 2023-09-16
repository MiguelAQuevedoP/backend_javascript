import curse from './curse.json' assert { type: 'json'};

//console.log(curse);

let infoCurse = curse;

console.log(infoCurse);
console.log(typeof infoCurse);

//JSON.strigify() this transform json to string
let infoJSON = JSON.stringify(infoCurse);

console.log(infoJSON);
console.log(typeof infoJSON);

//JSON.parse() this transform string to json
let infoJSONParse = JSON.parse(infoJSON);

console.log(infoJSONParse);
console.log(typeof infoJSONParse);