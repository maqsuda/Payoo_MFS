document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('Login Successful');
        window.location.href = 'addMoney.html';
    } else {
        alert('Try Again');
    }
});