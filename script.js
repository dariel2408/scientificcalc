const operationSelect = document.getElementById('operation');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', calculate);

function calculate() {
    const operation = operationSelect.value;
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultParagraph.textContent = 'Invalid input';
        return;
    }

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultParagraph.textContent = 'Error! Division by zero is not allowed.';
                return;
            }
            result = num1 / num2;
            break;
        case 'power':
            result = Math.pow(num1, num2);
            break;
        case 'sqrt':
            if (num1 < 0) {
                resultParagraph.textContent = 'Error! Square root of negative number is not allowed.';
                return;
            }
            result = Math.sqrt(num1);
            break;
        case 'sin':
            result = Math.sin(num1 * Math.PI / 180);
            break;
        case 'cos':
            result = Math.cos(num1 * Math.PI / 180);
            break;
        case 'tan':
            result = Math.tan(num1 * Math.PI / 180);
            break;
        case 'log':
            if (num1 <= 0) {
                resultParagraph.textContent = 'Error! Logarithm of non-positive number is not allowed.';
                return;
            }
            result = Math.log10(num1);
            break;
        case 'exp':
            result = Math.exp(num1);
            break;
        default:
            resultParagraph.textContent = 'Invalid operation';
            return;
