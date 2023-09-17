import express from 'express';
//import infoCourses from '../courses.js';
import routeMath from './routes/routers-math.js';
import routeProgramming from './routes/routers-programming.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//router
const routeCourses = express.Router();
app.use('/api/courses',routeCourses);
app.use('/api/courses/programming',routeProgramming);
app.use('/api/courses/math',routeMath);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

routeCourses.get('/', (req, res) => {
  res.send(`The server had a request of type ${req.method}`);
});

routeCourses.post('/api/courses', (req, res) => {
  res.send(`The server had a request of type ${req.method}`);
});

routeCourses.put('/api/courses', (req, res) => {
  res.send(`The server had a request of type ${req.method}`);
});

routeCourses.delete('/api/courses', (req, res) => {
  res.send(`The server had a request of type ${req.method}`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});