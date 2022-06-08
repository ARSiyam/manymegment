document.getElementById('calculate-button').addEventListener('click', function () {
    totalexpens();
});
const totalexpens = () => {
    var error = document.getElementById('set-error');
    const incam = parseFloat(document.getElementById('income-input').value);
    const food = parseFloat(document.getElementById('food-input').value);
    const rent = parseFloat(document.getElementById('rent-input').value);
    const clothes = parseFloat(document.getElementById('clothes-input').value);
    const totalExpenses = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');
    const expens = (food + rent + clothes);
    const totalexpens = (incam - expens);
    if (food < 0 || rent < 0 || clothes < 0) {
        error.innerText = 'Please Enter Positive Value ,, Negative  Value Are Not Allowed';
    } else if (incam < expens) {
        error.innerText = 'You can not spend more than you earn';
    } else {
        totalExpenses.innerText = expens;
        balance.innerText = totalexpens;
        error.innerText = '';
    }
}
document.getElementById('save-button').addEventListener('click', function () {
    saving();
});
const saving = () => {
    var errotext = document.getElementById('set-error');
    const incam = parseFloat(document.getElementById('income-input').value);
    const savingInput = parseFloat(document.getElementById('persentage-input').value);
    const savingAmmountId = document.getElementById('saving-amount');
    const remingId = document.getElementById('reamaining-balance');
    const totalExpenses = parseFloat(document.getElementById('total-expenses').innerText);
    const balance = parseFloat(document.getElementById('balance').innerText);
    const savingAmmount = (incam / 100) * savingInput;
    if (savingAmmount < 0) {
        errotext.innerText = 'You can not spend more than you earn';
    } else if (savingAmmount > balance) {
        console.log(balance)
        errotext.innerText = "How do you spend it if you do not have money???? So there is no benefit in trying";
    } else {
        savingAmmountId.innerText = parseFloat(savingAmmount);
        const reamainingAmmount = incam - (totalExpenses + savingAmmount);
        remingId.innerText = reamainingAmmount;
        errotext.innerText = '';
    }
}
