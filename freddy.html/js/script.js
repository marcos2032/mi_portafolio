
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    var nav = document.querySelector('header nav');
    if (window.scrollY > 100) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});