document.addEventListener("DOMContentLoaded", function () {

    const isLoggedIn = localStorage.getItem("pte_user_logged_in");

    const protectedPages = [
        "preparation.html",
        "dashboard.html",
        "mock-test.html",
        "profile.html"
    ];

    const currentPage = window.location.pathname.split("/").pop();

    if (protectedPages.includes(currentPage) && !isLoggedIn) {

        showLoginPopup();

    }

});


function showLoginPopup() {

    const popup = document.createElement("div");

    popup.innerHTML = `
        <div class="auth-popup-overlay">
            <div class="auth-popup">

                <h3>Login Required</h3>

                <p>
                    You must login to access this feature.
                </p>

                <div class="auth-popup-actions">

                    <a href="/pages/login.html" class="popup-login-btn">
                        Login Now
                    </a>

                    <button class="popup-close-btn">
                        Cancel
                    </button>

                </div>

            </div>
        </div>
    `;

    document.body.appendChild(popup);

    document.querySelector(".popup-close-btn").onclick = () => {
        popup.remove();
    };

}