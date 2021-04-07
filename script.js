// const 
let $container = document.getElementById('container')
const $display = document.getElementById('display')
const $countdownForm = document.getElementById('countdown-form')
const $button = document.getElementById('store-data')
const countName = document.getElementById('count-name')

let x = 0

// Countdown Timer
$container.addEventListener('submit', function (event){
    event.preventDefault()

    let inputTitle = document.getElementById('input-title').value
    let inputYear = document.getElementById('input-year').value
    let inputMonth = document.getElementById('input-month').value - 1
    let inputDay = document.getElementById('input-day').value

    countName.textContent = inputTitle

    let futureDate = new Date (inputYear, inputMonth, inputDay)
    localStorage.setItem('date', futureDate)
    x = setInterval(function () {
    let now = new Date()
    let time = futureDate - now
    
    let days = Math.floor(time / (1000 * 60 * 60 * 24))
    let hours = Math.floor((time % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((time % (1000 * 60)) / 1000)
    
    document.getElementById("display").innerHTML = days + "d " 
    + hours + "h " + minutes + "m " + seconds + "s "
    
    if (time <= 0) {
        clearInterval(x)
        document.getElementById("display").textContent = "EXPIRED"
    }
    }, 1000) 

})

// CSS Manipulation
$button.addEventListener('click', function (){
    $countdownForm.classList.add('nodisplay')
})

const $clear = document.getElementById('clear')
    $clear.addEventListener('click', function () {
    $countdownForm.classList.remove('nodisplay')
    clearInterval(x)
    countName.textContent = 'Countdown Timer'
    $display.textContent = ''
    localStorage.removeItem('date')
})

if (localStorage.getItem('date')) {
    let futureDate = new Date(localStorage.getItem('date'))
    x = setInterval(function () {
        let now = new Date()
        let time = futureDate - now
        
        let days = Math.floor(time / (1000 * 60 * 60 * 24))
        let hours = Math.floor((time % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
        let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((time % (1000 * 60)) / 1000)
        
        document.getElementById("display").innerHTML = days + "d " 
        + hours + "h " + minutes + "m " + seconds + "s "
        
        if (time <= 0) {
            clearInterval(x)
            document.getElementById("display").textContent = "EXPIRED"
        }
        }, 1000)    
}





