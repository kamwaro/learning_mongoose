const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const User = require('./Model/User');
const Post = require('./Model/Post');


app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send('Wassup people!!')
})

// Mongoose configuration
mongoose.connect('mongodb://localhost/SocialMediaApp_db',{ useNewUrlParser: true,useUnifiedTopology: true },(error) => {
    error ? console.log(`${error} Connection unsuccessful`) : console.log('Connection successful') 
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})


// POST request for first user
app.post('/user',(req, res) => {
    let newUser = new User({
        name: req.body.name
    });

    newUser.save().then(user => {
        res.send(user);
    },(e) => {
        res.status(400).send(e);
    });
});



