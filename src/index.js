const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // it is used to extract or access data from body (req.body)
const route = require('./routes/route');
const multer = require('multer')
const app = express();

app.use(bodyParser.json()); // it help use recognise incoming body object is in json format
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(multer().any()) // it helps us to upload multimedia data like pdf, jpg etc.

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/Group-9-DB-legends?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))



app.use('/', route); // =>  "/" hyphen represents route or domain or home page, next variable "route" represents call back function that we want res or req

app.listen(process.env.PORT || 3000, () => {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});