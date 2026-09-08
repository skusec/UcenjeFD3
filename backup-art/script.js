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

// ==================================================
// ART CAROUSEL - KATALOG RADOVA
// ==================================================

const artworks = [

  {
    image: 'assets/bijeliKonj.png',
    title: 'Bijeli konj',
    categories: ['zivotinje', 'tekstura']
  },

  {
    image: 'assets/bijeliKonjdetalj.png',
    title: 'Bijeli konj — detalj',
    categories: ['zivotinje', 'tekstura']
  },

  {
    image: 'assets/bijeloKrilo.png',
    title: 'Bijelo krilo noći',
    categories: ['zivotinje']
  },

  {
    image: 'assets/bijeloKrilonoci.png',
    title: 'Bijelo krilo noći',
    categories: ['zivotinje']
  },

  {
    image: 'assets/crveniPut.png',
    title: 'Crveni put',
    categories: ['atmosfera']
  },

  {
    image: 'assets/crveniSuton.png',
    title: 'Crveni suton',
    categories: ['atmosfera']
  },

  {
    image: 'assets/cuvaricaErdut.png',
    title: 'Usnula čuvarica u Erdutu',
    categories: ['atmosfera']
  },

  {
    image: 'assets/cvjetnaTisina.png',
    title: 'Cvjetna tišina',
    categories: ['atmosfera', 'tekstura']
  },

  {
    image: 'assets/drvoMagla.png',
    title: 'Drvo u magli',
    categories: ['atmosfera']
  },

  {
    image: 'assets/jesenjiSapat.png',
    title: 'Jesenji šapat',
    categories: ['simboli']
  },

  {
    image: 'assets/korijenPamcenja.png',
    title: 'Korijen pamćenja',
    categories: ['tekstura', 'simboli']
  },

  {
    image: 'assets/korijenVrijednosti.png',
    title: 'Korijen vrijednosti',
    categories: ['tekstura', 'simboli']
  },

  {
    image: 'assets/lukeTisina.png',
    title: 'Luke u tišini',
    categories: ['atmosfera']
  },

  {
    image: 'assets/mjesecevoDrvo.png',
    title: 'Mjesečevo drvo',
    categories: ['atmosfera']
  },

  {
    image: 'assets/mjesecValovi.png',
    title: 'Mjesec nad valovima',
    categories: ['atmosfera']
  },

  {
    image: 'assets/modraObala.png',
    title: 'Modra obala',
    categories: ['atmosfera']
  },

  {
    image: 'assets/nebeskiSlap.png',
    title: 'Nebeski slap',
    categories: ['atmosfera', 'tekstura']
  },

  {
    image: 'assets/nemirnoNebo.png',
    title: 'Pod nemirnim nebom',
    categories: ['atmosfera']
  },

  {
    image: 'assets/nocnaRavnica.png',
    title: 'Noćna ravnica',
    categories: ['atmosfera']
  },

  {
    image: 'assets/nocnaStrazarka.png',
    title: 'Noćna stražarka',
    categories: ['zivotinje']
  },

  {
    image: 'assets/obalaSjecanja.png',
    title: 'Obala sjećanja',
    categories: ['atmosfera']
  },

  {
    image: 'assets/olujaPucina.png',
    title: 'Oluja nad pučinom',
    categories: ['atmosfera']
  },

  {
    image: 'assets/otokSjene.png',
    title: 'Otok sjene',
    categories: ['atmosfera']
  },

  {
    image: 'assets/pijetlovPoziv.png',
    title: 'Pijetlov poziv',
    categories: ['zivotinje', 'tekstura']
  },

  {
    image: 'assets/proljetniDah.png',
    title: 'Proljetni dah',
    categories: ['atmosfera', 'tekstura']
  },

  {
    image: 'assets/pukotinaSvjetla.png',
    title: 'Pukotina svjetla',
    categories: ['tekstura', 'simboli']
  },

  {
    image: 'assets/putKuci.png',
    title: 'Put k kući',
    categories: ['atmosfera']
  },

  {
    image: 'assets/putSvjetlu.png',
    title: 'Put prema svjetlu',
    categories: ['atmosfera']
  },

  {
    image: 'assets/ranjenaMocvara.png',
    title: 'Ranjena močvara',
    categories: ['atmosfera', 'tekstura']
  },

  {
    image: 'assets/ritamOblika.png',
    title: 'Ritam oblika',
    categories: ['atmosfera', 'simboli']
  },

  {
    image: 'assets/sapatMagle.png',
    title: 'Šapat magle',
    categories: ['atmosfera']
  },

  {
    image: 'assets/sapatValova.png',
    title: 'Šapat valova',
    categories: ['atmosfera']
  },

  {
    image: 'assets/srebrniKonj.png',
    title: 'Srebrni konj',
    categories: ['zivotinje', 'tekstura']
  },

  {
    image: 'assets/srebrniValovi.png',
    title: 'Srebrni valovi',
    categories: ['atmosfera']
  },

  {
    image: 'assets/stabloRavnica.png',
    title: 'Stablo na ravnici',
    categories: ['atmosfera']
  },

  {
    image: 'assets/stariSvjedok.png',
    title: 'Stari svjedok',
    categories: ['atmosfera']
  },

  {
    image: 'assets/stazaSvjetlucanja.png',
    title: 'Staza svjetlucanja',
    categories: ['atmosfera']
  },

  {
    image: 'assets/stazaTisine.png',
    title: 'Staza tišine',
    categories: ['atmosfera']
  },

  {
    image: 'assets/tihaJedra.png',
    title: 'Tiha jedra',
    categories: ['atmosfera']
  },

  {
    image: 'assets/tihaPucina.png',
    title: 'Tiha pučina',
    categories: ['atmosfera']
  },

  {
    image: 'assets/triCuvara.png',
    title: 'Tri čuvara noći',
    categories: ['zivotinje', 'simboli']
  },

  {
    image: 'assets/vjernaTisina.png',
    title: 'Sofija — portret vjerne tišine',
    categories: ['zivotinje']
  },

  {
    image: 'assets/zelenaMatrica.png',
    title: 'Zelena matrica',
    categories: ['tekstura', 'simboli']
  },

  {
    image: 'assets/zlatniOdraz.png',
    title: 'Zlatni odraz',
    categories: ['atmosfera']
  },

  {
    image: 'assets/znakTisine.png',
    title: 'Znak tišine',
    categories: ['simboli', 'tekstura']
  }

];

