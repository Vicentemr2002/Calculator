function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result-display').textContent = '';

}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(displayValue);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

let history = [];

function addToHistory(entry) {
    history.push(entry);
    let historyElement = document.getElementById('history');
    
    historyElement.innerHTML = '';

    history.forEach(item => {
        let p = document.createElement('p');
        p.textContent = item;
        historyElement.appendChild(p);
    });
}