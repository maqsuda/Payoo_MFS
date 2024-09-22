document.getElementById('btn-add').addEventListener('click', function (event) {
    event.preventDefault();

    let amount = getInputFieldById('amount');
    const pinNumber = getInputFieldById('pin-number');
    let availableAmount = getTextFieldById('available-amount');

    console.log(pinNumber, availableAmount, amount);

    if (pinNumber == '1234') {
        let TotalAmount = availableAmount + amount;
        document.getElementById('available-amount').innerText = TotalAmount;
    }

});


document.getElementById('btn-cashout').addEventListener('click', function (event) {
    event.preventDefault();

    let amount = getInputFieldById('cashout-amount');
    const pinNumber = getInputFieldById('cashout-pin-number');
    let availableAmount = getTextFieldById('available-amount');

    console.log(amount, pinNumber, availableAmount);
    if (pinNumber == '1234') {
        let TotalAmount = availableAmount - amount;
        document.getElementById('available-amount').innerText = TotalAmount;
    }


});



document.getElementById('btn-addMoney').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('add-money-form').removeAttribute('hidden');
    document.getElementById('cash-out-form').setAttribute('hidden', true);
});

document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('cash-out-form').removeAttribute('hidden');
    document.getElementById('add-money-form').setAttribute('hidden', true);
});