// ==================================================
// ART CAROUSEL - RENDER
// ==================================================

const carouselTrack = document.getElementById('carouselTrack');
const currentSlide = document.getElementById('currentSlide');
const totalSlides = document.getElementById('totalSlides');

let filteredArtworks = [...artworks];
let currentIndex = 0;


// Izrada svih slika unutar carousela
function renderCarousel() {

  carouselTrack.innerHTML = filteredArtworks.map((artwork, index) => {
    return `
      <div class="carousel-slide" data-index="${index}">
        <img
          src="${artwork.image}"
          alt="${artwork.title}"
          draggable="false"
        >
      </div>
    `;
  }).join('');

  totalSlides.textContent =
    String(filteredArtworks.length).padStart(2, '0');

  updateCarousel();
}


// Omogućuje da nakon zadnje slike ponovno dođemo na prvu
function wrapIndex(index) {
  return (index + filteredArtworks.length) % filteredArtworks.length;
}


// Postavlja slike u njihove pozicije
function updateCarousel() {

  const slides = document.querySelectorAll('.carousel-slide');

  slides.forEach(slide => {
    slide.classList.remove(
      'is-active',
      'is-prev',
      'is-next',
      'is-far-prev',
      'is-far-next'
    );
  });

  if (slides.length === 0) return;


  slides[wrapIndex(currentIndex)]
    .classList.add('is-active');

  slides[wrapIndex(currentIndex - 1)]
    .classList.add('is-prev');

  slides[wrapIndex(currentIndex + 1)]
    .classList.add('is-next');

  slides[wrapIndex(currentIndex - 2)]
    .classList.add('is-far-prev');

  slides[wrapIndex(currentIndex + 2)]
    .classList.add('is-far-next');


  currentSlide.textContent =
    String(currentIndex + 1).padStart(2, '0');
}


// Prvo pokretanje galerije
renderCarousel();
// ==================================================
// ART CAROUSEL - RUČNO LISTANJE
// ==================================================

const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
// Fullscreen prikaz
const modal = document.getElementById('artModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalClose = document.querySelector('.modal-close');


// Prethodni rad
carouselPrev.addEventListener('click', () => {
  currentIndex = wrapIndex(currentIndex - 1);
  updateCarousel();
  restartAutoplayIfPlaying();
});


// Sljedeći rad
carouselNext.addEventListener('click', () => {
  currentIndex = wrapIndex(currentIndex + 1);
  updateCarousel();
  restartAutoplayIfPlaying();
});


// Klik na rad
carouselTrack.addEventListener('click', event => {

  const slide = event.target.closest('.carousel-slide');

  if (!slide) return;

  const clickedIndex = Number(slide.dataset.index);


  // Ako kliknemo bočni rad, prvo ga dovodimo u sredinu
  if (clickedIndex !== currentIndex) {
    currentIndex = clickedIndex;
    updateCarousel();
    restartAutoplayIfPlaying();
    return;
  }


  // Ako kliknemo već aktivni rad, otvaramo fullscreen
  const artwork = filteredArtworks[currentIndex];

  modalImage.src = artwork.image;
  modalImage.alt = artwork.title;

  modalTitle.textContent = artwork.title;
  modalMeta.textContent = '';

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');

  document.body.style.overflow = 'hidden';

});

// Zatvaranje fullscreen prikaza
function closeArtModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');

  document.body.style.overflow = '';
}


