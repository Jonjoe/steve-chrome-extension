var orchestra = [];
var current_audio_index = 1;

function rng(min, max) {
		return parseInt(Math.random() * (max - min) + min);
}

var soundeffect = function() {
	this.audio = new Audio();
	this.audio.src = 'audio/steve' + rng(1,9)   + '.wav';

	this.start = function() {
		this.audio.play();
	};

};

function release() {
	var a = new soundeffect();
	orchestra.push(a);
	a.audio.onended = function() {
		orchestra.splice(0,1);
	};
	a.start();
}

chrome.browserAction.onClicked.addListener(release);
