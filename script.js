const operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');
const operator = document.getElementById('operator');
const calculateBtn = document.getElementById('calculate');
const resultElement = document.getElementById('result');
const errorElement = document.getElementById('error');

calculateBtn.addEventListener('click', () => {
    const num1 = parseFloat(operand1.value);
    const num2 = parseFloat(operand2.value);
    const selectedOperator = operator.value;

    // Validación de operandos
    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = 'Ingrese números válidos en ambos operandos';
        resultElement.textContent = 'Resultado: ';
        return;
    }

    errorElement.textContent = '';

    // Realizar operación según el operador seleccionado
    let result;
    switch (selectedOperator) {
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
                errorElement.textContent = 'No se puede dividir por cero';
                resultElement.textContent = 'Resultado: ';
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    resultElement.textContent = `Resultado: ${result}`;
});