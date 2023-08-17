// Login form submit event
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
  
    // Perform authentication with Node.js (backend logic)
    // You can make an HTTP request to your Node.js server to authenticate the user credentials
    // Example: fetch('/login', { method: 'POST', body: { username, password }})
    // On successful authentication, redirect the user to the desired page
  });
  
  // Signup form submit event
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
  
    // Perform user registration with Node.js (backend logic)
    // You can make an HTTP request to your Node.js server to create a new user account
    // Example: fetch('/signup', { method: 'POST', body: { username, password }})
    // On successful registration, redirect the user to the login page or desired page
  });