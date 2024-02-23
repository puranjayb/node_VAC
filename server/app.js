const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require(`cors`);
const {controllerMovie} = require('./controllers/movieController');


const app = express();
app.use(cors());
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