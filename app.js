const express = require('express');
const app = express();

app.use(express.json());

app.get('/add', (req, res) => {
  const id1 = req.query.id1;
  const id2 = req.query.id2;

  res.send(`<h1>${id1} + ${id2} <br>${parseInt(id1)+parseInt(id2)}</h1>`);
});

app.get('/sub', (req, res) => {
  const id1 = req.query.id1;
  const id2 = req.query.id2;

  res.send(`<h1>${id1} - ${id2} <br>${parseInt(id1)-parseInt(id2)}</h1>`);
});

app.get('/mul', (req, res) => {
  const id1 = req.query.id1;
  const id2 = req.query.id2;

  res.send(`<h1>${id1} * ${id2} <br>${parseInt(id1)*parseInt(id2)}</h1>`);
});

app.get('/div', (req, res) => {
  const id1 = req.query.id1;
  const id2 = req.query.id2;

  try{
    if(parseInt(id2) === 0){
      throw new Error('Divide by zero');
    }
  }
  catch(e){
    return res.status(400).send(e.message);
  }

  res.send(`<h1>${id1} / ${id2} <br>${parseFloat(parseInt(id1)/parseInt(id2))}</h1>`);
});

app.get('/mod', (req, res) => {
  const id1 = req.query.id1;
  const id2 = req.query.id2;
  
  try{
    if(parseInt(id2) === 0){
      throw new Error('Divide by zero');
    }
  }
  catch(e){
    return res.status(400).send(e.message);
  }

  res.send(`<h1>${id1} % ${id2} <br>${parseInt(id1)%parseInt(id2)}</h1>`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

