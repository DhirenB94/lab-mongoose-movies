const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const DB_NAME = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
    {
        name: 'Kanye West',
        occupation: 'Rapper',
        catchPhrase: 'Sorry to interrupt, but Beyonce had the greatest video of all time'
    },
    {
        name: 'Dennis Reynolds',
        occupation: 'Golden God',
        catchPhrase: "I'm a 5 star man"
    },
    {
        name: 'Frank Reynolds',
        occupation: 'Financier',
        catchPhrase: "Derivative"
    }
];

Celebrity.create(celebrities)
.then((celebritiesFromDB) => {
    console.log(`Number of Celebrities created: ${celebritiesFromDB.length}`)
    mongoose.connection.close();
})
.catch((e)=> {
    console.log(e)
});