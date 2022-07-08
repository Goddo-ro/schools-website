let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let main = document.querySelector('.main');
let footerInfo = document.querySelector('.footer-info');
menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    main.classList.toggle('active');
    if (main.classList.contains('active')) {
        main.style.transform = 'translateX(32%)';
        footerInfo.style.transform = 'translateX(-35%)'
        footerInfo.style.width = '118%';
    } else {
        main.style.transform = 'translateX(0)';
        footerInfo.style.transform = 'translateX(-5%)'
        footerInfo.style.width = '112%';
    }
})