window.addEventListener("load", function(e) {
    const sidenav = document.querySelector('.sidenav');
    const links = sidenav.querySelectorAll('.sidenav-link');

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active-link');
        console.log(links[i].textContent);
        console.log(document.title);
        if (links[i].textContent.trim() == this.document.title) {
            links[i].classList.add('active-link');
        }
    }
});