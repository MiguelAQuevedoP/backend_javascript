import express from 'express';
import infoCourses from '../../courses.js';

const routeProgramming = express.Router();

routeProgramming.use(express.json());

routeProgramming.get('/',(req,res)=>{
  res.send(infoCourses.programming);
});

routeProgramming.get('/:title',(req,res)=>{
  const title = req.params.title;
  const result = infoCourses.programming.filter(course => course.title === title);
  if(result.length === 0){

    return res.status(204).send(`We dont have the course of ${title}`);
  }
  if(req.query.sort === 'views'){
    return res.send(result.sort((a,b)=>b.views -a.views));
  }else{
    return res.send(result);
  }
});

routeProgramming.post('/',(req,res)=>{
  let newCourse = req.body;
  infoCourses.programming.push(newCourse);
  res.send(JSON.stringify(infoCourses.programming));
});

routeProgramming.put('/:title',(req,res)=>{
  const title = req.params.title;
  const index = infoCourses.programming.findIndex(course => course.title === title);
  if(index === -1){
    return res.status(204).send(`We dont have the course of ${title}`);
  }
  infoCourses.programming[index] = req.body;
  res.send(infoCourses.programming);
});

routeProgramming.patch('/:id',(req,res)=>{
  const id = req.params.id;
  const index = infoCourses.programming.findIndex(course => course.id == id);
  console.log(req.body);
  if(index === -1){
    return res.status(204).send(`We dont have the course of ${id}`);
  }
  Object.assign(infoCourses.programming[index],req.body);
  res.send(infoCourses.programming);
});

routeProgramming.delete('/:id',(req,res)=>{
  const id = req.params.id;
  const index = infoCourses.programming.findIndex(course => course.id == id);
  if(index === -1){
    return res.status(204).send(`We dont have the course of ${id}`);
  }
  infoCourses.programming.splice(index,1);
  res.send(infoCourses.programming);
});

export default routeProgramming;