document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        var formData = new FormData(form);

        // Create and configure the AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "send_email.php"); // Replace "send_email.php" with your server-side script URL
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        // Define what happens on successful data submission
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Reset the form after successful submission
                form.reset();
                alert("Message sent successfully!");
            } else {
                alert("An error occurred. Please try again later.");
            }
        };

        // Define what happens in case of error
        xhr.onerror = function() {
            alert("An error occurred. Please try again later.");
        };

        // Send the form data
        xhr.send(new URLSearchParams(formData));
    });
});