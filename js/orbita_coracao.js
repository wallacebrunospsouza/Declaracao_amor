    const heart1 = document.getElementById('heart1');
    const heart2 = document.getElementById('heart2');

    const centerX = 110; // metade do container largura (220/2)
    const centerY = 110; // metade do container altura (220/2)
    const radiusX = 80; // raio horizontal da órbita
    const radiusY = 40; // raio vertical (para dar elipse)
    const minScale = 0.6; // escala mínima (quando atrás)
    const maxScale = 1.2; // escala máxima (quando na frente)

    let angle = 0; // ângulo inicial

    function animateOrbit() {
      angle += 0.02;

      // Calcula a posição e escala do heart1
      const x1 = centerX + radiusX * Math.cos(angle);
      const y1 = centerY + radiusY * Math.sin(angle);
      const scale1 = minScale + (maxScale - minScale) * ((Math.sin(angle) + 1) / 2); // oscila entre minScale e maxScale
      const brightness1 = 0.6 + 0.4 * ((Math.sin(angle) + 1) / 2); // para brilho suave

      heart1.style.transform = `translate(-50%, -50%) translate(${x1}px, ${y1}px) scale(${scale1})`;
      heart1.style.filter = `drop-shadow(0 0 ${3 + 7 * brightness1}px #ff7fae) drop-shadow(0 0 ${8 + 12 * brightness1}px #ff3561)`;

      // Calcula para heart2 com ângulo defasado em 180º (Math.PI)
      const angle2 = angle + Math.PI;
      const x2 = centerX + radiusX * Math.cos(angle2);
      const y2 = centerY + radiusY * Math.sin(angle2);
      const scale2 = minScale + (maxScale - minScale) * ((Math.sin(angle2) + 1) / 2);
      const brightness2 = 0.6 + 0.4 * ((Math.sin(angle2) + 1) / 2);

      heart2.style.transform = `translate(-50%, -50%) translate(${x2}px, ${y2}px) scale(${scale2})`;
      heart2.style.filter = `drop-shadow(0 0 ${3 + 7 * brightness2}px #ff7fae) drop-shadow(0 0 ${8 + 12 * brightness2}px #ff3561)`;

      requestAnimationFrame(animateOrbit);
    }

    animateOrbit();