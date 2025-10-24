// Toggle between login and signup
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const toggleSignup = document.getElementById("toggle-signup");
const toggleLogin = document.getElementById("toggle-login");
const formTitle = document.getElementById("form-title");

toggleSignup.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "flex";
    formTitle.innerText = "Farmer Signup";
});

toggleLogin.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "flex";
    formTitle.innerText = "Farmer Login";
});

// Signup form submit
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    if(password !== confirmPassword){
        alert("Passwords do not match!");
        return;
    }

    // Save user in localStorage (temporary, not secure)
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Signup Successful! Please login.");
    signupForm.reset();
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
    formTitle.innerText = "Farmer Login";
});

// Login form submit
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedUser = localStorage.getItem(email);
    if(!storedUser){
        alert("No user found. Please signup first.");
        return;
    }

    const user = JSON.parse(storedUser);
    if(user.password === password){
        alert("Login Successful!");
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        alert("Incorrect password!");
    }
});
