// Waits for the HTML page to load completely
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    // Listens for a mouse click on the toggle button
    themeToggle.addEventListener("click", () => {
        // Toggles the dark-mode styling class on and off the body
        document.body.classList.toggle("dark-mode");

        // Dynamically updates the button text based on the mode
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Toggle Light Mode ☀️";
        } else {
            themeToggle.textContent = "Toggle Dark Mode 🌙";
        }
    });
});