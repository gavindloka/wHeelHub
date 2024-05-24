    document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const male = document.getElementById('male').checked;
    const female = document.getElementById('female').checked;
    const birthday = document.getElementById('birthday').value;
    const terms = document.getElementById('terms').checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Validate form
    if (!username) {
        alert('Username is required');
        return;
    }

    if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!password || !passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter and one number');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!male && !female) {
        alert('Gender is required');
        return;
    }

    if (!birthday) {
        alert('Date of Birth is required');
        return;
    }

    const birthDate = new Date(birthday);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 18) {
        alert('You must be at least 18 years old');
        return;
    }

    if (!terms) {
        alert('You must agree with the terms and conditions');
        return;
    }

    alert('Form submitted successfully');
});
