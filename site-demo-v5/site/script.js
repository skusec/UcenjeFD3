const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const form = document.getElementById('pilot-form');
const status = document.getElementById('form-status');
form?.addEventListener('submit', event => {
  event.preventDefault();
  status.textContent = '✓ Pilot obrazac radi — backend i stvarno slanje e-maila dodajemo tek u produkcijskoj verziji.';
});


// v3.2 — lightbox za fotografije u sekcijama 01 OPREMA i 05 POGON
const lightbox = document.getElementById('image-lightbox');
const lightboxImage = lightbox?.querySelector('.lightbox-image');
const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
const lightboxClose = lightbox?.querySelector('.lightbox-close');
let lightboxTrigger = null;

function openLightbox(image) {
  if (!lightbox || !lightboxImage) return;
  lightboxTrigger = image;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt || 'Fotografija opreme OPG ERA';
  if (lightboxCaption) lightboxCaption.textContent = image.alt || '';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  requestAnimationFrame(() => lightboxClose?.focus());
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  // Praznimo src tek nakon animacije da ne bljesne prazna slika.
  setTimeout(() => { if (!lightbox.classList.contains('is-open')) lightboxImage.src = ''; }, 220);
  lightboxTrigger?.focus({ preventScroll: true });
}

document.querySelectorAll('#oprema .zoomable-image, .gallery-section .zoomable-image').forEach(image => {
  image.addEventListener('click', () => openLightbox(image));
  image.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox?.classList.contains('is-open')) closeLightbox();
});
