const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const navLink = document.querySelectorAll('.nav__link');
const footer = document.querySelector('.footer');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	if (navMobile.classList.contains('nav-mobile--active')) {
		footer.style.display = 'none';
	} else {
		footer.style.display = 'block';
	}

	navLink.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
            navBtn.classList.remove('is-active')
		});
	});
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
