// I18N — ES/EN dictionary + switcher
const i18n = {
  es: {
    'nav.products': 'Productos',
    'nav.about': 'Nosotros',
    'nav.process': 'Proceso',
    'nav.contact': 'Contacto',
    'nav.cta': 'COTIZAR',
    'lang.toggle': 'EN',
    'lang.aria': 'Switch to English',
    'hero.tag': 'FABRICANTES — MONTERREY, MÉXICO',
    'hero.h1.line1': 'PORTAGAFETES',
    'hero.h1.line2': 'SUBLIMADOS.',
    'hero.sub': 'Impresión full color de alta definición.<br>Tu marca en cada cuello del país.',
    'hero.cta.primary': 'COTIZAR',
    'hero.cta.secondary': 'EXPLORAR',
    'ticker.sublimation': 'SUBLIMACIÓN',
    'ticker.lanyards': 'LANYARDS',
    'ticker.lanyardsAlt': 'PORTAGAFETES',
    'ticker.custom': 'PERSONALIZACIÓN',
    'ticker.hd': 'ALTA DEFINICIÓN',
    'ticker.express': 'SERVICIO EXPRESS',
    'marcas.label': 'CLIENTES',
    'marcas.h2': 'MARCAS QUE<br>CONFÍAN EN<br><span>HINCHAZ.</span>',
    'marcas.intro': 'Hemos producido promocionales textiles —etiquetas, pulseras, parches, lanyards y cintas— para casas de moda, marcas deportivas, corporativos y eventos institucionales. Estas son algunas.',
    'var.label': 'VARIACIONES',
    'var.h2': 'COMBINA LOS<br>HERRAJES QUE<br><span>NECESITES.</span>',
    'var.intro': 'Cada portagafete se arma a medida. Elige la combinación de herrajes que mejor se adapte a tu uso.',
    'var.f1': 'Destapador Cuadrado · Bandola Normal',
    'var.f2': 'Hebilla Antiahorcamiento · Bandola Perico · Porta USB',
    'var.f3': 'Bandola Normal',
    'var.f4': 'Hebilla Antiahorcamiento · Hebilla Samsonite · Bandola Perico · Porta USB',
    'var.f5': 'Bandola Perico',
    'var.f6': 'Hebilla Samsonite · Destapador Bandola',
    'var.f7': 'Hebilla Samsonite · Bandola Perico',
    'var.f8': 'Destapador Cuadrado · Bandola Perico',
    'intro.label': 'DESDE 2006',
    'intro.h2': 'LA CINTA QUE<br>LLEVA TU<br><span>MARCA.</span>',
    'intro.p1': 'Somos <strong>Textiles Hinchaz</strong>. Fabricamos portagafetes sublimados con tecnología de impresión de alta definición: colores vivos, durabilidad industrial y acabado profesional.',
    'intro.p2': 'Cada lanyard es una pieza de comunicación. No entregamos genéricos — creamos herramientas de branding que identifican, conectan y posicionan tu marca.',
    'intro.founded': 'Fundación',
    'intro.years': 'Años',
    'intro.deliveryNum': '5 días',
    'intro.delivery': 'Entrega',
    'prod.r1.title': 'SUBLIMADOS',
    'prod.r1.text': 'Impresión full color a 1440 DPI. Sin límite de colores. Tu diseño exacto, sin compromisos. Colores vivos que no se destiñen con el uso ni el lavado.',
    'prod.r1.cta': 'COTIZAR',
    'prod.r2.title': 'BORDADOS',
    'prod.r2.text': 'Bordado de alta calidad integrado en la cinta. Textura premium, resistencia industrial. Ideal para uso corporativo diario y eventos de larga duración.',
    'prod.r2.cta': 'COTIZAR',
    'statement.w1': 'TU',
    'statement.w2': 'LOGO',
    'statement.w3': 'EN',
    'statement.w4': 'CADA',
    'statement.w5': 'CUELLO',
    'statement.w6': 'DEL',
    'statement.w7': 'PAÍS.',
    'uses.h2': '¿PARA QUÉ<br>SE <span>USAN?</span>',
    'uses.u1.title': '01 — EVENTOS',
    'uses.u1.text': 'Conferencias, expos, conciertos y ferias. Identifica a tu equipo y asistentes con estilo.',
    'uses.u2.title': '02 — CORPORATIVO',
    'uses.u2.text': 'Credenciales de empresa, accesos y control de personal. Imagen profesional diaria.',
    'uses.u3.title': '03 — MARKETING',
    'uses.u3.text': 'Tu logo en el cuello de miles. Publicidad ambulante que trabaja las 24 horas por tu marca.',
    'uses.u4.title': '04 — INSTITUCIONAL',
    'uses.u4.text': 'Escuelas, hospitales, gobierno. Identificación segura y profesional para cualquier institución.',
    'specs.s1.title': 'MATERIAL',
    'specs.s1.text': 'Poliéster de alta densidad con cinta Cintelastic. Resistente al uso diario y lavado.',
    'specs.s2.title': 'IMPRESIÓN',
    'specs.s2.text': 'Sublimación full color a 1440 DPI. Sin límite de colores. Tu diseño exacto.',
    'specs.s3.title': 'MEDIDAS',
    'specs.s3.text': 'Ancho: 2 cm y 2.5 cm. Largo: 45 cm y 90 cm. Medidas especiales disponibles.',
    'specs.s4.title': 'ACCESORIOS',
    'specs.s4.text': 'Gancho giratorio, clip de seguridad, broche de presión o mosquetón. Tú eliges.',
    'process.title': 'CÓMO FUNCIONA',
    'process.s1.title': 'ENVÍAS TU DISEÑO',
    'process.s1.text': 'WhatsApp, email o llamada. Mándanos tu logo y te armamos la muestra digital.',
    'process.s2.title': 'APRUEBAS LA MUESTRA',
    'process.s2.text': 'Te enviamos render digital para tu aprobación. Nada se produce sin tu OK.',
    'process.s3.title': 'PRODUCCIÓN',
    'process.s3.text': 'Sublimación de alta definición en nuestra planta de Monterrey. Control de calidad pieza por pieza.',
    'process.s4.title': 'ENTREGA',
    'process.s4.text': '5 días hábiles máximo. Envíos a toda la República Mexicana.',
    'cta.label': 'SERVICIO SUPER EXPRESS',
    'cta.h2': 'ENTREGA<br>EL MISMO DÍA.',
    'cta.sub': 'Las urgencias no avisan. Solicita entrega el mismo día al realizar tu pedido y nosotros nos encargamos del resto.',
    'cta.d1': 'Realiza tu pedido por WhatsApp o teléfono',
    'cta.d2': 'Solicita el servicio Super Express al confirmar',
    'cta.d3': 'Recibe tu pedido el mismo día',
    'cta.btn': 'SOLICITAR EXPRESS',
    'contact.h2': 'COTIZA<br>AHORA.',
    'contact.intro': 'Sin compromiso. Sin cantidades mínimas ridículas. Cuéntanos qué necesitas y te respondemos el mismo día.',
    'contact.plant': 'Planta',
    'contact.cell': 'Celular',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.location': 'Ubicación',
    'contact.address': 'Tacuba 1654, Centro<br>64000 Monterrey, N.L., México',
    'contact.hours': 'Horario',
    'contact.hoursText': 'Lunes a Viernes, 10:00 a 17:00',
    'form.name': 'NOMBRE *',
    'form.email': 'EMAIL *',
    'form.phone': 'TELÉFONO',
    'form.type': 'TIPO DE PORTAGAFETE',
    'form.type.sub': 'SUBLIMADO',
    'form.type.woven': 'TEJIDO',
    'form.type.plain': 'LISO / SIN IMPRESIÓN',
    'form.type.other': 'OTRO',
    'form.message': 'CUÉNTANOS QUÉ NECESITAS *',
    'form.submit': 'ENVIAR',
    'form.sending': 'ENVIANDO...',
    'form.sent': '¡ENVIADO!',
    'form.error': 'ERROR',
    'form.required': 'Completa los campos obligatorios.',
    'footer.copy': '© 2006–2026 Textiles Hinchaz, S.A. de C.V. — Monterrey, N.L., México',
  },
  en: {
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.cta': 'GET A QUOTE',
    'lang.toggle': 'ES',
    'lang.aria': 'Cambiar a español',
    'hero.tag': 'MANUFACTURERS — MONTERREY, MEXICO',
    'hero.h1.line1': 'SUBLIMATED',
    'hero.h1.line2': 'LANYARDS.',
    'hero.sub': 'Full-color high-definition printing.<br>Your brand on every neck in the country.',
    'hero.cta.primary': 'GET A QUOTE',
    'hero.cta.secondary': 'EXPLORE',
    'ticker.sublimation': 'SUBLIMATION',
    'ticker.lanyards': 'LANYARDS',
    'ticker.lanyardsAlt': 'BADGE HOLDERS',
    'ticker.custom': 'CUSTOMIZATION',
    'ticker.hd': 'HIGH DEFINITION',
    'ticker.express': 'EXPRESS SERVICE',
    'marcas.label': 'CLIENTS',
    'marcas.h2': 'BRANDS THAT<br>TRUST<br><span>HINCHAZ.</span>',
    'marcas.intro': 'We have produced textile promotionals —labels, bracelets, patches, lanyards, and ribbons— for fashion houses, sports brands, corporate, and institutional events. Here are some.',
    'var.label': 'VARIATIONS',
    'var.h2': 'COMBINE THE<br>HARDWARE YOU<br><span>NEED.</span>',
    'var.intro': 'Every lanyard is built to order. Pick the hardware combination that best fits how you will use it.',
    'var.f1': 'Square Bottle Opener · Standard Strap',
    'var.f2': 'Safety Buckle · Parrot Strap · USB Holder',
    'var.f3': 'Standard Strap',
    'var.f4': 'Safety Buckle · Samsonite Buckle · Parrot Strap · USB Holder',
    'var.f5': 'Parrot Strap',
    'var.f6': 'Samsonite Buckle · Strap Bottle Opener',
    'var.f7': 'Samsonite Buckle · Parrot Strap',
    'var.f8': 'Square Bottle Opener · Parrot Strap',
    'intro.label': 'SINCE 2006',
    'intro.h2': 'THE STRAP THAT<br>CARRIES YOUR<br><span>BRAND.</span>',
    'intro.p1': 'We are <strong>Textiles Hinchaz</strong>. We manufacture sublimated lanyards with high-definition printing: vivid color, industrial durability, and a professional finish.',
    'intro.p2': 'Every lanyard is a piece of communication. We do not deliver generics — we build branding tools that identify, connect, and position your brand.',
    'intro.founded': 'Founded',
    'intro.years': 'Years',
    'intro.deliveryNum': '5 days',
    'intro.delivery': 'Delivery',
    'prod.r1.title': 'SUBLIMATED',
    'prod.r1.text': 'Full-color printing at 1440 DPI. No color limit. Your exact design, no compromise. Vivid colors that do not fade with use or washing.',
    'prod.r1.cta': 'GET A QUOTE',
    'prod.r2.title': 'EMBROIDERED',
    'prod.r2.text': 'High-quality embroidery woven into the strap. Premium texture, industrial durability. Ideal for daily corporate use and long-running events.',
    'prod.r2.cta': 'GET A QUOTE',
    'statement.w1': 'YOUR',
    'statement.w2': 'LOGO',
    'statement.w3': 'ON',
    'statement.w4': 'EVERY',
    'statement.w5': 'NECK',
    'statement.w6': 'IN THE',
    'statement.w7': 'COUNTRY.',
    'uses.h2': 'WHAT ARE<br>THEY <span>FOR?</span>',
    'uses.u1.title': '01 — EVENTS',
    'uses.u1.text': 'Conferences, expos, concerts, and trade fairs. Identify your team and attendees with style.',
    'uses.u2.title': '02 — CORPORATE',
    'uses.u2.text': 'Company badges, access control, and personnel ID. A professional image every day.',
    'uses.u3.title': '03 — MARKETING',
    'uses.u3.text': 'Your logo on thousands of necks. Walking advertising that works 24 hours a day for your brand.',
    'uses.u4.title': '04 — INSTITUTIONAL',
    'uses.u4.text': 'Schools, hospitals, government. Secure and professional ID for any institution.',
    'specs.s1.title': 'MATERIAL',
    'specs.s1.text': 'High-density polyester with Cintelastic tape. Resistant to daily use and washing.',
    'specs.s2.title': 'PRINTING',
    'specs.s2.text': 'Full-color sublimation at 1440 DPI. No color limit. Your exact design.',
    'specs.s3.title': 'SIZES',
    'specs.s3.text': 'Width: 2 cm and 2.5 cm. Length: 45 cm and 90 cm. Custom sizes available.',
    'specs.s4.title': 'ACCESSORIES',
    'specs.s4.text': 'Swivel hook, safety clip, snap closure, or carabiner. Your choice.',
    'process.title': 'HOW IT WORKS',
    'process.s1.title': 'SEND YOUR DESIGN',
    'process.s1.text': 'WhatsApp, email or phone. Send us your logo and we build the digital sample.',
    'process.s2.title': 'APPROVE THE SAMPLE',
    'process.s2.text': 'We send a digital render for your approval. Nothing goes into production without your OK.',
    'process.s3.title': 'PRODUCTION',
    'process.s3.text': 'High-definition sublimation at our Monterrey plant. Quality control piece by piece.',
    'process.s4.title': 'DELIVERY',
    'process.s4.text': 'Five business days max. Shipping anywhere in Mexico.',
    'cta.label': 'SUPER EXPRESS SERVICE',
    'cta.h2': 'SAME-DAY<br>DELIVERY.',
    'cta.sub': "Urgent doesn't ask permission. Request same-day delivery when placing your order and we handle the rest.",
    'cta.d1': 'Place your order by WhatsApp or phone',
    'cta.d2': 'Request Super Express service when confirming',
    'cta.d3': 'Receive your order the same day',
    'cta.btn': 'REQUEST EXPRESS',
    'contact.h2': 'GET A<br>QUOTE.',
    'contact.intro': 'No commitment. No absurd minimums. Tell us what you need and we reply the same day.',
    'contact.plant': 'Plant',
    'contact.cell': 'Mobile',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.address': 'Tacuba 1654, Centro<br>64000 Monterrey, N.L., Mexico',
    'contact.hours': 'Hours',
    'contact.hoursText': 'Monday to Friday, 10:00 to 17:00',
    'form.name': 'NAME *',
    'form.email': 'EMAIL *',
    'form.phone': 'PHONE',
    'form.type': 'LANYARD TYPE',
    'form.type.sub': 'SUBLIMATED',
    'form.type.woven': 'WOVEN',
    'form.type.plain': 'PLAIN / NO PRINT',
    'form.type.other': 'OTHER',
    'form.message': 'TELL US WHAT YOU NEED *',
    'form.submit': 'SEND',
    'form.sending': 'SENDING...',
    'form.sent': 'SENT!',
    'form.error': 'ERROR',
    'form.required': 'Please complete the required fields.',
    'footer.copy': '© 2006–2026 Textiles Hinchaz, S.A. de C.V. — Monterrey, N.L., Mexico',
  },
};

