// NAV SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 80);
}, { passive: true });

// MOBILE MENU
const burger = document.getElementById('navBurger');
const links = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  links.classList.toggle('active');
});

links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('active');
    links.classList.remove('active');
  });
});

// REVEAL ON SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// STATEMENT — words light up in sequence, loop forever
const stmt = document.getElementById('statement');
const stmtWords = Array.from(stmt.querySelectorAll('[data-w]')).sort((a, b) => +a.dataset.w - +b.dataset.w);
let stmtRunning = false;

function loopStatement() {
  let i = 0;
  function step() {
    if (!stmtRunning) return;

    if (i === 0) {
      stmtWords.forEach(w => w.classList.remove('lit'));
    }

    if (i < stmtWords.length) {
      stmtWords[i].classList.add('lit');
      i++;
      setTimeout(step, 300);
    } else {
      setTimeout(() => {
        stmtWords.forEach(w => w.classList.remove('lit'));
        setTimeout(() => { i = 0; step(); }, 800);
      }, 2000);
    }
  }
  step();
}

const stmtObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !stmtRunning) {
      stmtRunning = true;
      loopStatement();
    } else if (!e.isIntersecting) {
      stmtRunning = false;
      stmtWords.forEach(w => w.classList.remove('lit'));
    }
  });
}, { threshold: 0.3 });

stmtObserver.observe(stmt);

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = nav.offsetHeight;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    }
  });
});

// EMAILJS
emailjs.init('aj2qcDdS4arypRjKq');

// CONTACT FORM → EMAIL
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;

  if (f.querySelector('[name="website"]').value) return;

  const nombre = f.querySelector('[name="nombre"]').value.trim();
  const email = f.querySelector('[name="email"]').value.trim();
  const telefono = f.querySelector('[name="telefono"]').value.trim();
  const producto = f.querySelector('[name="producto"]').value;
  const mensaje = f.querySelector('[name="mensaje"]').value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Completa los campos obligatorios.');
    return;
  }

  const btn = f.querySelector('button');
  btn.textContent = 'ENVIANDO...';
  btn.disabled = true;

  emailjs.send('service_pwyzshr', 'template_zl8tnoh', {
    nombre,
    email,
    telefono,
    producto,
    mensaje
  }).then(() => {
    f.reset();
    btn.textContent = '¡ENVIADO!';
    btn.style.background = '#25d366';
    btn.style.borderColor = '#25d366';
    setTimeout(() => {
      btn.textContent = 'ENVIAR';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 3000);
  }).catch(() => {
    btn.textContent = 'ERROR';
    btn.style.background = '#ec2429';
    btn.style.borderColor = '#ec2429';
    setTimeout(() => {
      btn.textContent = 'ENVIAR';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 3000);
  });
});
