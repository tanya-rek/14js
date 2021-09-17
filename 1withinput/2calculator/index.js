let firstNumber = 0;
let secondNumber = 0;

function getNumber() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
}

function calcSum() {
    getNumber();
    document.getElementById('result').value = +firstNumber + +secondNumber;
}

function calcDeduction() {
    getNumber();
    document.getElementById('result').value =(firstNumber - secondNumber);
}

function calcMultiplication() {
    getNumber();
    document.getElementById('result').value =(firstNumber * secondNumber);
}

function calcDivision() {
    getNumber();
    document.getElementById('result').value =(+firstNumber / +secondNumber);
}