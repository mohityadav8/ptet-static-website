document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    hamburger?.addEventListener("click", () => {
        const isMenuOpen = navbar.style.display === "flex";
        navbar.style.display = isMenuOpen ? "none" : "flex";
    });

    // Close the menu if clicked anywhere outside
    document.addEventListener("click", (event) => {
        if (!hamburger.contains(event.target) && !navbar.contains(event.target)) {
            navbar.style.display = "none";
        }
    });
});
