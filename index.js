const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

const app = express();
const hbs = require("hbs");
const Post = require("./src/models/Posts");
require("dotenv").config();

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/SimpleBloggingApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ Connected to local MongoDB"))
  .catch(err => console.error("❌ Connection error:", err));


  app.post('/delete-all', async (req, res) => {
    try {
      await Post.deleteMany({}); // Deletes all documents in the Post collection
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Failed to delete all posts.');
    }
});

app.get('/', async (req, res) => {
    const posts = await Post.find().sort({date: -1}).lean();
    res.render('page', {posts});
})

app.post('/submit', async(req, res) => {
    const {userTag, message} = req.body;
    console.log('Form Data:', req.body); 

    await Post.create({
        User: userTag,
        Post: message,
        Date: new Date()
    })

    res.redirect('/');
})


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Listening to port 3000");
});

