// console.log('salve buonasera')

const bulbOff = document.getElementById('bulb-off');
const buttonOn = document.getElementById('button-on')
ESERRCIZIO:
// buttonOn.addEventListener('click', function () {
//     bulbOff.src = '../img/yellow_lamp.png'
// })

BONUS:
buttonOn.addEventListener('click', function () {
    if(bulbOff.src.includes('/img/white_lamp.png')){
        bulbOff.src = '../img/yellow_lamp.png';
        buttonOn.innerText = 'SPEGNI';
        console.log('acceso if')
        
    }else{
        bulbOff.src = '/img/white_lamp.png';
        buttonOn.innerText = 'ACCENDI';
        console.log('spento else')
    }
})

