const bcrypt = require('bcryptjs');//bcryptjs is for encrypting and decrypting the password
const helpers = {};

helpers.encryptPassword = async (password) => {//se recibe la contraseña
    const salt = await bcrypt.genSalt(10);//se genera un patron necesario para que funcione el cifrado
    const hash = await bcrypt.hash(password, salt);//cifra la contraseña segun el patron
    return hash;
};

helpers.matchPassword = async (password, savedPassword) => {//se recibe la contraseña
    try{
        return await bcrypt.compare(password, savedPassword);//compara las dos 
    } catch (e) {
        console.error(e);
    }
};
module.exports = helpers;