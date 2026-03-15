document.addEventListener("DOMContentLoaded", () => {

    /* NAVBAR TOGGLE */

    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    if (hamburger && navbar) {

        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            navbar.classList.toggle("active");
        });

        document.addEventListener("click", (event) => {
            if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
                navbar.classList.remove("active");
            }
        });

    }

    /* SCROLL TO TOP */

    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});