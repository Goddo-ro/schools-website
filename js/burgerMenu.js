let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let main = document.querySelector('.main');
menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    main.classList.toggle('active');
    if (main.classList.contains('active')) {
        main.style.transform = 'translateX(320px)';
    } else {
        main.style.transform = 'translateX(0)';
    }
})

const title = document.querySelector(".sidenav-title")

window.addEventListener('resize', function(event) {
    menuBtn.classList.remove('active');
	menu.classList.remove('active');
    main.classList.remove('active');
    main.style.transform = 'translateX(0)';
}, true);