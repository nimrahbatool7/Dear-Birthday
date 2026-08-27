/**
 * Case Archive — Frontend interactions
 * Change RECIPIENT_NAME to personalize the site.
 */
const RECIPIENT_NAME = 'Casey';

const BALLOON_MESSAGES = [
  'You make ordinary days less ordinary.',
  "Here's to another chapter.",
  'Still one of my favorite people.',
  'Some archives are built on laughter.',
  'Thank you for being you.',
  'Every page here has your name on it.',
];

const BALLOON_COLORS = [
  '#6B1D2F', '#B8737B', '#F5EBE0', '#C4A482', '#4A5340', '#6B1D2F',
];

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  applyName();
  initHero();
  initPolaroids();
  initPostcard();
  initEnvelopes();
  initHiddenItems();
  initGift();
  initCake();
  initLightbox();
  initParallax();
  initDust();
});

function applyName() {
  document.querySelectorAll('[data-name]').forEach(el => {
    el.textContent = RECIPIENT_NAME;
  });
}

function showToast(message, duration = 3500) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, duration);
}

function revealSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.classList.remove('hidden-section');
    requestAnimationFrame(() => section.classList.add('revealed'));
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── Hero & Open Archive ─── */
function initHero() {
  const openBtn = document.getElementById('openArchiveBtn');
  const heroPaper = document.getElementById('heroPaper');
  const overlay = document.getElementById('envelopeOverlay');
  const flap = document.getElementById('envelopeFlap');
  const letter = document.getElementById('envelopeLetter');

  openBtn.addEventListener('click', () => {
    heroPaper.classList.add('lifting');
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');

    setTimeout(() => flap.classList.add('open'), 400);
    setTimeout(() => letter.classList.add('slide-out'), 900);

    setTimeout(() => {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      flap.classList.remove('open');
      letter.classList.remove('slide-out');

      revealSection('memories');
      setTimeout(() => scrollToSection('memories'), 200);
      setTimeout(() => revealSection('secrets'), 800);
      setTimeout(() => revealSection('gift'), 1200);
      setTimeout(() => revealSection('celebration'), 1600);
    }, 2800);
  });

  document.getElementById('waxSealBtn').addEventListener('click', () => {
    showNote('Sealed with intention. Opened with love.');
  });

  document.getElementById('stampBtn').addEventListener('click', () => {
    showToast('Approved by the archive keeper.');
  });
}

/* ─── Polaroids ─── */
function initPolaroids() {
  document.querySelectorAll('.polaroid').forEach(polaroid => {
    const front = polaroid.querySelector('.polaroid-front');
    const flipBtn = polaroid.querySelector('.flip-corner');
    const img = polaroid.querySelector('.polaroid-front img');
    const caption = polaroid.querySelector('.polaroid-caption')?.textContent || '';

    front.addEventListener('click', (e) => {
      if (e.target.closest('.flip-corner')) return;
      openLightbox(img.src, caption);
    });

    flipBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      polaroid.classList.toggle('flipped');
    });
  });
}

/* ─── Postcard ─── */
function initPostcard() {
  const postcard = document.getElementById('postcard');
  document.getElementById('postcardFlipBtn').addEventListener('click', () => {
    postcard.classList.toggle('flipped');
  });
}

/* ─── Secret Envelopes ─── */
function initEnvelopes() {
  document.querySelectorAll('.mini-envelope').forEach(env => {
    env.addEventListener('click', () => {
      if (env.classList.contains('opening')) return;
      env.classList.add('opening');
      const note = env.dataset.note;
      setTimeout(() => {
        showNote(note);
        env.classList.remove('opening');
      }, 600);
    });
  });
}

function initHiddenItems() {
  document.getElementById('flowerBtn').addEventListener('click', () => {
    showNote('Pressed between pages — a memory that never wilted.');
  });

  document.getElementById('clockBtn').addEventListener('click', () => {
    showNote('Time passes. Some things only grow sweeter.');
  });
}

function showNote(text) {
  const reveal = document.getElementById('noteReveal');
  document.getElementById('noteText').textContent = text;
  reveal.classList.add('active');
}

document.getElementById('noteClose').addEventListener('click', () => {
  document.getElementById('noteReveal').classList.remove('active');
});

document.getElementById('noteReveal').addEventListener('click', (e) => {
  if (e.target.id === 'noteReveal') {
    e.target.classList.remove('active');
  }
});

/* ─── Gift & Balloons ─── */
function initGift() {
  const giftBox = document.getElementById('giftBox');
  const giftStage = document.getElementById('giftStage');
  const balloonField = document.getElementById('balloonField');
  const confettiField = document.getElementById('confettiField');
  const giftIntro = document.getElementById('giftIntro');
  const giftMessage = document.getElementById('giftMessage');
  let opened = false;

  giftBox.addEventListener('click', () => {
    if (opened) return;
    opened = true;

    giftBox.classList.add('shaking');
    setTimeout(() => giftBox.classList.remove('shaking'), 500);

    setTimeout(() => {
      giftBox.classList.add('opened');
      giftStage.classList.add('glowing');
      giftIntro.textContent = 'Something wonderful awaits.';
      spawnBalloons(balloonField);
      spawnConfetti(confettiField);
      giftMessage.classList.remove('hidden');
      balloonField.setAttribute('aria-hidden', 'false');

      setTimeout(() => scrollToSection('celebration'), 1500);
    }, 600);
  });
}

