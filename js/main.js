var lastSelected;
var loaded = false;
function activate(t) {
	var menu = document.getElementsByTagName('nav')[0];
	var list = menu.getElementsByTagName('li');
	for(var i = 1; i < list.length; i++) {
		list[i].classList.remove('active');
	}
	t.className = 'active';
	if(lastSelected) {
		lastSelected.classList.remove('selected');
		lastSelected.removeAttribute("style");
	}
	lastSelected = document.getElementById(t.getElementsByTagName('a')[0].hash.substring(1)).parentNode;
	lastSelected.className = 'selected';
}
function load() {
	var hash = window.location.hash;
	var menu = document.getElementsByTagName('nav')[0];
	var list = menu.getElementsByTagName('li');
	for(var i = 1; i < list.length; i++) {
		if(list[i].getElementsByTagName('a')[0].hash == hash) {
			list[i].className = 'active';
		} else {
			list[i].classList.remove('active');
		}
	}
	if(document.getElementById(hash.substring(1))) {
		lastSelected = document.getElementById(hash.substring(1)).parentNode;
		lastSelected.className = 'selected';
		console.log('ok');
	}
	loaded = true;
}
function scrolling() {
	if(loaded) {
		lastSelected.classList.remove('selected');
		lastSelected.style.transition = 'padding-top 2s ease, padding-bottom 2s ease';
	}
}