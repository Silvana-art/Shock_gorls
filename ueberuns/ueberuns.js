document.addEventListener('DOMContentLoaded', function() {
    var burgerbutton = document.getElementById('burgerbutton');
    var menu = document.getElementById('menu');

    
    burgerbutton.addEventListener('click', function(event) {
        event.stopPropagation();
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });


    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    });
});
