function validateForm(event) {
    event.preventDefault();

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var validationMessage = document.getElementById("validationMessage");

    if (password === confirmPassword) {
        validationMessage.textContent = "Password Matched. Password validation Successful.";
        validationMessage.style.color = "green";
    } else {
        validationMessage.textContent = "Password didn't match. Password validation unsuccessful.";
        validationMessage.style.color = "red";
    }
}
