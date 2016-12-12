// IE 9+

function docReady(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
function toggleClassName(el, className){
	if (el.classList) {
		el.classList.toggle(className);
	} else {
		var classes = el.className.split(' ');
		var existingIndex = classes.indexOf(className);

		if (existingIndex >= 0)
			classes.splice(existingIndex, 1);
		else
			classes.push(className);
			el.className = classes.join(' ');
	}
}

function animateBurger(){
	document.querySelector('.burger__wrap').addEventListener('click', function(){
		toggleClassName(this, 'open');
	});
}

docReady(animateBurger);