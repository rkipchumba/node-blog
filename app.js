const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog')


// express app
const app = express()

// connect to mongoDB
const dbURI = 'mongodb+srv://Rodgers-Blog:Spainfab92@nodetuts.ehru1zt.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then((result) => {
    console.log('Connected to MongoDB');
    app.listen(3000);
  })
  .catch((err) => console.log(err));


// register view engines
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about my new blog',
    body: 'More about my blog'
  });

  blog.save()
    .then((result) => {
      console.log('Blog saved:', result);
      res.send(result);
    })
    .catch((err) => {
      console.log('Error saving blog:', err);
      res.status(500).send('Internal Server Error');
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})


app.get('/single-blog', (req, res) => {
  Blog.findById('65646764c399f9756ae10e4f')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/',  (req, res) => {
  const blogs = [
    {title: 'Kev says something', snippet: 'Giggdy Giggdy Giggdy '},
    {title: 'Kev says something', snippet: 'Giggdy Giggdy Giggdy '},
    {title: 'Kev says something', snippet: 'Giggdy Giggdy Giggdy '}
  ]
  res.render('index', { title: "Home", blogs })
  })

app.get('/about',  (req, res) => {
  // res.send('<h1>About page</h1>')
  res.render('about', { title: "About" })
})

  // redirects
app.get('/blogs/create',  (req, res) => {
  res.render('create', { title: "Create-Blog" });
})

// 404 page
app.use((req, res) => {
  res.status(404).render( '404', { title: "404" })
})