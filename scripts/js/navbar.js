document.addEventListener("DOMContentLoaded", function () {

    fetch("/components/navbar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar-placeholder").innerHTML = data;

        const hamburger = document.getElementById("hamburger");
        const navbar = document.getElementById("navbar");

        if (hamburger) {
            hamburger.addEventListener("click", function () {
                navbar.classList.toggle("active");
            });
        }


        /* -------------------------------
           CHECK LOGIN STATE
        -------------------------------- */

        const loggedIn = localStorage.getItem("pte_user_logged_in");

        const authButtons = document.getElementById("auth-buttons");
        const userProfile = document.getElementById("user-profile");

        if (loggedIn && authButtons && userProfile) {

            authButtons.style.display = "none";
            userProfile.style.display = "flex";

            const userName = localStorage.getItem("pte_user_name");
            const userPhoto = localStorage.getItem("pte_user_photo");

            const nameElement = document.getElementById("user-name");
            const photoElement = document.getElementById("user-photo");

            if (userName && nameElement) {
                nameElement.textContent = userName;
            }

            if (userPhoto && photoElement) {
                photoElement.src = userPhoto;
            }

        }


        /* -------------------------------
           PROFILE DROPDOWN
        -------------------------------- */

        if (userProfile) {

            userProfile.addEventListener("click", function (e) {

                userProfile.classList.toggle("active");

                e.stopPropagation();

            });

        }

        // Close dropdown when clicking outside
        document.addEventListener("click", function () {

            if (userProfile) {
                userProfile.classList.remove("active");
            }

        });


        /* -------------------------------
           LOGOUT FUNCTION
        -------------------------------- */

        const logoutBtn = document.getElementById("logout-btn");

        if (logoutBtn) {

            logoutBtn.addEventListener("click", function () {

                if (typeof firebaseLogout === "function") {

                    firebaseLogout();

                } else {

                    // fallback logout

                    localStorage.removeItem("pte_user_logged_in");
                    localStorage.removeItem("pte_user_name");
                    localStorage.removeItem("pte_user_email");
                    localStorage.removeItem("pte_user_photo");

                    window.location.href = "/index.html";

                }

            });

        }

    });

});