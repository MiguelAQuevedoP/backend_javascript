import express from 'express';
import cookieJwtAuth from "../middleware/cookieJwtAuth.js";

const routeAdd = express.Router();

routeAdd.post('/add',cookieJwtAuth,(req,res)=>{
  console.log(req.user);
    res.redirect('/welcome');
})

export default routeAdd;