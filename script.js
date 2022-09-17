
const previousTextElement = document.querySelector(".out1")
const currentTextElement = document.querySelector(".out2")
const numbers = document.querySelectorAll("[data-number]")
const operators = document.querySelectorAll("[data-operation]")
const clearAllBtn = document.querySelector("[data-all-clear]")
const deleteBtn = document.querySelector("[data-delete]")
const equalBtn = document.querySelector("[data-equals]")
const toggle = document.querySelector('.switch')


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




clear()

function clear() {
    prevOp = ''
    currentOp = ''
    operation = undefined
    currentTextElement.innerHTML = 0
}

numbers.forEach(number => {
    number.addEventListener("click", () => {
        getNumber(number.textContent)
        
        console.log(number)
        display()
    })
})

function getNumber(number) {
   
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
