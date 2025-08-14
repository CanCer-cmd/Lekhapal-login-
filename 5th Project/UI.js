const container= document.querySelector('.container');
const registerBtn= document.querySelector('.register-btn');
const loginBtn= document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

function validateRegisterForm(event) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorBox = document.getElementById('error-message');

        errorBox.textContent = '';

        if (password.length < 8) {
          errorBox.textContent = "Password must be at least 8 characters long.";
          event.preventDefault();
          return false;
        }

        if (password !== confirmPassword) {
          errorBox.textContent = "Passwords do not match.";
          event.preventDefault();
          return false;
        }

        return true; 
      }
