/**
 * Module dependencies
 */

/* HTTP Server */
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
/* Libs */
var socket = require('socket.io');
var swig = require('swig');
var path = require('path');
var uuid = require('uuid');
var io = socket.listen(server);
/* Middlewares */
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
/* Controllers */
var Main = require('./controllers/Main');
/* Config */
var Config = require('./config/Config');

/**
* Server configuration
*/
console.log('ENV',Config.__env);
console.log('LISTNING PORT', Config.__port);
console.log('EXPRESS CACHE', Config.__express_cache);
console.log('SWIG CACHE', Config.__swig_cache);
server.listen(Config.__port);
console.log('App started on http://localhost:'+Config.__port);
// Static content folder declaration
app.use('/media', express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
	extended: true
}));
// parse application/json
app.use(bodyParser.json());
app.use(session({
	genid: function(req) {
		return uuid.v4(); // use UUIDs for session IDs
	},
	secret: 'smithcraft',
	secure: true,
	resave: false,
	saveUninitialized: false
}));
// Make Express use Swig templating (with .tpl extensions)
app.engine('tpl', swig.renderFile);
app.set('view engine', 'tpl');
app.set('views', path.join(__dirname, 'views'));
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!
// Production uses Express caching system for Swig templates
app.set('view cache', Config.__express_cache);
// Force Swig to disable its own cache, we don't need since we use Express' one
swig.setDefaults({ cache: Config.__swig_cache });

/**
 * Routing declaration
 */
app.all('/', function (req, res, next) {
	Main.run(req, res, next);
  /**/
});

/**
 * WebSocket Server
 */
io.on('connection', function (socket) {

});
