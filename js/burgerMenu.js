let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let main = document.querySelector('.main');
let header = document.querySelector('header');
menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    main.classList.toggle('active');
    if (main.classList.contains('active')) {
        main.style.transform = 'translateX(360px)';
        if (window.innerWidth > 735) {
            header.style.transform = 'translateX(360px)';
        }
        document.querySelector('.all-content-container').style.overflow = 'hidden';;
    } else {
        main.style.transform = 'translateX(0)';
        if (window.innerWidth > 735) {
            header.style.transform = 'translateX(0)';
        }
        document.querySelector('.all-content-container').style.overflow = 'scroll';
    }
})

const title = document.querySelector(".sidenav-title")

window.addEventListener('resize', function(event) {
    menuBtn.classList.remove('active');
	menu.classList.remove('active');
    main.classList.remove('active');
    main.style.transform = 'translateX(0)';
    header.style.transform = 'translateX(0)';
    document.querySelector('.all-content-container').style.overflow = 'scroll';
}, true);