// Pegando os elementos que a gente vai usar
const botao = document.getElementById('botao-amor');
const declaracao = document.getElementById('declaracao');
const musica = document.getElementById('musica');

// Função pra criar cada emoji que cai (fofa demais)
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

// Inicia a chuva de emojis com limite
function iniciarChuvaDeEmojis(emoji) {
  const isMobile = window.innerWidth <= 768;
  const intervalo = isMobile ? 1000 : 600;
  let contador = 0;
  const maxEmojis = 20;

  const emojiInterval = setInterval(() => {
    if (contador >= maxEmojis) {
      clearInterval(emojiInterval);
      return;
    }
    criarEmojiChuva(emoji, isMobile);
    contador++;
  }, intervalo);
}

// Quando clica no botão “Eu te amo”
botao.addEventListener('click', () => {
  // Transição de fundo
  document.body.classList.add('fade-body');

  // Some com a tela inicial, aparece a declaração
  document.getElementById('tela-inicial').style.display = 'none';
  declaracao.style.display = 'flex';
  declaracao.classList.add('revelar');

  // Chuva de amor (literalmente)
  iniciarChuvaDeEmojis('🌹');
  iniciarChuvaDeEmojis('❤️');

  // Espera um pouquinho, depois começa a música de leve
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

  // Bloqueia botão direito na foto (pq ninguém vai baixar a deusa)
  document.addEventListener('contextmenu', function (e) {
    if (e.target.id === 'foto-amada') {
      e.preventDefault();
    }
  });

  // Role suave até a parte da declaração
  declaracao.scrollIntoView({ behavior: 'smooth' });
});
