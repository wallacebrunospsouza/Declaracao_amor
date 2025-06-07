const botao = document.getElementById('botao-amor');
const declaracao = document.getElementById('declaracao');
const musica = document.getElementById('musica');

function criarEmojiChuva(emoji, isMobile) {
    const elemento = document.createElement('div');
    elemento.classList.add('emoji');
    elemento.textContent = emoji;
    elemento.style.left = Math.random() * 100 + 'vw';

    const duracao = isMobile ? (Math.random() * 3 + 5) : (Math.random() * 2 + 3);
    elemento.style.animationDuration = duracao + 's';

    document.body.appendChild(elemento);

    setTimeout(() => {
        elemento.remove();
    }, duracao * 1000);
}


function iniciarChuvaDeEmojis(emoji) {
    const isMobile = window.innerWidth <= 768;
    const intervalo = isMobile ? 600 : 200;

    setInterval(() => criarEmojiChuva(emoji, isMobile), intervalo);
}


botao.addEventListener('click', () => {
    document.body.classList.add('fade-body'); 

    document.getElementById('tela-inicial').style.display = 'none'; 
    declaracao.style.display = 'flex'; 
    declaracao.classList.add('revelar'); 
    iniciarChuvaDeEmojis('🌹');
    iniciarChuvaDeEmojis('❤️');

    setTimeout(() => {
        musica.volume = 0; 
        musica.play();

        const targetVolume = 0.7;
        const fadeDuration = 5000; 
        const fadeStep = 50; 
        let volume = 0;

        const fadeAudio = setInterval(() => {
            volume += (targetVolume * fadeStep) / fadeDuration;
            if (volume >= targetVolume) {
                volume = targetVolume;
                clearInterval(fadeAudio);
            }
            musica.volume = volume;
        }, fadeStep);
    }, 1000);

    document.addEventListener('contextmenu', function (e) {
        if (e.target.id === 'foto-amada') {
            e.preventDefault();
        }
    });


    declaracao.scrollIntoView({ behavior: 'smooth' });
});

