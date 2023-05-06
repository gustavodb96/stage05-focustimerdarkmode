const buttonPlay = document.querySelector('.pathPlay')

const buttonStop = document.querySelector('.stop')
const iconStop = document.querySelector('.pathStop')

const buttonIncrease = document.querySelector('.increase')
const iconIncrease = document.querySelector('.pathIncrease')

const buttonDecrease = document.querySelector('.decrease')
const iconDecrease = document.querySelector('.pathDecrease')

const changeBody = document.querySelector('.catchMe')

const buttonForest = document.querySelectorAll('.forest')
const designForest = document.querySelector('.forest')
const forestVolume = document.querySelector('.volForest')

const buttonRain = document.querySelectorAll('.rain')
const designRain = document.querySelector('.rain')
const designPathRain = document.querySelector('.path-rain')
const rainVolume = document.querySelector('#volRain')

const buttonCoffeshop = document.querySelectorAll('.coffe-shop')
const designCoffeshop = document.querySelector('.coffe-shop')
const designPathCoffeshop = document.querySelector('.path-coffe-shop')
const coffeShopVolume = document.querySelector('#volCoffeShop')

const buttonFireplace = document.querySelectorAll('.fireplace')
const designFireplace = document.querySelector('.fireplace')
const designPathFireplace = document.querySelector('.path-fireplace')
const fireplaceVolume = document.querySelector('#volFireplace')

const buttonDay = document.querySelector('.dark-mode') 
const buttonNight = document.querySelector('.day-mode') 

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const separator = document.querySelector('.separator')

const soundForest = new Audio("./sons/Floresta.wav") 
const soundRain = new Audio("./sons/Chuva.wav") 
const soundCoffeshop = new Audio("./sons/Cafeteria.wav") 
const soundFireplace = new Audio("./sons/Lareira.wav")

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let clickCount = 0

soundForest.loop = true
soundRain.loop = true
soundCoffeshop.loop = true
soundFireplace.loop = true

// Funções do botão

function play() {  
  buttonPlay.classList.add('active')
}

function stop() {
  buttonPlay.classList.remove('active')
  cleanActiveSounds()
}

function increase() {
  clickCount++
  let minutesIncreased = minutes + (5 * clickCount)
  minutesDisplay.textContent = minutesIncreased
}

function decrease() {
  if (minutesDisplay.textContent > 0) {
    clickCount--
    let minutesDecreased = minutes + (5 * clickCount)
    minutesDisplay.textContent = String(minutesDecreased).padStart(2, "0")
  }
}

function cleanActiveSounds() {

  buttonForest.forEach(function(element) {
    element.classList.remove('active')
  })

  forestVolume.classList.remove('active')

  buttonRain.forEach(function(element) {
    element.classList.remove('active')
  })

  rainVolume.classList.remove('active')

  designPathRain.classList.remove('active')

  buttonCoffeshop.forEach(function(element) {
    element.classList.remove('active')
  })

  designPathCoffeshop.classList.remove('active')

  coffeShopVolume.classList.remove('active')

  buttonFireplace.forEach(function(element) {
    element.classList.remove('active')
  })

  designPathFireplace.classList.remove('active')

  fireplaceVolume.classList.remove('active')

  soundForest.pause()
  soundRain.pause()
  soundCoffeshop.pause()
  soundFireplace.pause()

}

function soundOnForest() {
  cleanActiveSounds()

  buttonForest.forEach(function(element) {
    element.classList.toggle('active')
  })

  forestVolume.classList.toggle('active')

  soundForest.play()

}

function soundOnRain() {

  cleanActiveSounds()

  buttonRain.forEach(function(element) {
    element.classList.toggle('active')
  })

  designPathRain.classList.add('active')


  rainVolume.classList.toggle('active')

  soundRain.play()

}

function soundOnCoffeshop() {

  cleanActiveSounds()

  buttonCoffeshop.forEach(function(element) {
    element.classList.toggle('active')
  })

  designPathCoffeshop.classList.add('active')

  coffeShopVolume.classList.toggle('active')

  soundCoffeshop.play()
}

