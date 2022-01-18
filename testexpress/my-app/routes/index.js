var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', (req, res) => {
  res.render('register', { title: 'Express' })
})
router.get('/login', (req, res) => {
  res.render('login', { title: 'Express' })
})

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'Express',
    message: 'This is message sent from app.js',
    name: 'Tom'
  })
})

module.exports = router;
