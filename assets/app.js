
const startButton = document.querySelector('.button-init-counter')
const stopButton = document.querySelector('.button-stop-counter')
const resetpButton = document.querySelector('.button-reset-counter')
const counterContainer = document.querySelector('.counter-container')

let timer = null
startButton.addEventListener('click', () => {
  timer = setInterval(() => {
    counterContainer.textContent = Number(counterContainer.textContent) + 1
  }, 1000)  
})

stopButton.addEventListener('click', () => {
  clearInterval(timer)
})

resetpButton.addEventListener('click', () => {
  counterContainer.textContent = 0
})