validateForm = function() {
    var email = document.getElementById("email-input");
    var regex = /[a-zA-Z0-9.]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/;
    
    email.setCustomValidity("");
    
    if (!regex.test(email.value)) {
        email.setCustomValidity("Invalid field.");
        email.classList.add("incorrect");
        email.classList.remove("correct");
        return false;
    } 

    return true;
}