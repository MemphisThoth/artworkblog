
  const items = document.querySelectorAll('.lightbox-trigger');
  const lightbox = document.getElementById('lightbox');
  const img = document.querySelector('.lightbox-image');
  const caption = document.querySelector('.lightbox-caption');
  const closeBtn = document.querySelector('.close');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let index = 0;

  function openLightbox(i) {
    index = i;
    const item = items[i];
    img.src = item.dataset.full;
    caption.textContent = item.alt;
    lightbox.classList.add('open');
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    openLightbox(index);
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    openLightbox(index);
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') lightbox.classList.remove('open');
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });

