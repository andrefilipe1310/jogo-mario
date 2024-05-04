const mario = document.querySelector('.mario');

const obstaculo1 = document.querySelector ('.obstaculo1');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500 );
}

const loop = setInterval(() => {

    const obstaculo1Position = obstaculo1.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

   
    if(obstaculo1Position <= 120 && obstaculo1Position > 0 && marioPosition < 80) {

        obstaculo1.style.animation = 'none';
        mario.style.left = `${obstaculo1Position}px`;


        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval

    }
}, 10);

document.addEventListener('keydown', jump);