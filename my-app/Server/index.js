const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/TNP_DATABASE')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function() {
    console.log('we are connected to our Mongodb database')
  });
app.listen(80, ()=> console.log('server started'))