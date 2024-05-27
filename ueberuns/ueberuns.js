document.addEventListener('DOMContentLoaded', function() {
    var burgerButton = document.getElementById('burgerbutton');
    var menu = document.getElementById('menu');

    burgerButton.addEventListener('click', function(event) {
        event.stopPropagation();
        menu.classList.toggle('show-menu');  // Einfaches Umschalten der Sichtbarkeit
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && menu.classList.contains('show-menu')) {
            menu.classList.remove('show-menu');
        }
    });
});

