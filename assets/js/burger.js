function toggleMenu() {
    const burgerMenu = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-list');

    burgerMenu.classList.toggle('active');
    menu.classList.toggle('show');
}
