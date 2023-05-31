// 🔵🔵🔵🔵toggle icon navbar🔵🔵🔵🔵
let menuIcon = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('fa-regular');
	navbar.classList.toggle('active');
};

// 🔵🔵🔵🔵dark🔵🔵🔵🔵
const nightButton = document.querySelector('.button');
nightButton.addEventListener('click', () => {
	nightButton.querySelector('i').classList.toggle('fa-moon');
	nightButton.querySelector('i').classList.toggle('fa-sun');
	document.body.classList.toggle('dark');

	let set;
	if (document.body.classList.contains('dark')) {
		console.log('dark mode');
		set = 'DARK';
	} else {
		console.log('light mode');
		set = 'LIGHT';
	}
	localStorage.setItem('ModeTheme', JSON.stringify(set));
});

let GetMode = JSON.parse(localStorage.getItem('ModeTheme'));
if (GetMode === 'DARK') {
	document.body.classList = 'dark';
}

window.addEventListener('load', () => {
	if (document.body.classList.contains('dark')) {
		nightButton.querySelector('i').classList.add('fa-moon');
	} else {
		nightButton.querySelector('i').classList.add('fa-sun');
	}
});

// 🔵🔵🔵🔵scroll sections active link🔵🔵🔵🔵
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navLinks.forEach((links) => {
				links.classList.remove('active');
				document
					.querySelector('header nav a[href*=' + id + ']')
					.classList.add('active');
			});
		}
	});

	// 🔵🔵sticky navbar🔵🔵
	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 100);

	// 🔵🔵remove toggle icon and navbar when click navbar link (scroll)🔵🔵
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

// 🔵🔵🔵🔵add blur to header🔵🔵🔵🔵
const blurHeader = () => {
	const header = document.getElementById('header');
	this.scrollY >= 50
		? header.classList.add('blur-header')
		: header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

// 🔵🔵🔵🔵scroll reveal🔵🔵🔵🔵
ScrollReveal({
	// reset: true, //🔻🔺🔻OPTIONAL🔻🔺🔻
	distance: '80px',
	duration: 2000,
	delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
	'.home-img, .skills-container, .portfolio-box, .contact form',
	{ origin: 'bottom' }
);
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// 🔵🔵🔵🔵typed js🔵🔵🔵🔵
const typed = new Typed('.multiple-text', {
	strings: ['Frontend Dev'],
	typeSpeed: 150,
	backSpeed: 50,
	backDelay: 1000,
	loop: true,
});
