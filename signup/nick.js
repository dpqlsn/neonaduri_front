const nicknameInput = document.getElementById('nickname');
const closeButton = document.getElementById('close');
const loadingScreen = document.getElementById('loadingScreen');

nicknameInput.addEventListener('input', function() {
    if (nicknameInput.value.trim() !== '') {
        closeButton.disabled = false;
        closeButton.style.backgroundColor = '#9747FF';
        closeButton.style.cursor = 'pointer';
    } else {
        closeButton.disabled = true;
        closeButton.style.backgroundColor = '#CCCCCC';
        closeButton.style.cursor = 'not-allowed';
    }
});

closeButton.disabled = true;
closeButton.style.backgroundColor = '#CCCCCC';
closeButton.style.cursor = 'not-allowed';

closeButton.addEventListener('click', function() {
    if (nicknameInput.value.trim() !== '') {
        loadingScreen.style.display = 'flex';

        setTimeout(function() {
            window.location.href = '///Users/dpqls/Desktop/gomdoliro_pj/login/index.html';
        }, 1000);
    }
});
