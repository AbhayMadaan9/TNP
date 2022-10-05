const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodypaerser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/TNP_DATABASE')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function() {
    console.log('we are connected to our Mongodb database')
  });
//Schema for the database
var postSchema = new mongoose.Schema({
  type: String,
  announcement: String,
  company: String,
  location: String
})
//converting schema to model
var post = mongoose.model('post', postSchema);

//endpoints
app.post('/Post', (req, res)=>{
  req.body.save().then(()=>{
    res.send("This item has been saved to database")
  }).catch(()=>{
    res.status(400).send("Item is not saved to the database")
  })
  // res.render('../src/Components/Post.js')
})


  //starting the server
app.listen(80, ()=> console.log('server started'))