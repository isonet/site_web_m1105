var lastSelected;
var loaded = false;
function activate(t) {
	var menu = document.getElementsByTagName('nav')[0];
	var list = menu.getElementsByTagName('li');
	for(var i = 1; i < list.length; i++) {
		list[i].classList.remove('active');
	}
	t.className = 'active';
	lastSelected.classList.remove('selected');
	lastSelected = document.getElementById(t.getElementsByTagName('a')[0].hash.substring(1)).parentNode;
	lastSelected.className = 'selected';
}
function loading() {
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
	lastSelected = document.getElementById(hash.substring(1)).parentNode;
	lastSelected.className = 'selected';
	loaded = true;
}
function scrolling() {
	if(loaded) {
		lastSelected.classList.remove('selected');
	}
}