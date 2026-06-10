// ============================================================
//  ZÜRICH TIME & GIFTS — Main JavaScript
// ============================================================

// ---------- NAVBAR SCROLL ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}, { passive: true });

// ---------- HAMBURGER MENU ----------
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

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

// ---------- SCROLL REVEAL ----------
function createObserver() {
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.product-card, .souvenir-card, .usp-card, .testimonial-card, .store-info__block, .contact-card')
    .forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = `opacity 0.55s ease ${i * 0.07}s, transform 0.55s ease ${i * 0.07}s`;
      observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', createObserver);

// Add revealed class style
(function() {
  const style = document.createElement('style');
  style.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
})();

// ---------- CONTACT FORM ----------
function handleForm(e) {
  e.preventDefault();
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const btn     = form.querySelector('button[type="submit"]');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate async submission
  setTimeout(() => {
    success.textContent = '✅ Thank you! We'll be in touch shortly.';
    form.reset();
    btn.textContent = 'Send Message ✈️';
    btn.disabled = false;
    setTimeout(() => { success.textContent = ''; }, 6000);
  }, 1400);
}

// ---------- QUICK VIEW MODAL ----------
const watchData = {
  watch1: {
    img:   'images/watch-1.png',
    brand: 'Swiss Heritage',
    name:  'Classic Automatik Date',
    desc:  'A timeless Swiss dress watch featuring an ETA automatic movement, silver stainless-steel case (38mm), white lacquered dial, and premium brown leather strap. Sapphire crystal, date window, 50m water resistance.',
    orig:  'CHF 1,240',
    sale:  'CHF 745',
    rating:'★★★★★ (48 reviews)'
  },
  watch2: {
    img:   'images/watch-2.png',
    brand: 'Helvetia Sport',
    name:  'Blue Chronograph Pro',
    desc:  'High-performance Swiss sport chronograph with a stunning blue sunburst dial, tachymeter bezel, and solid stainless steel bracelet. Features an ETA Valjoux 7750 movement, 200m water resistance, and luminous hands.',
    orig:  'CHF 3,850',
    sale:  'CHF 2,190',
    rating:'★★★★★ (112 reviews)'
  },
  watch3: {
    img:   'images/watch-3.png',
    brand: 'Prestige Genève',
    name:  'Rose Gold Diamond Edition',
    desc:  'Exceptional 18K rose gold timepiece with champagne dial and factory-set diamond indices. Hand-finished movement, brown alligator leather strap, and solid case back with serial engraving. A true heirloom piece.',
    orig:  'CHF 8,200',
    sale:  'CHF 5,330',
    rating:'★★★★½ (29 reviews)'
  },
  watch4: {
    img:   'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=480&q=80',
    brand: 'Alpstein Dive',
    name:  'Deep Diver 300m',
    desc:  'Professional dive watch engineered for underwater performance. Black PVD-coated stainless steel case (42mm), ceramic unidirectional bezel, luminescent hands and indices, helium escape valve, and black rubber strap.',
    orig:  'CHF 2,100',
    sale:  'CHF 1,050',
    rating:'★★★★★ (67 reviews)'
  },
  watch5: {
    img:   'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=480&q=80',
    brand: 'Lac Léman',
    name:  'Ultra-Slim Moonphase',
    desc:  'An extraordinarily thin titanium-cased watch with a blue soleil dial. Features a hand-wound movement with moonphase complication, sapphire crystal case back, and a grey NATO strap. Only 289 pieces made.',
    orig:  'CHF 4,600',
    sale:  'CHF 2,870',
    rating:'★★★★★ (34 reviews)'
  },
  watch6: {
    img:   'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=480&q=80',
    brand: 'Burgdorf & Cie.',
    name:  'Grand Complication Gold',
    desc:  'A museum-quality Swiss pocket-watch converted to wristwatch format. Yellow gold open-worked case showing the mechanical movement in all its glory. Unique hand-wound movement with perpetual calendar. Certificate of antique authenticity included.',
    orig:  'CHF 12,500',
    sale:  'CHF 6,875',
    rating:'★★★★★ (15 reviews)'
  }
};

function openModal(id) {
  const data    = watchData[id];
  if (!data) return;

  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <img src="${data.img}" alt="${data.name}" />
    <div class="modal__info">
      <span class="product-card__brand">${data.brand}</span>
      <h3 class="product-card__name">${data.name}</h3>
      <p class="product-card__desc">${data.desc}</p>
      <div class="product-card__prices">
        <span class="price--original">${data.orig}</span>
        <span class="price--sale">${data.sale}</span>
      </div>
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

// active link style
(function() {
  const s = document.createElement('style');
  s.textContent = '.active-link { color: var(--gold-light) !important; } .active-link::after { width: 100% !important; }';
  document.head.appendChild(s);
})();
