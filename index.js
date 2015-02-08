var express = require('express');
var app = express();
var swig = require('swig');
var path = require('path');

app.use('/media', express.static(path.join(__dirname, 'public')));

// Make express aut run Swig Templating
app.engine('tpl', swig.renderFile);
app.set('view engine', 'tpl');
app.set('views', path.join(__dirname, 'views'));
// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!


// Routing
app.get('/', function (req, res) {
  res.render('content/home', { /* template locals context */ });
});


// Conf
app.listen(3000);
console.log('Application Started on http://localhost:3000/');
