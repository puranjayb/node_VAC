const express = require(`express`);
const bodyParser = require(`body-parser`);
const {controllerMovie} = require('./controllers/movieController');


const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get(`/`, controllerMovie.rootPage);
app.get('/movies', controllerMovie.getAllMovie);
app.get('/movies/:id', controllerMovie.getMovieById);
app.get('/movies/title/:title', controllerMovie.getMovieByTitle);
app.post('/movies/:title/:release_year/:language', controllerMovie.addMovie);
app.put('/movies/year/:id/:release_year', controllerMovie.updateMovieYearById);
app.put('/movies/title/:id/:title', controllerMovie.updateMovieNameById);
app.delete('/movies/:id', controllerMovie.deleteMovieById);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


// app.get(`/select`, (req, res) => {
//   let term = req.query.term;

//   connection.query(`SELECT * FROM movie_data WHERE title LIKE '?%'`,[term], (err, results) => {
//     if (err) {
//       console.log(`Database Error: ${err}`);
//       return;
//     }
//     else{
//       console.log(results);
//       res.send(results);
//     }
//   });
// });

// app.get('/delete', (req, res) => {
//   let id = req.query.id;

//   connection.query(`DELETE FROM movie_data WHERE movie_id = ?`,[id], (err, results) => {
//     if (err) {
//       console.log(`Database Error: ${err}`);
//       return;
//     }
//     else{
//       console.log(`Deleted ${id} from movie_data`);
//       console.log(results);
//       res.send(results);
//     }   
//   });
// });

// app.get('/langFilter' , (req, res) => {
//   let filter = req.query.filter;

//   connection.query(`SELECT * FROM movie_data WHERE language = ?`,[filter], (err, results) => {
//     if (err) {
//       console.log(`Database Error: ${err}`);
//       return;
//     }
//     else{
//       console.log(results);
//       res.send(results);
//     }
//   });
// });
