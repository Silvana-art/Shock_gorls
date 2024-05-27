document.addEventListener('DOMContentLoaded', function() {
    var burgerbutton = document.getElementById('burgerbutton');
    var menu = document.getElementById('menu');

    burgerbutton.addEventListener('click', function(event) {
        // Verhindert das Bubbling des Events, falls innerhalb des Menüs geklickt wird
        event.stopPropagation();
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Schließt das Menü, wenn irgendwo außerhalb des Menüs geklickt wird
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    });
});
