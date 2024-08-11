const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pw');
const passwordConfirmInput = document.getElementById('pwConfirm');
const signupButton = document.getElementById('open');
const successModal = document.getElementById('successModal');
const errorModal = document.getElementById('errorModal');
const closeSuccess = document.getElementById('closeSuccess');
const closeError = document.getElementById('closeError');
const signupForm = document.getElementById('signupForm');

function updateButtonState() {
    const allFieldsFilled = emailInput.value.trim() !== '' &&
                            passwordInput.value.trim() !== '' &&
                            passwordConfirmInput.value.trim() !== '';

    if (allFieldsFilled) {
        signupButton.classList.add('active');
        signupButton.disabled = false;
    } else {
        signupButton.classList.remove('active');
        signupButton.disabled = true;
    }
}

function showModal(modal) {
    modal.classList.add('on');
}

function hideModal(modal) {
    modal.classList.remove('on');
}

function handleFormSubmit(event) {
    event.preventDefault();

    if (passwordInput.value !== passwordConfirmInput.value) {
        showModal(errorModal);
    } else {
        showModal(successModal);
    }
}

emailInput.addEventListener('input', updateButtonState);
passwordInput.addEventListener('input', updateButtonState);
passwordConfirmInput.addEventListener('input', updateButtonState);

signupForm.addEventListener('submit', handleFormSubmit);

closeSuccess.addEventListener('click', () => {
    hideModal(successModal);
});

emailInput.addEventListener('input', updateButtonState);
passwordInput.addEventListener('input', updateButtonState);
passwordConfirmInput.addEventListener('input', updateButtonState);

signupForm.addEventListener('submit', handleFormSubmit);

closeError.addEventListener('click', () => {
    hideModal(errorModal);
});

document.querySelector('[value="로그인하기"]').addEventListener('click', function() {
    window.location.href = 'login/index.html';
});