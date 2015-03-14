// Main controller
var CoreController = require('./Core');
var Config = require('../config/Config');

module.exports = CoreController.extend({
		name: "Main",
		run: function(req, res, next) {
			res.render('content/home', {
				server_address: 'http://localhost:'+Config.__port,
				socket_io_lib: '/socket.io/socket.io.js'
			});
		}
});