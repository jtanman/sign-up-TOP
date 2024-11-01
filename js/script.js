document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('password-message');

    if (password !== confirmPassword || password === '' || confirmPassword === '') {
        document.getElementById('password').classList.add('invalid');
        document.getElementById('confirm-password').classList.add('invalid');
        message.classList.remove('hidden');
        message.classList.add('visible');
    } else {
        document.getElementById('password').classList.remove('invalid');
        document.getElementById('confirm-password').classList.remove('invalid');
        message.classList.remove('visible');
        message.classList.add('hidden');
    }
});

document.getElementById('phone').addEventListener('blur', function() {
    const phoneInput = document.getElementById('phone').value;
    const phonePattern = /^[0-9]*$/; // Allow empty values

    const message = document.getElementById('phone-message');
    const messageRow = document.getElementById('phone-message-row');
    if (phoneInput !== '' && !phonePattern.test(phoneInput)) {
        document.getElementById('phone').classList.add('invalid');
        message.classList.remove('hidden');
        message.classList.add('visible');
        messageRow.classList.remove('hidden');
        messageRow.classList.add('visible');
    } else {
        document.getElementById('phone').classList.remove('invalid');
        message.classList.remove('visible');
        message.classList.add('hidden');
        messageRow.classList.remove('visible');
        messageRow.classList.add('hidden');
    }
});