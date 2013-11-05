var lastSelected;
var loaded = false;
function activate(activeElement) {
	var list = document.getElementsByTagName('nav')[0].getElementsByTagName('li');
	for(var i = 1; i < list.length; i++) {
		list[i].classList.remove('active');
	}
	activeElement.className = 'active';
	animateSection(activeElement.getElementsByTagName('a')[0].hash.substring(1));
}
function load() {
	var hash = window.location.hash;
	var list = document.getElementsByTagName('nav')[0].getElementsByTagName('li');
	for(var i = 1; i < list.length; i++) {
		if(list[i].getElementsByTagName('a')[0].hash == hash) {
			list[i].className = 'active';
		} else {
			list[i].classList.remove('active');
		}
	}
	if(document.getElementById(hash.substring(1))) {
		animateSection(hash.substring(1));
	}
	loaded = true;
}
function scrolling() {
	if(loaded) {
		lastSelected.classList.remove('selected');
		lastSelected.classList.remove('autopad');
		lastSelected.style.transition = 'padding-top 2s ease, padding-bottom 2s ease';
	}
}
function animateSection(section) {
	if(lastSelected) {
		lastSelected.classList.remove('selected');
		lastSelected.classList.remove('autopad');
		lastSelected.removeAttribute("style");
	}
	lastSelected = document.getElementById(section).parentNode;
	calcPadding();
	lastSelected.className = 'selected autopad';
}
function calcPadding() {
	var padding = String((lastSelected.parentNode.parentNode.offsetHeight - (lastSelected.offsetHeight)) / 3) + "px";
	padding = (parseFloat(padding) < 0) ? '0' : padding;
	if (document.getElementsByTagName('style')[0]) {
		document.getElementsByTagName('style')[0].innerHTML = '.autopad { padding-top: ' + padding + ' !important; }';
	} else {
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '.autopad { padding-top: ' + padding + ' !important; }';
		document.getElementsByTagName('head')[0].appendChild(style);
	}
}