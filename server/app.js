const express = require(`express`);
const app = express();
const port = 3000;

const {connection} = require(`./db/db_config`);

app.get(`/`, (req, res) => {
  res.send(`Root Page Not Defined`);
});

app.get(`/select`, (req, res) => {
  let term = req.query.term;

  connection.query(`SELECT * FROM movie_data WHERE title LIKE '?%'`,[term], (err, results) => {
    if (err) {
      console.log(`Database Error: ${err}`);
      return;
    }
    else{
      console.log(results);
      res.send(results);
    }
  });
});

app.get('/delete', (req, res) => {
  let id = req.query.id;

  connection.query(`DELETE FROM movie_data WHERE movie_id = ?`,[id], (err, results) => {
    if (err) {
      console.log(`Database Error: ${err}`);
      return;
    }
    else{
      console.log(`Deleted ${id} from movie_data`);
      console.log(results);
      res.send(results);
    }   
  });
});

app.get('/langFilter' , (req, res) => {
  let filter = req.query.filter;

  connection.query(`SELECT * FROM movie_data WHERE language = ?`,[filter], (err, results) => {
    if (err) {
      console.log(`Database Error: ${err}`);
      return;
    }
    else{
      console.log(results);
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});