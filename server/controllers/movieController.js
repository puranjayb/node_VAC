const {modelMovie} = require('../models/movieModel')

const controllerMovie = {
    rootPage: (req, res) => {
        res.status(200).send('Root Page Not Defined');
    },
    
    getAllMovie: (req, res) => {
        modelMovie.getAllMovie((err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    getMovieById: (req, res) => {
        let id = req.params.id;
        modelMovie.getMovieById(id, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    getMovieByTitle: (req, res) => {
        let title = req.params.title;
        modelMovie.getMovieByTitle(title, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    addMovie: (req, res) => {
        let {title, release_year, language} = req.params;
        modelMovie.addMovie(title, release_year, language, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    updateMovieYearById: (req, res) => {
        let id = req.params.id;
        let release_year = req.params.release_year;
        modelMovie.updateMovieYearById(id, release_year, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    updateMovieNameById: (req, res) => {
        let id = req.params.id;
        let title = req.params.title;
        modelMovie.updateMovieNameById(id, title, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    deleteMovieById: (req, res) => {
        let id = req.params.id;
        modelMovie.deleteMovieById(id, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    }
}

module.exports = {controllerMovie};