function spawnBalloons(container) {
  container.innerHTML = '';
  const count = 6;
  const stageRect = container.parentElement.getBoundingClientRect();

  for (let i = 0; i < count; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.background = BALLOON_COLORS[i % BALLOON_COLORS.length];
    balloon.style.left = `${15 + (i * 13)}%`;
    balloon.style.animationDelay = `${i * 0.4}s`;
    balloon.style.animationDuration = `${5 + Math.random() * 3}s`;

    balloon.addEventListener('click', (e) => {
      e.stopPropagation();
      if (balloon.classList.contains('pop')) return;

      balloon.classList.add('pop');
      const msg = BALLOON_MESSAGES[i % BALLOON_MESSAGES.length];
      const note = document.createElement('div');
      note.className = 'balloon-note';
      note.textContent = msg;
      note.style.left = balloon.style.left;
      note.style.top = '40%';
      container.appendChild(note);

      setTimeout(() => note.remove(), 4000);
    });

    container.appendChild(balloon);

    /* Rise animation */
    requestAnimationFrame(() => {
      balloon.style.transition = 'bottom 2s cubic-bezier(0.34, 1.2, 0.64, 1)';
      balloon.style.bottom = `${50 + Math.random() * 30}%`;
    });
  }
}

function spawnConfetti(container) {
  container.innerHTML = '';
  const colors = ['#6B1D2F', '#B8737B', '#C4A482', '#D4AF37', '#4A5340', '#F5EBE0'];

  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.background = colors[i % colors.length];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${20 + Math.random() * 30}%`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.animationDuration = `${2 + Math.random() * 2}s`;
    if (Math.random() > 0.5) piece.style.borderRadius = '50%';
    container.appendChild(piece);
  }

  setTimeout(() => { container.innerHTML = ''; }, 5000);
}

/* ─── Cake & Candles ─── */
function initCake() {
  const cakeContainer = document.getElementById('cakeContainer');
  const candles = document.querySelectorAll('.candle');
  const wishPrompt = document.getElementById('wishPrompt');
  const birthdayReveal = document.getElementById('birthdayReveal');
  const wishMade = document.getElementById('wishMade');
  const celebration = document.getElementById('celebration');

  let lit = false;
  let litCount = 0;
  let blownCount = 0;

  cakeContainer.addEventListener('click', (e) => {
    if (e.target.closest('.candle')) return;

    if (!lit) {
      lightCandlesSequentially();
    }
  });

  function lightCandlesSequentially() {
    lit = true;
    candles.forEach((candle, i) => {
      setTimeout(() => {
        candle.classList.add('lit');
        litCount++;
        if (litCount === candles.length) {
          wishPrompt.classList.remove('hidden');
          birthdayReveal.classList.remove('hidden');
        }
      }, i * 300);
    });
  }

  candles.forEach(candle => {
    candle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!candle.classList.contains('lit') || candle.classList.contains('out')) return;

      candle.classList.remove('lit');
      candle.classList.add('out');

      const smoke = document.createElement('div');
      smoke.className = 'candle-smoke';
      candle.appendChild(smoke);
      setTimeout(() => smoke.remove(), 1000);

      blownCount++;

      if (blownCount === candles.length) {
        wishPrompt.classList.add('hidden');
        celebration.classList.add('dimmed');

        setTimeout(() => {
          birthdayReveal.classList.add('hidden');
          wishMade.classList.remove('hidden');
          celebration.classList.remove('dimmed');
        }, 1200);
      }
    });
  });
}

/* ─── Lightbox ─── */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightboxClose');

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxCaption').textContent = caption;
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
}

/* ─── Parallax & Tilt ─── */
function initParallax() {
  document.querySelectorAll('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `rotate(${x * 4}deg) translateY(${y * -4}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('.bunting-deco, .lights-deco, .vine-deco').forEach(el => {
      el.style.transform = `translateY(${scrollY * 0.03}px)`;
    });
  }, { passive: true });
}

/* ─── Floating dust particles ─── */
function initDust() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const container = document.querySelector('.dust-particles');
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('span');
    particle.style.cssText = `
      position: absolute;
      width: ${1 + Math.random() * 2}px;
      height: ${1 + Math.random() * 2}px;
      background: rgba(196, 164, 130, ${0.2 + Math.random() * 0.3});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: dustFloat ${15 + Math.random() * 15}s linear infinite;
      animation-delay: ${Math.random() * 10}s;
    `;
    container.appendChild(particle);
  }
}
