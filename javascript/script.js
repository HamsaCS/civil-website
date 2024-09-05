// script.js

// DOMContentLoaded event to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Example of a simple JavaScript function to validate the contact form
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields.");
            } else {
                alert("Thank you for contacting us, " + name + "!");
                contactForm.reset();
            }
        });
    }
});
