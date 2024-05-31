document.addEventListener('DOMContentLoaded', function() {
    var burgerButton = document.getElementById('burgerbutton');
    var menu = document.getElementById('menu');

    burgerButton.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.opacity = '0';
            setTimeout(() => {
                menu.style.display = 'none';
            }, 500);
        } else {
            menu.style.display = 'block';
            setTimeout(() => {
                menu.style.opacity = '1';
            }, 10);
        }
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    });
});


