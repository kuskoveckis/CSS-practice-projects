/* Hamburger menu change toggle */
window.onload = function () {
    'use strict';
    var menu = document.getElementById('menuIcon');

    menu.addEventListener('click', function myFunction() {
        menu.classList.toggle("change");
    });
};