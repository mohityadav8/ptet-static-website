document.addEventListener("DOMContentLoaded", () => {

    fetch("/components/auth-popup.html")
        .then(res => res.text())
        .then(data => {
            const container = document.getElementById("auth-popup-placeholder");
            if(container){
                container.innerHTML = data;
            }
        });

});

// SHOW POPUP
function showAuthPopup(){
    const popup = document.getElementById("authPopup");
    if(popup){
        popup.style.display = "flex";
    }
}

// HIDE POPUP
function hideAuthPopup(){
    const popup = document.getElementById("authPopup");
    if(popup){
        popup.style.display = "none";
    }
}

// EVENTS
document.addEventListener("click", function(e){

    if(e.target.id === "authPopupClose"){
        hideAuthPopup();
    }

    const overlay = document.getElementById("authPopup");
    if(e.target === overlay){
        hideAuthPopup();
    }

});

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        hideAuthPopup();
    }
});