var echoObject = {
	echo : function(str, callback) {
	    cordova.exec(callback, function(err) {
	        callback('Nothing to echo.');
	    }, "Echo", "echo", [str]);
	}
}

module.exports = echoObject;