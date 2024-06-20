function subscribe() {
    var email = document.getElementById("email-input").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    alert("Thank you for subscribing! We will send you updates.");
}