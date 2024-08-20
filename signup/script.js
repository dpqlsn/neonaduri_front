const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pw');
const passwordConfirmInput = document.getElementById('pwConfirm');
const signupButton = document.getElementById('open');
const successModal = document.getElementById('successModal');
const errorModal = document.getElementById('errorModal');
const duplicateModal = document.getElementById('duplicateModal');
const closeSuccess = document.getElementById('closeSuccess');
const closeError = document.getElementById('closeError');
const closeDuplicate = document.getElementById('closeDuplicate');
const signupForm = document.getElementById('signupForm');

function updateButtonState() {
    const allFieldsFilled = emailInput.value.trim() !== '' &&
    passwordInput.value.trim() !== '' &&
    passwordConfirmInput.value.trim() !== '';
    signupButton.disabled = !allFieldsFilled;
    signupButton.classList.toggle('active', allFieldsFilled);
}

function showModal(modal) {
    modal.classList.add('on');
}

function hideModal(modal) {
    modal.classList.remove('on');
}

async function isEmailDuplicate(email) {
    try {
        const response = await fetch('/check-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        const result = await response.json();
        return result.isDuplicate;
    } catch (error) {
        console.error('Error checking email:', error);
        return false;
    }
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const email = emailInput.value.trim();
    const isDuplicate = await isEmailDuplicate(email);
    if (isDuplicate) {
        showModal(duplicateModal);
    }
    else if (passwordInput.value !== passwordConfirmInput.value) {
        showModal(errorModal);
    }
    else {
        showModal(successModal);
    }
}

emailInput.addEventListener('input', updateButtonState);
passwordInput.addEventListener('input', updateButtonState);
passwordConfirmInput.addEventListener('input', updateButtonState);
signupForm.addEventListener('submit', handleFormSubmit);
closeSuccess.addEventListener('click', () => hideModal(successModal));
closeError.addEventListener('click', () => hideModal(errorModal));
closeDuplicate.addEventListener('click', () => hideModal(duplicateModal));