var _ = require("underscore");
module.exports = {
	name: "Core",
	extend: function(child) {
		return _.extend({}, this, child);
	},
	run: function(req, res, next) {

	}
}