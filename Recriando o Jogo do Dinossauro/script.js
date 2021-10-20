const DINO = document.querySelector('.dino');
const BACK = document.querySelector('.back');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150){
            //descendo   
            clearInterval(upInterval);
            
            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    DINO.style.bottom = position + 'px';
                }
            },20);
        }else{
            //subindo
            position += 20;
            DINO.style.bottom = position + 'px';
        }
    },20);
}

function criarCactus(){
    const cactus = document.createElement('div');
    let positionCactus = 1000;
    let randomTime = Math.random() * 6000;
    
    if (isGameOver) return;

    cactus.classList.add('cactus');
    BACK.appendChild(cactus);
    cactus.style.left = positionCactus + 'px';

    let leftTimer = setInterval(() => {
        positionCactus -= 10;
        cactus.style.left = positionCactus + 'px';

        if(positionCactus < -60){
            clearInterval(leftTimer);
            BACK.removeChild(cactus);

        }else if(positionCactus > 0 && positionCactus < 60 && position < 60){
            clearInterval(leftTimer);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo!!!</h1>';

        }else{
            positionCactus -= 10;
            cactus.style.left = positionCactus + 'px';
        }
    },20);

    setTimeout(criarCactus, randomTime);
}
criarCactus();
document.addEventListener('keyup', handleKeyUp);