let currentLang = (() => {
  const saved = localStorage.getItem('hinchaz_lang_v2');
  return (saved === 'es' || saved === 'en') ? saved : 'es';
})();

const t = (key) => (i18n[currentLang] && i18n[currentLang][key]) || key;

function applyLang() {
  const dict = i18n[currentLang];
  document.documentElement.setAttribute('lang', currentLang === 'en' ? 'en' : 'es-MX');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = dict[el.dataset.i18nHtml];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const v = dict[el.dataset.i18nPlaceholder];
    if (v != null) el.setAttribute('placeholder', v);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const v = dict[el.dataset.i18nAriaLabel];
    if (v != null) el.setAttribute('aria-label', v);
  });
}

applyLang();

const langBtn = document.getElementById('navLang');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('hinchaz_lang_v2', currentLang);
    applyLang();
  });
}

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
    alert(t('form.required'));
    return;
  }

  const btn = f.querySelector('button');
  btn.textContent = t('form.sending');
  btn.disabled = true;

  emailjs.send('service_pwyzshr', 'template_zl8tnoh', {
    nombre,
    email,
    telefono,
    producto,
    mensaje
  }).then(() => {
    f.reset();
    btn.textContent = t('form.sent');
    btn.style.background = '#25d366';
    btn.style.borderColor = '#25d366';
    setTimeout(() => {
      btn.textContent = t('form.submit');
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 3000);
  }).catch(() => {
    btn.textContent = t('form.error');
    btn.style.background = '#ec2429';
    btn.style.borderColor = '#ec2429';
    setTimeout(() => {
      btn.textContent = t('form.submit');
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 3000);
  });
});
