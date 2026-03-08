document.addEventListener("DOMContentLoaded", function(){

    fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar-placeholder").innerHTML = data;

        const hamburger = document.getElementById("hamburger");
        const navbar = document.getElementById("navbar");

        if(hamburger){
            hamburger.addEventListener("click", function(){
                navbar.classList.toggle("active");
            });
        }

    });

});