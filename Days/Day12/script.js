// Add JavaScript code here
const button = document.querySelector(".request-reset-link");
button.addEventListener("click", () => {
    if (button.classList.contains('clicked-button')) {
        alert("You already requested a reset link.");
    } else {
        button.textContent = "Requested Reset Link";
        button.classList.remove('request-reset-link');
        button.classList.add('clicked-button');
    }
});
