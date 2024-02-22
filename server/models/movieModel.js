const {connection} = require('../db/dbConfig');

const modelMovie = {
    getAllMovie: (callback) => {
        connection.query(`SELECT * FROM movie_data`, (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },
    
    getMovieById: (id, callback) => {
        connection.query(`SELECT * FROM movie_data WHERE movie_id = ?`, [id], (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },

    getMovieByTitle: (title, callback) => {
        connection.query(`SELECT * FROM movie_data WHERE title LIKE ?`, [title+'%'], (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },
    
    addMovie: (title, release_year, language, callback) => {
        connection.query(`INSERT INTO movie_data (title, release_year, language, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)`, [title, release_year, language], (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },
    
    updateMovieYearById: (id, release_year, callback) => {
        connection.query(`UPDATE movie_data SET release_year = ? WHERE movie_id = ?`, [release_year, id], (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },
    
    updateMovieNameById: (id, title, callback) => {
        connection.query(`UPDATE movie_data SET title = ? WHERE movie_id = ?`, [title, id], (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },
    
    deleteMovieById: (id, callback) => {
        connection.query(`DELETE FROM movie_data WHERE movie_id = ?`, [id], (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    }
};

module.exports = {modelMovie};
