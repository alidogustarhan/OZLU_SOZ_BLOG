const express = require('express');
const ejs=require('ejs');
const path=require('path');
const mongoose = require('mongoose');
const Message = require('./modules/Message')


const app = express();

//connect DB

mongoose.connect('mongodb://localhost:27017/cleanblog-test-db');


//TEMPLATE ENGINE
app.set("view engine","ejs");


//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//ROUTES
app.get('/', async (req, res) => {
  const messages = await Message.find({})
  res.render('index',{
    messages
  });
  
});

app.get('/about', (req, res) => {
  res.render('about');
  
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
  
});

app.post('/message', async (req, res) => {
  await Message.create(req.body)
  res.redirect('/')
});











//Public klasrümüzü uygulamamıza kaydetmiş olduk.
const port = 3000;

app.listen(port, () => {});
