
const registerBtn = document.getElementById('register-btn');
const registerForm = document.querySelector('.register-form');

registerBtn.addEventListener('click', () => {
    registerForm.classList.toggle('show');
});
