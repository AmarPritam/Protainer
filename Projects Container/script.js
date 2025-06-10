const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


function scrollToPage(target) {
    const activeElement = document.getElementById(target);
    activeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
};