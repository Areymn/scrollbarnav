window.addEventListener('scroll', () => {
	document.getElementById('navlist').style.top =
		document.documentElement.scrollTop > 20 ? '0' : '-60px';
});