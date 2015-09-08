var  fs = require('fs')
var  trolowave = fs.readFileSync(__dirname + '/trololo.wav', 'base64')
var  b2a = require('./base64-arraybuffer')
var filebuf = require('jsynth-file-sample')

module.exports = function(context, cb){
	
  filebuf(context, b2a.decode(trolowave, function(e, node){
    cb(e, node)
  })) 

}



