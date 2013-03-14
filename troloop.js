var  context = new webkitAudioContext()
,    fs = require('fs')
,    trolowave = fs.readFileSync(__dirname + '/trololo.wav', 'base64')
,    b2b = require('./base2binary.js')
;

module.exports = function(context){
	
	if(!context) context = new webkitAudioContext();
	
	var source = context.createBufferSource();

	source.loop = true;
	
	var tbuff = b2b.decode(trolowave);

	var buffer = context.createBuffer(tbuff.buffer, true)
	
	source.buffer = buffer;
	
	return source
	
}



