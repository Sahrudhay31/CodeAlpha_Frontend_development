const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

function updateDisplay(val) {
    display.textContent = val || '0';
}

function handleInput(val) {
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(val) && operators.includes(currentInput.slice(-1))) {
        currentInput = currentInput.slice(0, -1) + val;
    } else {
        currentInput += val;
    }
    updateDisplay(currentInput);
}

function calculate() {
    try {
        if (!currentInput) return;
        const sanitized = currentInput.replace(/[^0-9+\-*/.]/g, '');
        const result = Function(`'use strict'; return (${sanitized})`)();
        currentInput = String(result);
        updateDisplay(currentInput);
    } catch {
        updateDisplay('Error');
        currentInput = '';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const val = button.dataset.val;
        const action = button.dataset.action;

        if (val) handleInput(val);
        if (action === 'clear') { currentInput = ''; updateDisplay('0'); }
        if (action === 'delete') { currentInput = currentInput.slice(0, -1); updateDisplay(currentInput); }
        if (action === 'calculate') calculate();
    });
});

// Keyboard support
window.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
        handleInput(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    } else if (e.key === 'Escape') {
        currentInput = '';
        updateDisplay('0');
    }
});