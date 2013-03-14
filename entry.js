// this is an entry file for use with *browserify* v.2 http://github.com/substack/browserify
// browserify is the breeder's choice for front-end web development the Node.js way

// this repo can also be used with OPA
// a web dev heloper tool http://github.com/NHQ/opa
// npm install -g browserify opa
// cd [this repo directory]
// opa -n

var webaudio = require('webaudio');
var audioContext = new webkitAudioContext();
var troloop = require('./');
var amod = require('amod');
var audioSourceBuffer = troloop(audioContext)

function wubwub(time, i, sample){
	return sample * amod(.5, .4, time, .5)
}

var wubNode = webaudio(audioContext, wubwub);

audioSourceBuffer.connect(wubNode)

wubNode.connect(audioContext.destination)

audioSourceBuffer.start(0)