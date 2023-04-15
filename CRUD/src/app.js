const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//IMPORT ROUTES
const customer_routes = require('./routes/customer');

//SETTINGS
//Busca algun puerto disponible en el OS si no se puede elige el PUERTO: 3000
app.set('port', process.env.PORT || 3000);//se llama con el getter
app.set('view engine', 'ejs');//configura el motor de plantilla como "ejs"
app.set('views',path.join(__dirname,'views'));//concatena la ruta del sistema para que encuentre "views"

//MIDDLEWARES
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'node_mysql'
},'single'));
app.use(express.urlencoded({ extended: false }));//desde el mod de express se requiere el metodo que permite entender todos los datos que vienen desde el formulario, extend false es porque no envia imagenes o encriptados


//ROUTES
app.use('/', customer_routes);

//STATIC FILES
app.use(express.static(path.join(__dirname,'public')));

//STARTING SERVER
app.listen(app.get('port'), () => {
    console.log(`app listening at http://localhost:${app.get('port')}`);
})