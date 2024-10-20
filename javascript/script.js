// DOMContentLoaded event to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const contactForm = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById('thank-you-message');

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Create FormData object
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            }).then(() => {
                // Hide the form and show the thank you message
                contactForm.style.display = 'none';
                thankYouMessage.style.display = 'block';
            }).catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your form. Please try again later.');
            });
        });
    }
});

// Function to show the form again for another inquiry
function showForm() {
    const contactForm = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById('thank-you-message');

    // Show the form and hide the thank you message
    contactForm.style.display = 'block';
    thankYouMessage.style.display = 'none';

    // Clear the form fields
    contactForm.reset();
}
