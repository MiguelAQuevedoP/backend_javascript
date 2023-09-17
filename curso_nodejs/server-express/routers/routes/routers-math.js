import express from 'express';
import infoCourses from '../../courses.js';

const routeMath = express.Router();

routeMath.get('/',(req,res)=>{
  res.send(infoCourses.mathematics);
});
routeMath.get('/:title',(req,res)=>{
  const title = req.params.title;
  const result = infocourses.mathematics.filter(course => course.title === title);
  if(result.length === 0){
    return res.status(404).send(`We dont have the course of ${title}`);
  }
  res.send(result);
});
routeMath.get('/:title/:level',(req,res)=>{
  const title = req.params.title;
  const level = req.params.level;
  const result = infoCourses.mathematics.filter(course => course.title === title && course.level === level);
  if(result.length === 0){
    return res.status(404).send(`We dont have the course of ${title} in level ${level}`);
  }
  res.send(result);
});

export default routeMath;