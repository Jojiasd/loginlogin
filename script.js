function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return false;
    }

    // Basic validation (example only)
    if (username.length < 5 || password.length < 6) {
        alert("Username must be at least 5 characters and password at least 6 characters.");
        return false;
    }

    // You can add more complex validation and backend integration here

    return true;
}

