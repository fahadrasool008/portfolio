let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');
let menuBtn = document.querySelector('nav span i');
let navUL = document.querySelector('.bottom-nav');
let li = document.querySelectorAll('nav ul li');




window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
                menuBtn.classList.remove('bx-x');
                navUL.classList.remove('active-nav');
            });
        }
    });
};

menuBtn.onclick = () => {
        menuBtn.classList.toggle('bx-x');
        navUL.classList.toggle('active-nav');
};
