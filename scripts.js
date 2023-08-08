var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
}

function scrollTrigger(selector) {
	let els = document.querySelectorAll(selector)
	els = Array.from(els)
	els.forEach(el => {
		addObserver(el)
	})
}

new WOW().init();