document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    if (!hamburger || !navbar) return;

    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navbar.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });

});