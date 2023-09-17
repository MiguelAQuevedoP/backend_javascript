import express from 'express';
import infoCourses from './courses.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
  res.send(`The server had a request of type ${req.method}`);
});

app.get('/api/courses/programming',(req,res)=>{
  res.send(infoCourses.programming);
});
app.get('/api/courses/programming/:title',(req,res)=>{
  const title = req.params.title;
  const result = infoCourses.programming.filter(course => course.title === title);
  if(result.length === 0){

    return res.status(404).send(`We dont have the course of ${title}`);
  }
  if(req.query.sort === 'views'){
    return res.send(result.sort((a,b)=>b.views -a.views));
  }else{
    return res.send(result);
  }
});

app.get('/api/courses/math',(req,res)=>{
  res.send(infoCourses.mathematics);
});
app.get('/api/courses/math/:title',(req,res)=>{
  const title = req.params.title;
  const result = infoCourses.mathematics.filter(course => course.title === title);
  if(result.length === 0){
    return res.status(404).send(`We dont have the course of ${title}`);
  }
  res.send(result);
});
app.get('/api/courses/math/:title/:level',(req,res)=>{
  const title = req.params.title;
  const level = req.params.level;
  const result = infoCourses.mathematics.filter(course => course.title === title && course.level === level);
  if(result.length === 0){
    return res.status(404).send(`We dont have the course of ${title} in level ${level}`);
  }
  res.send(result);
});

app.post('/api/courses', (req, res) => {
  res.send(`The server had a request of type ${req.method}`);
});

app.put('/api/courses', (req, res) => {
  res.send(`The server had a request of type ${req.method}`);
});

app.delete('/api/courses', (req, res) => {
  res.send(`The server had a request of type ${req.method}`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});