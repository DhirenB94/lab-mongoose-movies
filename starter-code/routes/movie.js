const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.model')


router.get('/movie/create', (req, res) => {
    res.render('movies/movie-new')
  });
  
  router.post('/movie/create', async (req, res) => {
    const { title, genre, plot } = req.body;
    await Movie.create(req.body);
    res.redirect('/celebrities')
  });


module.exports = router