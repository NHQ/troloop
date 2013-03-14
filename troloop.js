var  context = new webkitAudioContext()
,    fs = require('fs')
,    trolowave = fs.readFileSync('./trololo.wav', 'base64')
,    b2b = require('./base2binary.js')
;

module.exports = function(context){
	
	if(!context) context = new webkitAudioContext();
	
	var source = context.createBufferSource();

	source.loop = true;
	
	var tbuff = b2b.decode(trolowave);

	context.decodeAudioData(tbuff.buffer, function(buffer){

		source.buffer = buffer;

		var evt = new CustomEvent('waveReady', {bubbles: true, cancelable: true, detail : {source: source }});

	  window.dispatchEvent(evt);

	});
	
	return source
	
}



