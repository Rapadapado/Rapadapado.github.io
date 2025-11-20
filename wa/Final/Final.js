document.addEventListener('scroll', () => {
	const top = window.pageYOffset;
	const one = document.querySelector('.one'); 
	const two = document.querySelector('.two');
	const three = document.querySelector('.three');
	const four = document.querySelector('.four');
	const five = document.querySelector('.five');
	
	one.style.bottom = (-(top * 0.15) + 'px');
	two.style.bottom = (-(top * 0.2) + 'px');
	three.style.bottom = (-(top * 0.3) + 'px');
	four.style.bottom = (-(top * 0.4) + 'px');
	five.style.bottom = (-(top * 0.5) + 'px');
});