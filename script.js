const previousTextElement = document.querySelector(".out1")
const currentTextElement = document.querySelector(".out2")
const numbers = document.querySelectorAll("[data-number]")
const operators = document.querySelectorAll("[data-operation]")
const clearAllBtn = document.querySelector("[data-all-clear]")
const deleteBtn = document.querySelector("[data-delete]")
const equalBtn = document.querySelector("[data-equals]")
const toggle = document.querySelector('.switch')

let currentOp = '0'
let operation = undefined
let prevOp = ''
let result 



function clear() {
    prevOp = ''
    currentOp = '0'
    operation = undefined   
}

numbers.forEach(number => {
    number.addEventListener("click", () => {
        getNumber(number.textContent)
        display()
    })
})

function getNumber(number) {    
    if (number === "." && currentOp.toString().includes(".")) { return }
    if (number === "0" && currentOp[0] == '0' && !currentOp.toString().includes('.')) {
        return
    } 
    if (number !== "0" && currentOp[0] == '0' && number !== '.' && !currentOp.toString().includes(".")) {
        currentOp = ''
        currentOp[0] = number.toString()
    }     
    currentOp += number.toString()    
}

function display() {
    if (operation) {
        previousTextElement.textContent = `${prevOp} ${operation}`
    } else {
        previousTextElement.textContent = `${prevOp}`
    }
    currentTextElement.textContent = currentOp
}


clearAllBtn.addEventListener("click", () => {
    clear()
    display()
})

deleteBtn.addEventListener("click", () => {
    currentOp = currentOp.toString().slice(0, currentOp.toString().length - 1)
    display()
})


function chooseOperator(operator) {
    if (currentOp === "") return
    if (prevOp !== "") operate()
    operation = operator.textContent
    prevOp = currentOp
    currentOp = ""
}

function operate() {
    

    if (isNaN(prevOp) || isNaN(currentOp)) return;
    switch (operation) {
        case "+":
            result = parseFloat(prevOp) + parseFloat(currentOp)
            break
        case "-":
            result = parseFloat(prevOp) - parseFloat(currentOp)
            break
        case "*":
            result = parseFloat(prevOp) * parseFloat(currentOp)
            break
        case "/":
            if (parseFloat(currentOp) == 0) {
                alert("can not divide by zero")
                clear()
                display()
                return
            }
            result = parseFloat(prevOp) / parseFloat(currentOp)
            break


    }

    currentOp = result
    operation = undefined
    prevOp = ""
}

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        chooseOperator(operator)
        display()
    })
})

equalBtn.addEventListener("click", () => {
    operate()
    display()
    console.log('result', result)
    console.log('currentOp', currentOp)
    console.log('prevOp', prevOp)
})














toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})