function soundOnFireplace() {

  cleanActiveSounds()

  buttonFireplace.forEach(function(element) {
    element.classList.toggle('active')
  })

  designPathFireplace.classList.add('active')

  fireplaceVolume.classList.toggle('active')

  soundFireplace.play()

}

function dayToNight() {

  changeBody.classList.toggle('night')
  minutesDisplay.classList.toggle('night')
  secondsDisplay.classList.toggle('night')
  separator.classList.toggle('night')
  buttonPlay.classList.toggle('night')
  buttonStop.classList.toggle('night')
  buttonIncrease.classList.toggle('night')
  buttonDecrease.classList.toggle('night')
  iconStop.classList.toggle('night')
  iconIncrease.classList.toggle('night')
  iconDecrease.classList.toggle('night')
  designForest.classList.toggle('card-black')
  designRain.classList.toggle('card-black')
  designCoffeshop.classList.toggle('card-black')
  designFireplace.classList.toggle('card-black')
  designPathRain.classList.toggle('card-black')
  designPathCoffeshop.classList.toggle('card-black')
  designPathFireplace.classList.toggle('card-black')
  forestVolume.classList.add('active')
  rainVolume.classList.add('active')
  coffeShopVolume.classList.add('active')
  fireplaceVolume.classList.add('active')

  buttonDay.classList.add('hide')
  buttonNight.classList.remove('hide')
}

function nightToDay() {

  changeBody.classList.toggle('night')
  minutesDisplay.classList.toggle('night')
  secondsDisplay.classList.toggle('night')
  separator.classList.toggle('night')
  buttonPlay.classList.toggle('night')
  buttonStop.classList.toggle('night')
  buttonIncrease.classList.toggle('night')
  buttonDecrease.classList.toggle('night')
  iconStop.classList.toggle('night')
  iconIncrease.classList.toggle('night')
  iconDecrease.classList.toggle('night')
  designForest.classList.toggle('card-black')
  designRain.classList.toggle('card-black')
  designCoffeshop.classList.toggle('card-black')
  designFireplace.classList.toggle('card-black')
  designPathRain.classList.toggle('card-black')
  designPathCoffeshop.classList.toggle('card-black')
  designPathFireplace.classList.toggle('card-black')
  forestVolume.classList.remove('active')
  rainVolume.classList.remove('active')
  coffeShopVolume.classList.remove('active')
  fireplaceVolume.classList.remove('active')

  buttonDay.classList.remove('hide')
  buttonNight.classList.add('hide')

}

// Lógica das funções dos botões

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function Reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function() {

    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0
    
    updateDisplay(minutes, 0)
    
    if (isFinished) {
      
      resetControls()
      updateDisplay()
      
      return
      
    }
    
    if(seconds <= 0 ) {
      seconds = 60
      --minutes
    }
    
    updateDisplay(minutes, String(seconds - 1))
    
    countdown()
    
  }, 1000)
}

// Eventos

buttonPlay.addEventListener('click', function() { play(), countdown() })

buttonStop.addEventListener('click', function() { stop(), Reset() })

buttonIncrease.addEventListener('click', function() { increase() }) 

buttonDecrease.addEventListener('click', function() { decrease() })

forestVolume.addEventListener('input', function () {
  soundForest.volume = forestVolume.value})

rainVolume.addEventListener('input', function () {
  soundRain.volume = rainVolume.value})

coffeShopVolume.addEventListener('input', function () {
  soundCoffeshop.volume = coffeShopVolume.value})

fireplaceVolume.addEventListener('input', function () {
  soundFireplace.volume = fireplaceVolume.value})

buttonDay.addEventListener('click', function() { dayToNight() })

buttonNight.addEventListener('click', function() { nightToDay() })

buttonForest.forEach(function(button) {
  button.addEventListener('click', soundOnForest)
})

buttonRain.forEach(function(button) {
  button.addEventListener('click', soundOnRain)
})

buttonCoffeshop.forEach(function(button) {
  button.addEventListener('click', soundOnCoffeshop)
})

buttonFireplace.forEach(function(button) {
  button.addEventListener('click', soundOnFireplace)
})

