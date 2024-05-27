document.addEventListener('DOMContentLoaded', function() {
    var burgerButton = document.getElementById('burgerbutton');
    var menu = document.getElementById('menu');

    burgerButton.addEventListener('click', function(event) {
        event.stopPropagation();
        menu.classList.toggle('show-menu');
    });

    document.addEventListener('click', function(event) {
        if (menu.classList.contains('show-menu') && !menu.contains(event.target)) {
            menu.classList.remove('show-menu');
        }
    });
});

