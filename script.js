// Function for showing/hiding login form
function showLogin() {
    document.getElementById('login-form').classList.toggle('hidden');
}

// Placeholder for login action
function login() {
    alert("Login feature will be implemented soon!");
}

// Dropdown logic to toggle dropdown menu visibility for both desktop and mobile versions
document.querySelectorAll('.dropbtn, .dropbtn-phone').forEach(function(dropdownBtn) {
    dropdownBtn.addEventListener('click', function() {
        var dropdownContent = dropdownBtn.nextElementSibling;
     //   var dropdownContent-phone = dropdownBtn.nextElementSibling;
        // Toggle 'show' class to display or hide dropdown content
        dropdownContent.parentElement.classList.toggle('show');
    });
});
