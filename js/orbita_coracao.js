const heart1 = document.getElementById('heart1');
const heart2 = document.getElementById('heart2');

const centerX = 110; // centro da órbita no eixo X (metade da largura do container)
const centerY = 110; // centro da órbita no eixo Y (metade da altura do container)
const radiusX = 80;  // raio horizontal da órbita (elipse)
const radiusY = 40;  // raio vertical da órbita (elipse)
const minScale = 0.6; // escala mínima do coração (quando está “atrás”)
const maxScale = 1.2; // escala máxima do coração (quando está “na frente”)

let angle = 0; // ângulo inicial da animação

function animateOrbit() {
    angle += 0.02; // incrementa o ângulo para movimentação contínua

    // Calcula posição e escala do heart1
    const x1 = centerX + radiusX * Math.cos(angle);
    const y1 = centerY + radiusY * Math.sin(angle);
    // escala varia suavemente entre minScale e maxScale
    const scale1 = minScale + (maxScale - minScale) * ((Math.sin(angle) + 1) / 2);
    // brilho varia entre 0.6 e 1.0 para efeito de luz
    const brightness1 = 0.6 + 0.4 * ((Math.sin(angle) + 1) / 2);

    heart1.style.transform = `translate(-50%, -50%) translate(${x1}px, ${y1}px) scale(${scale1})`;
    heart1.style.filter = `drop-shadow(0 0 ${3 + 7 * brightness1}px #ff7fae) drop-shadow(0 0 ${8 + 12 * brightness1}px #ff3561)`;

    // Para heart2, usa ângulo defasado 180º para orbitar na posição oposta
    const angle2 = angle + Math.PI;
    const x2 = centerX + radiusX * Math.cos(angle2);
    const y2 = centerY + radiusY * Math.sin(angle2);
    const scale2 = minScale + (maxScale - minScale) * ((Math.sin(angle2) + 1) / 2);
    const brightness2 = 0.6 + 0.4 * ((Math.sin(angle2) + 1) / 2);

    heart2.style.transform = `translate(-50%, -50%) translate(${x2}px, ${y2}px) scale(${scale2})`;
    heart2.style.filter = `drop-shadow(0 0 ${3 + 7 * brightness2}px #ff7fae) drop-shadow(0 0 ${8 + 12 * brightness2}px #ff3561)`;

    // Continua a animação
    requestAnimationFrame(animateOrbit);
}

animateOrbit();
