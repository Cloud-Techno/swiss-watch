// ============================================================
//  ZÜRICH TIME & GIFTS — Main JavaScript
// ============================================================

// ---------- NAVBAR SCROLL & STATE ----------
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function updateNavbar() {
  const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  const isMenuOpen = navLinks.classList.contains('open');

  if (scrollPos > 20 || isMenuOpen) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// ---------- HAMBURGER MENU ----------
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
  navbar.classList.toggle('navbar--open', isOpen);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  updateNavbar();
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    navbar.classList.remove('navbar--open');
    document.body.style.overflow = '';
    updateNavbar();
  });
});

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar(); // Initial check

// ---------- SMOOTH SCROLL FOR HERO ARROW ----------
const scrollDown = document.getElementById('scrollDown');
if (scrollDown) {
  scrollDown.addEventListener('click', () => {
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
  });
}

// ---------- BACK TO TOP ----------
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
}, { passive: true });

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



// ---------- CONTACT FORM ----------
function handleForm(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const btn = form.querySelector('button[type="submit"]');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate async submission
  setTimeout(() => {
    success.textContent = "✅ Thank you! We'll be in touch shortly.";
    form.reset();
    btn.textContent = 'Send Message ✈️';
    btn.disabled = false;
    setTimeout(() => { success.textContent = ''; }, 6000);
  }, 1400);
}

// ---------- QUICK VIEW MODAL ----------
const watchData = {
  watch1: {
    img: 'images/watch-roamer.png',
    brand: 'Roamer',
    name: 'Classic Automatik Date',
    desc: 'A timeless Swiss dress watch featuring an ETA automatic movement, silver stainless-steel case (38mm), white lacquered dial, and premium brown leather strap. Sapphire crystal, date window, 50m water resistance.',
    rating: '★★★★★ (48 reviews)'
  },
  watch2: {
    img: 'images/watch-victorinox.png',
    brand: 'Victorinox',
    name: 'Blue Chronograph Pro',
    desc: 'High-performance Swiss sport chronograph with a stunning blue sunburst dial, tachymeter bezel, and solid stainless steel bracelet. Features an ETA Valjoux 7750 movement, 200m water resistance, and luminous hands.',
    rating: '★★★★★ (112 reviews)'
  },
  watch3: {
    img: 'images/watch-jacques.png',
    brand: 'Jacques du Manoir',
    name: 'Inspiration Rose Gold',
    desc: 'Exceptional Swiss timepiece with mother of pearl dial and factory-set diamond indices. Hand-finished movement, gold-tone mesh bracelet, and sapphire crystal. A true piece of elegance.',
    rating: '★★★★★ (29 reviews)'
  },
  watch4: {
    img: 'images/watch-wenger.png',
    brand: 'Wenger',
    name: 'Deep Diver 300m',
    desc: 'Professional dive watch engineered for underwater performance. Black PVD-coated stainless steel case (42mm), ceramic unidirectional bezel, luminescent hands and indices, helium escape valve, and black rubber strap.',
    rating: '★★★★★ (67 reviews)'
  },
  watch5: {
    img: 'images/watch-mondaine.png',
    brand: 'Mondaine',
    name: 'SBB Classic Design',
    desc: 'An extraordinarily clean design from the official Swiss Railways (SBB). Features a brushed steel case, black leather strap, and the famous red second hand. A true icon of Swiss design heritage.',
    rating: '★★★★★ (34 reviews)'
  },
  watch6: {
    img: 'images/watch-jowissa.png',
    brand: 'Jowissa',
    name: 'Faceted Sapphire Blue',
    desc: 'A stunning Swiss fashion piece with a faceted sapphire-style crystal. Yellow gold-plated case paired with a vibrant blue leather strap. Unique, bold, and hand-assembled in Switzerland.',
    rating: '★★★★★ (15 reviews)'
  }
};

function openModal(id) {
  const data = watchData[id];
  if (!data) return;

  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <img src="${data.img}" alt="${data.name}" />
    <div class="modal__info">
      <span class="product-card__brand">${data.brand}</span>
      <h3 class="product-card__name">${data.name}</h3>
      <p class="product-card__desc">${data.desc}</p>
      <div class="product-card__rating">${data.rating}</div>
      <a href="#contact" class="btn btn--primary btn--full" onclick="closeModal()">Inquire About This Watch</a>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ---------- ACTIVE NAV HIGHLIGHT ----------
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.navbar__links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.classList.remove('active-link');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active-link');
    }
  });
}, { passive: true });

