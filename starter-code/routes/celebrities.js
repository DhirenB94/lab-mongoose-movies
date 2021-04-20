const express = require('express');
const CelebrityModel = require('../models/Celebrity.model');

const router = express.Router();



router.get('/celebrities', async (req, res, next) => {
    let celebritiesFromDB = await CelebrityModel.find()
      res.render('celebrities/list', {celebritiesFromDB})
  });


  
router.get('/celebrities/add', async (req, res, next) => {
      res.render('celebrities/new')
    });
    
router.post('/celebrities/add', async (req, res, next) => {
      const {name, occupation, catchPhrase} = req.body
      await CelebrityModel.create(req.body)
      res.redirect('/celebrities')
})



router.get('/celebrities/:id', async (req, res) => {
        const celebritiesId = req.params.id;
        const celebrities = await CelebrityModel.findById(celebritiesId);
        res.render('celebrities/details', {celebrities});
    });


router.get('/celebrities/:id/edit', async (req, res, next) => {
        const celebId = req.params.id;
        const celeb = await CelebrityModel.findById(celebId)
        res.render('celebrities/edit', {celeb})
});
      
router.post('/celebrities/:id/edit', async (req, res, next) => {
        const celebId = req.params.id
        const {name, occupation, catchPhrase} = req.body
        await CelebrityModel.findByIdAndUpdate(celebId, req.body);
        res.redirect('/celebrities')
});



router.post('/celebrities/:id/delete', async (req, res, next) => {
        const celebId = req.params.id
        await CelebrityModel.findByIdAndDelete(celebId)
        res.redirect('/celebrities')
});


module.exports = router;