# troloop

An html5 Web Audio bufferSource Node, for testing purposes. The node will play a 17 second track converted from a base64 encoded wav file (included).

For use with [Browserify](http://github.com/substack/browserify) 

## usage

```js
var audioContext = new webkitAudioContext();
var troloop = require('troloop');

audioSourceBuffer = troloop(context)

audioSourceBuffer.start(0)
```

or use it with [webaudio](http://github.com/NHQ/webaudio)

```js
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
```