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

        window.addEventListener("scroll", () => {

            if (window.scrollY > 200) {
                scrollBtn.classList.add("show");
            } else {
                scrollBtn.classList.remove("show");
            }

        });

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* SCROLL REVEAL ANIMATION */

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll(){

        const windowHeight = window.innerHeight;

        reveals.forEach(section => {

            const sectionTop = section.getBoundingClientRect().top;

            if(sectionTop < windowHeight - 100){
                section.classList.add("active");
            }

        });

    }

    // run once on load
    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);


    /* AUTO SCROLL REVIEWS (WITH PAUSE ON HOVER) */

    const reviewsContainer = document.getElementById("reviews");

    if (reviewsContainer) {

        let scrollAmount = 0;
        let interval;

        function startScroll(){
            interval = setInterval(() => {

                scrollAmount += 1;

                if (scrollAmount >= reviewsContainer.scrollWidth - reviewsContainer.clientWidth) {
                    scrollAmount = 0;
                }

                reviewsContainer.scrollTo({
                    left: scrollAmount,
                    behavior: "smooth"
                });

            }, 30);
        }

        function stopScroll(){
            clearInterval(interval);
        }

        reviewsContainer.addEventListener("mouseenter", stopScroll);
        reviewsContainer.addEventListener("mouseleave", startScroll);

        startScroll();

    }

    /* FAQ ACCORDION (SINGLE OPEN + ANIMATION) */

        const faqItems = document.querySelectorAll(".faq-item");
        
        faqItems.forEach(item => {
        
            const btn = item.querySelector(".faq-question");
        
            btn.addEventListener("click", () => {
            
                // close others
                faqItems.forEach(i => {
                    if(i !== item){
                        i.classList.remove("active");
                    }
                });
            
                // toggle current
                item.classList.toggle("active");
            
            });
        
        });
});

// FINAL HYBRID NAVIGATION

document.addEventListener("click", function(e){

    const link = e.target.closest("a[data-section]");
    if(!link) return;

    // ✅ Allow browser default for new tab / middle click
    if(e.ctrlKey || e.metaKey || e.button === 1){
        return;
    }

    // ✅ Only override normal click
    e.preventDefault();

    const sectionId = link.getAttribute("data-section");
    const section = document.getElementById(sectionId);

    if(section){
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

});