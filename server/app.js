const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/* Sample code for calculator

app.get('/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
  
    const result = num1 + num2;
    res.json({ result });
});
  
app.get('/sub', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
  
    const result = num1 - num2;
    res.json({ result });
});
  
app.get('/mul', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
  
    const result = num1 * num2;
    res.json({ result });
});
  
app.get('/div', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Both num1 and num2 must be numbers');
    }

    if (num2 === 0) {
        return res.status(400).send('Divide by zero');
    }

    const result = num1 / num2;
    res.json({ result });
});

app.get('/mod', (req, res) => {
    const num1 = parseInt(req.query.num1, 10);
    const num2 = parseInt(req.query.num2, 10);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Both num1 and num2 must be numbers');
    }

    if (num2 === 0) {
        return res.status(400).send('Divide by zero');
    }

    const result = num1 % num2;
    res.json({ result });
});
*/

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
