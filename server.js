const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded()) //for parsing form data in request.
app.set('view engine', 'ejs');
app.use(expressLayouts);


//connecting mongodb
let mongodburi = process.env.MONGODB_URI || 'mongodb://localhost:27017/testinguser'
mongoose.connect(mongodburi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log("Database connected..."))
    .catch(error => console.log(err));


app.get('/', (req, res) => {
    res.send('hello');

})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));