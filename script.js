document.body.style.backgroundImage = "url('4722382.webp')";
// Login and Signup Toggle
document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
});

document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Login Successful!");
    window.location.href = "dashboard.html";
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Signup Successful! You can now log in.");
});

// Search Function
document.getElementById('search').addEventListener('keyup', function() {
    let searchText = this.value.toLowerCase();
    let exercises = document.querySelectorAll('.exercise-card');

    exercises.forEach(exercise => {
        let text = exercise.innerText.toLowerCase();
        if (text.includes(searchText)) {
            exercise.style.display = "flex";
        } else {
            exercise.style.display = "none";
        }
    });
});