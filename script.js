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
// ----------- Profile Section -------------
// Profile data
let userProfile = {
    username: "JohnDoe",
    height: "175 cm",
    weight: "70 kg"
};

// Function to display user profile
function displayUserProfile() {
    document.getElementById('profile-username').innerText = `Username: ${userProfile.username}`;
    document.getElementById('profile-height').innerText = `Height: ${userProfile.height}`;
    document.getElementById('profile-weight').innerText = `Weight: ${userProfile.weight}`;
}

// Function to open the edit form
function openEditProfile() {
    document.getElementById('edit-profile-form').style.display = 'block';
    document.getElementById('edit-username').value = userProfile.username;
    document.getElementById('edit-height').value = userProfile.height;
    document.getElementById('edit-weight').value = userProfile.weight;
}

// Function to save the edited profile
function saveProfile() {
    userProfile.username = document.getElementById('edit-username').value;
    userProfile.height = document.getElementById('edit-height').value;
    userProfile.weight = document.getElementById('edit-weight').value;

    // Update the profile view
    displayUserProfile();

    // Hide the edit form
    document.getElementById('edit-profile-form').style.display = 'none';
}

// Load profile on page load
window.addEventListener('DOMContentLoaded', function() {
    displayUserProfile();

    // Event listeners
    document.getElementById('edit-profile-btn').addEventListener('click', openEditProfile);
    document.getElementById('save-profile').addEventListener('click', saveProfile);
});
