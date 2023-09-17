import express from 'express';
import cookieParser from 'cookie-parser';//is a middleware

const app = express();

app.get(cookieParser())
app.get('/',(req, res)=>{
    res.send('Hello World')
})
//middleware coockie-parser have to init before than app.listen
app.get('/setcookie',(req,res)=>{
    res.cookie('my cookie name', 'my cookie',{
        maxAge: 1000*60,//Is for time of cookie and is in ms 
        //httpOnly: true, //this is for not access to cookie information
        //secure: true,
        sameSite: 'lax'
    })
    console.log(`cookie: ${req.cookies}`)
    res.send('helloWorld3 ')
})

app.get('/getcookies',(req,res)=>{
    console.log(`cookie: ${req.cookies}`);
    res.send(`reading cookies`)
})

app.get('/rmcookies',(req,res)=>{
    res.clearCookie('my cookie name')
    res.send(`deleted cookie`)
})

const PORT=3000;
app.listen(PORT, (()=>{
    console.log(`Server running on port ${PORT}`)
}))