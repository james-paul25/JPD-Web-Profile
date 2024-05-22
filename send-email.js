function sendMail(event){
    event.preventDefault();

    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_8tn5kgy", "template_3iyknmd", params)
    .then(function(response){
        alert("Email sent successfully!");
    }). catch(function(error){
            alert("Error sending message!");
    });
}
