// Load footer dynamically

fetch("/components/footer.html")
.then(response => response.text())
.then(data => {

  document.getElementById("footer-placeholder").innerHTML = data;

  // Newsletter form functionality

  const form = document.getElementById("newsletter-form");

  if(form){

    form.addEventListener("submit", function(e){

      e.preventDefault();

      const email = document.getElementById("newsletter-email").value;

      if(email.trim() === ""){
        alert("Please enter a valid email.");
        return;
      }

      alert("Thank you for subscribing!");

      form.reset();

    });

  }

});