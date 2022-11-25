function add(operand1, operand2) {
    return operand1 + operand2
}

function subtract(operand1, operand2) {
    return operand1 - operand2
}

function multiply(operand1, operand2) {
    return operand1 * operand2
}

function divide(operand1, operand2) {
    return operand1 / operand2
}

function operate(operator, operand1, operand2) {
    switch (operator) {
        case 'add':
            return add(operand1, operand2)
        case 'subtract':
            return subtract(operand1, operand2)
        case 'multiply':
            return multiply(operand1, operand2)
        case 'divide':
            return divide(operand1, operand2)
    }
}

function updateDisplay(newValue) {
    const display = document.querySelector('#display')
    display.textContent = newValue
}

let clearDisplay = false

const digits = document.getElementById('digits')

digits.addEventListener('click', (event) => {
    if (clearDisplay) {
        updateDisplay('')
    }
    const display = document.querySelector('#display')
    updateDisplay(display.textContent += event.target.textContent)
    clearDisplay = false
})

let operand1 
let operand2 
let operator = ''

const operators = document.getElementById('operators')

operators .addEventListener('click', (event) => {
    if (operator !== '') {
        operand2 = parseInt(document.querySelector('#display').textContent)
        let result = operate(operator, operand1, operand2)
        updateDisplay(result)
    }
    operator = event.target.id
    operand1 = parseInt(document.querySelector('#display').textContent)
    clearDisplay = true
})

const clearBtn = document.getElementById('clear')

clearBtn.addEventListener('click', () => {
    operator = ''
    operand1 = ''
    operand2 = ''
    updateDisplay('')
})

const equalsBtn = document.getElementById('equals')

equalsBtn.addEventListener('click', () => {
    operand2 = parseInt(document.querySelector('#display').textContent)
    let result = operate(operator, operand1, operand2)
    updateDisplay(result)
})
