// Show a message without sending or storing feedback
const form = document.querySelector("#feedback-form");
const message = document.querySelector("#feedback-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent =
        "Thank you for trying the form. This is a practice website, so your feedback has not been sent or stored.";
});