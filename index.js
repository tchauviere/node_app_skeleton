var socket = require('socket.io');
var express = require('express');
var app = express();
var swig = require('swig');
var path = require('path');
var http = require('http');
var server = http.createServer(app);
var io = socket.listen(server);
var minify = require('express-minify');

// Conf
server.listen(3000);
console.log('Application Started on http://localhost:'+server.address().port);
app.use('/media', express.static(path.join(__dirname, 'public')));
// CSS/JS Minifier
app.use(minify({
    js_match: /javascript/,
    css_match: /css/,
    cache: path.join(__dirname, 'cache')
}));
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
  res.render('content/home', { server_address: 'http://localhost:'+server.address().port,
                               socket_io_lib: '/socket.io/socket.io.js'
                            });
});


/* Socket.io interactions CLIENT parts*/
io.on('connection', function (socket) {

    console.log(Date.now()+" Request arrived");
    /* Join BO room to get updates on clients
    socket.on('join_bo', function(data){
        if (data.token != 'undefined')
        {
            var cursor = bo_client_list.indexOf(data.token);
            if (cursor == -1)
            {
                console.log('New Merchant');
                bo_client_list.push(data.token);
                socket.join('bo');
            }
            io.to('dashboard').emit('dashboard_update', { total_bo: bo_client_list.length });
        }
        else
            console.log('ERR: No token received');

    });

    socket.on('leave_bo', function(data){
        if (data.token != 'undefined')
        {
            var cursor = bo_client_list.indexOf(data.token);
            if (cursor != -1)
            {
                console.log('Merchant left');
                bo_client_list.splice(cursor, 1);
                socket.leave('bo');
                socket.disconnect();
                io.to('dashboard').emit('dashboard_update', { total_bo: bo_client_list.length });

            }
            else
                console.log('Token not found in existing list');
        }
        else
            console.error('ERR: No token received');

    });*/

    /* JOIN DASHBOARD FOR LIVESTATS
    socket.on('join_dashboard', function(data, callback){
        socket.join('dashboard');
        io.to('dashboard').emit('dashboard_update', { total_bo: bo_client_list.length });
    });*/

});



