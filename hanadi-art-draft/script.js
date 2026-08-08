// Mobilna navigacija
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Jednostavno filtriranje galerije
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.art-card');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;
    cards.forEach(card => {
      const shouldShow = selected === 'all' || card.dataset.category === selected;
      card.style.display = shouldShow ? '' : 'none';
    });
  });
});

// Lightbox / modal za veći prikaz rada
const modal = document.getElementById('artModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalClose = document.querySelector('.modal-close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modalImage.src = card.dataset.full;
    modalImage.alt = card.dataset.title;
    modalTitle.textContent = card.dataset.title;
    modalMeta.textContent = card.dataset.meta;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

// Demo kontakt forma
const demoForm = document.getElementById('demoForm');
const formNote = document.getElementById('formNote');
demoForm.addEventListener('submit', event => {
  event.preventDefault();
  formNote.textContent = 'Super — forma radi. U finalnoj verziji spojit ćemo je na pravi kontakt.';
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Godina u footeru
document.getElementById('year').textContent = new Date().getFullYear();