modalClose.addEventListener('click', closeArtModal);


modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeArtModal();
  }
});


document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeArtModal();
  }
});

// ==================================================
// ART CAROUSEL - AUTOPLAY
// ==================================================

const carouselPlay = document.getElementById('carouselPlay');
const playIcon = carouselPlay.querySelector('.play-icon');
const playLabel = carouselPlay.querySelector('.play-label');
const progressBar = document.getElementById('carouselProgressBar');

const AUTOPLAY_DELAY = 7000;

let autoplayTimer = null;
let isPlaying = false;


// Pokreće animaciju progress bara
function startProgress() {

  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';

  // Prisili browser da registrira početno stanje
  void progressBar.offsetWidth;

  progressBar.style.transition =
    `width ${AUTOPLAY_DELAY}ms linear`;

  progressBar.style.width = '100%';
}


// Jedan autoplay ciklus
function runAutoplayCycle() {

  clearTimeout(autoplayTimer);

  startProgress();

  autoplayTimer = setTimeout(() => {

    currentIndex = wrapIndex(currentIndex + 1);

    updateCarousel();

    runAutoplayCycle();

  }, AUTOPLAY_DELAY);
}


// Pokreni autoplay
function startAutoplay() {

  isPlaying = true;

  playIcon.textContent = '❚❚';
  playLabel.textContent = 'Pauziraj';

  runAutoplayCycle();
}


// Zaustavi autoplay
function stopAutoplay() {

  isPlaying = false;

  clearTimeout(autoplayTimer);
  autoplayTimer = null;

  playIcon.textContent = '▶';
  playLabel.textContent = 'Pokreni';

  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';
}


// Ako korisnik ručno promijeni sliku dok autoplay radi,
// 7 sekundi počinje ponovno od početka.
function restartAutoplayIfPlaying() {

  if (isPlaying) {
    runAutoplayCycle();
  }
}


// Play / Pause gumb
carouselPlay.addEventListener('click', () => {

  if (isPlaying) {
    stopAutoplay();
  } else {
    startAutoplay();
  }

});

// ==================================================
// ART CAROUSEL - FILTERI
// ==================================================

const galleryFilters = document.querySelectorAll('.gallery-filter');

galleryFilters.forEach(button => {

  button.addEventListener('click', () => {

    // Makni active sa svih gumba
    galleryFilters.forEach(btn => {
      btn.classList.remove('active');
    });

    // Aktiviraj kliknuti gumb
    button.classList.add('active');


    const selectedFilter = button.dataset.filter;


    // Ako je odabrano "Sve", vraćamo svih 45 radova
    if (selectedFilter === 'all') {

      filteredArtworks = [...artworks];

    } else {

      // Inače ostavljamo samo radove
      // koji sadrže odabranu kategoriju
      filteredArtworks = artworks.filter(artwork =>
        artwork.categories.includes(selectedFilter)
      );

    }


    // Kod promjene kategorije krećemo od prvog rada
    currentIndex = 0;

    // Ponovno izgradi carousel
    renderCarousel();


    // Ako autoplay već radi,
    // pokreni novih 7 sekundi od početka
    restartAutoplayIfPlaying();

  });

});

// ==================================================
// ART CAROUSEL - SWIPE ZA MOBITEL
// ==================================================

let touchStartX = 0;
let touchEndX = 0;

const SWIPE_MIN_DISTANCE = 50;


// Kad korisnik spusti prst
carouselTrack.addEventListener('touchstart', event => {
  touchStartX = event.changedTouches[0].screenX;
});


// Kad korisnik makne prst
carouselTrack.addEventListener('touchend', event => {
  touchEndX = event.changedTouches[0].screenX;

  handleSwipe();
});


function handleSwipe() {

  const swipeDistance = touchEndX - touchStartX;


  // Premali pokret ignoriramo
  if (Math.abs(swipeDistance) < SWIPE_MIN_DISTANCE) {
    return;
  }


  // Swipe ulijevo → sljedeći rad
  if (swipeDistance < 0) {

    currentIndex = wrapIndex(currentIndex + 1);

  } else {

    // Swipe udesno → prethodni rad
    currentIndex = wrapIndex(currentIndex - 1);

  }


  updateCarousel();
  restartAutoplayIfPlaying();

}


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
