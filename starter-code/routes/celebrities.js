const express = require('express');
const CelebrityModel = require('../models/Celebrity.model');

const router = express.Router();



router.get('/celebrities', async (req, res, next) => {
    let celebritiesFromDB = await CelebrityModel.find()
      res.render('celebrities/list', {celebritiesFromDB})
  });

router.get('/celebrities/:id', async (req, res) => {
    const celebritiesId = req.params.id;
    const celebrities = await CelebrityModel.findById(celebritiesId);
    res.render('celebrities/details', {celebrities});
})




  module.exports = router;