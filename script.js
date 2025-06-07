const botao = document.getElementById('botao-amor');
const declaracao = document.getElementById('declaracao');
const musica = document.getElementById('musica');

function criarEmojiChuva(emoji) {
    const elemento = document.createElement('div');
    elemento.classList.add('emoji');
    elemento.textContent = emoji;
    elemento.style.left = Math.random() * 100 + 'vw';
    elemento.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(elemento);

    setTimeout(() => {
        elemento.remove();
    }, 5000);
}

function iniciarChuvaDeEmojis(emoji) {
    setInterval(() => criarEmojiChuva(emoji), 200);
}

botao.addEventListener('click', () => {
    document.body.classList.add('fade-body'); // muda o fundo

    document.getElementById('tela-inicial').style.display = 'none'; // esconde botão
    declaracao.style.display = 'flex'; // mostra conteúdo
    declaracao.classList.add('revelar'); // adiciona a animação cinematográfica

    iniciarChuvaDeEmojis('🌹');

    // música toca com leve atraso para sincronizar com a transição
    setTimeout(() => {
        musica.volume = 0; // começa mudo
        musica.play();

        const targetVolume = 0.7; // volume final (ajuste aqui se quiser)
        const fadeDuration = 5000; // duração do fade em ms (5 segundos)
        const fadeStep = 50; // intervalo para aumentar o volume em ms

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


    declaracao.scrollIntoView({ behavior: 'smooth' });
});

