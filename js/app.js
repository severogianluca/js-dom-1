// console.log('salve buonasera')

const bulbOff = document.getElementById('bulb-off');
const buttonOn = document.getElementById('button-on')

buttonOn.addEventListener('click', function () {
    bulbOff.src = '../img/yellow_lamp.png'
})

