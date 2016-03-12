var orchestra = [];
var audio_files = 15;
var current_audio_index = 1;

var soundeffect = function() {
	this.audio = new Audio();
	this.audio.src = 'audio/alan' + current_audio_index   + '.wav';

	current_audio_index ++;
	if (current_audio_index == audio_files){
		current_audio_index = 1;
	}

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
