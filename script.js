document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');
    const togglePassword = document.getElementById('togglePassword');
    
    const usernameFeedback = document.getElementById('usernameFeedback');
    const emailFeedback = document.getElementById('emailFeedback');
    const passwordFeedback = document.getElementById('passwordFeedback');

    // Function to check username availability
    const checkUsernameAvailability = () => {
        const usernameValue = username.value.trim();
        if (usernameValue.length < 3) {
            usernameFeedback.textContent = 'Username must be at least 3 characters';
            usernameFeedback.style.display = 'block';
            return false;
        }
        // Assume we check the username availability via an API
        usernameFeedback.style.display = 'none';
        return true;
    };

    // Function to validate email
    const validateEmail = () => {
        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            emailFeedback.textContent = 'Please enter a valid email address';
            emailFeedback.style.display = 'block';
            return false;
        }
        emailFeedback.style.display = 'none';
        return true;
    };

    // Function to evaluate password strength
    const evaluatePasswordStrength = () => {
        const passwordValue = password.value.trim();
        let strength = 'Weak';
        let color = 'red';

        if (passwordValue.length >= 8) {
            strength = 'Medium';
            color = 'orange';
        }
        if (passwordValue.length >= 12) {
            strength = 'Strong';
            color = 'green';
        }
        
        passwordStrength.textContent = `Password Strength: ${strength}`;
        passwordStrength.style.color = color;
    };

    // Toggle password visibility
    togglePassword.addEventListener('change', () => {
        password.type = togglePassword.checked ? 'text' : 'password';
    });

    // Real-time validation
    username.addEventListener('input', checkUsernameAvailability);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', evaluatePasswordStrength);

    // Form submission handling
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const isUsernameValid = checkUsernameAvailability();
        const isEmailValid = validateEmail();

        if (isUsernameValid && isEmailValid) {
            alert('Registration successful!');
            // Submit the form data via AJAX or other methods
        } else {
            alert('Please correct the errors in the form');
        }
    });
});
