// Get the elements
const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

// Handle login button click
loginBtn.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (just for demonstration purposes)
    if (email === "admin@factory.com" && password === "password123") {
        // Hide login form, show dashboard
        loginForm.style.display = 'none';
        dashboard.style.display = 'block';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Handle logout button click
logoutBtn.addEventListener('click', function () {
    // Show login form, hide dashboard
    loginForm.style.display = 'block';
    dashboard.style.display = 'none';

    // Clear input fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
