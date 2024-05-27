document.addEventListener("DOMContentLoaded", function() {
    // Berechne die Gesamtdauer der Animation für "action"
    const lastH1 = document.querySelector(".action h1:nth-child(4)");
    const animationDuration = 1.5 + 1; // 1.5s delay + 1s duration

    // Warte, bis die Animation von "action" beendet ist
    setTimeout(function() {
        document.querySelector(".bilderuns").style.opacity = 1; // Bilder einblenden
    }, animationDuration * 1000);
});