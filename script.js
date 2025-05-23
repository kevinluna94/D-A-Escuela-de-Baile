window.onload = function() {
  const track = document.getElementById('carouselTrack');
  const container = document.getElementById('carouselContainer');

  // Duplica los items para scroll infinito
  track.innerHTML += track.innerHTML;

  let currentOffset = 0;
  const scrollSpeed = 0.5; // Ajusta la velocidad (px por frame)

  function autoScroll() {
    currentOffset += scrollSpeed;

    // Ancho total del contenido original (antes de duplicar)
    const totalScrollWidth = track.scrollWidth / 2;

    // Cuando llega al final del contenido original, resetea
    if (currentOffset >= totalScrollWidth) {
      currentOffset = 0;
    }

    track.style.transform = `translateX(-${currentOffset}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
};




