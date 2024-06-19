// Show products section when button is clicked
function showProducts() {
    document.getElementById("products").style.display = "block";
}

// Send email when form is submitted
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email")
    
// Send email when form is submitted
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
}
    // Send email using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert("Email sent successfully!");
        }
    };
    xhr.send("name=" + name + "&email=" + email + "&message=" + message);
}
