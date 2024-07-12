let currentVal = '';

function appendToResult(value) {
    currentVal += value;
    document.getElementById('result').value = currentVal;
}

function appendValue(operator) {
    if (currentVal !== '' && '+-*/'.indexOf(currentVal[currentVal.length - 1]) === -1) {
        currentVal += operator;
        document.getElementById('result').value = currentVal;
    }
}

function clearResult() {
    currentVal = '';
    document.getElementById('result').value = currentVal;
}

function calculate() {
    try {
        let result = eval(currentVal);
        if (isNaN(result) || !isFinite(result)) {
            throw 'Invalid expression';
        }
        document.getElementById('result').value = result;
        currentVal = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentVal = '';
    }
}
