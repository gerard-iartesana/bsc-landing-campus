/* ===== BSC Campus Landing — App JS ===== */

// --- i18n System ---
const translations = {
  cat: {
    nav_casal: "Introducció", nav_campus: "Tecnificació", nav_activitats: "Activitats", nav_preus: "Horaris i Preus",
    nav_equip: "L'Equip", nav_faq: "FAQ", nav_inscripcio: "Inscriu-te",
    hero_pre: "CAMPUS D'ESTIU 2026",
    hero_title: "Campus d'Estiu 2026 de <em>vòlei platja</em> a Premià de Dalt",
    hero_sub: "Un estiu actiu a la sorra perquè infants i joves gaudeixin, aprenguin i evolucionin amb el vòlei platja al BSC Center.",
    hero_cta: "INSCRIURE A INTRODUCCIÓ", hero_cta2: "INSCRIURE A TECNIFICACIÓ", hero_wa: "Demanar informació per WhatsApp",
    badge: "Places limitades!",
    qi_dates_t: "Dates", qi_dates: "Del 30 de juny al 24 de juliol · Torns setmanals",
    qi_ages_t: "Edats", qi_ages: "De 6 a 18 anys · Grups per edat",
    qi_time_t: "Horari", qi_time: "De dilluns a divendres, 8h a 15h · Acollida i menjador opcionals",
    qi_loc_t: "On", qi_loc: "BSC Center · Carrer Montseny, 19 · Premià de Dalt",
    about_pre: "TRIA EL PROGRAMA IDEAL",
    about_title: "Dos programes, un <em>objectiu comú</em>: gaudir i créixer a la sorra.",
    about_p1: "Aquest estiu no només faran esport: guanyaran confiança, amistats i ganes de seguir millorant a la sorra.",
    about_p2: "",
    about_p3: "",
    casal_title: "Introducció — 6 a 14 anys", casal_desc: "Per a infants que volen descobrir el vòlei platja d'una manera divertida, social i segura.",
    casal_list: "Jocs i activitats a la sorra|Introducció al vòlei platja|Activitats d'aigua|Competició cada divendres|Excursió setmanal a l'Illa Fantasia",
    casal_hours: "De dilluns a divendres, de 8h a 15h", casal_opts: "Acollida de 8h a 9h · Menjador de 13h a 15h (opcional, amb dinar de casa i monitoratge)",
    campus_title: "Tecnificació — 13 a 18 anys", campus_desc: "Per a jugadors i jugadores que volen fer un salt real de nivell aquest estiu.",
    campus_list: "Tècnica individual|Tàctica de joc|Situacions reals de competició|Preparació física específica|Mentalitat competitiva|Competició setmanal",
    campus_ideal: "Ideal per a joves que ja juguen, competeixen o volen començar a entrenar amb més estructura i confiança.",
    vp1_t: "Esport real", vp1: "Tècnica de vòlei platja amb entrenadors titulats",
    vp2_t: "Diversió garantida", vp2: "Jocs, gimcanes i activitats cada dia",
    vp3_t: "A prop de casa", vp3: "Carrer Montseny, 19, Premià de Dalt",
    sched_pre: "UN DIA AL CAMPUS", sched_title: "Així serà el seu <em>dia a dia</em>.",
    act_pre: "ACTIVITATS I INSTAL·LACIONS", act_title: "Tot el que necessiten, en un <em>sol lloc</em>.",
    a1_t: "VÒLEI PLATJA", a1_s: "8 pistes de sorra", a1_p: "Aprenen tècnica i tàctica amb els millors entrenadors del país.",
    a2_t: "ZONA SOCIAL", a2_s: "Zona chillout i terrassa", a2_p: "Espai per descansar, socialitzar i fer comunitat.",
    a3_t: "ZONA SOCIAL", a3_s: "Bar-terrassa i espais", a3_p: "Per descansar i fer comunitat.",
    a4_t: "ZONA SOCIAL", a4_s: "Bar-terrassa i espais", a4_p: "Per descansar i fer comunitat.",
    price_pre: "TORNS I PREUS",
    price_title: "Tria les setmanes que millor <em>encaixin</em> amb el vostre estiu.",
    price_sub: "Pots inscriure'l a un torn, a diversos o a tots. Descomptes per germans i tarifa preferent per a abonats.",
    turn: "Torn", price_cta: "Inscriure'm",
    disc_title: "💛 Descomptes disponibles",
    disc1: "10% per a germans", disc2: "Tarifa preferent abonats BSC", disc3: "15% early bird fins al 31 de maig",
    why_pre: "PER QUÈ CONFIAR EN BSC CENTER?", why_title: "La confiança de <em>més de 300 famílies</em>.",
    w1_t: "15 anys fent créixer el vòlei platja", w1: "Som el club de referència de la zona",
    w2_t: "Entrenadors titulats i especialitzats", w2: "Professionals amb formació federativa avalada",
    w3_t: "Instal·lacions pensades per entrenar a la sorra", w3: "8 pistes de sorra, totes pròpies",
    w4_t: "Places limitades", w4: "Grups reduïts per garantir atenció personalitzada",
    w5_t: "Ambient proper, segur i familiar", w5: "Suport integral a l'esportista amb acompanyament personalitzat",
    w6_t: "Més de 400 alumnes", w6: "4,8 estrelles a Google — les famílies ens recomanen",
    team_pre: "L'EQUIP", team_title: "Les persones que <em>cuidaran</em> els teus fills.",
    test_pre: "TESTIMONIS", test_title: "El que diuen les <em>famílies</em>.",
    t1: "\"Desde el primer día te sientes acogido. Buen ambiente, buena organización y mucha pasión por el deporte.\"",
    t1a: "— Roger N.",
    t2: "\"Excelentes entrenadores y ambiente inmejorable. Tanto si quieres competir como si sólo quieres pasar un buen rato, es el sitio ideal.\"",
    t2a: "— Núria V.",
    t3: "\"No sólo mejoras como deportista, sino que formas parte de un gran grupo humano. 100% recomendable.\"",
    t3a: "— Marta F.",
    faq_pre: "FAQ", faq_title: "Preguntes <em>freqüents</em>.",
    f1q: "A partir de quina edat poden venir?",
    f1a: "A partir de 6 anys fins als 18. Tenim grups per edats amb activitats adaptades al seu nivell.",
    f2q: "Cal saber jugar a vòlei platja?",
    f2a: "No. La majoria d'infants venen sense saber jugar i aprenen aquí. Els nostres entrenadors estan acostumats a iniciar des de zero.",
    f3q: "Què passa si plou o fa molt calor?",
    f3a: "Tenim espais coberts amb ombra i aigua. El programa s'adapta per garantir la seguretat i la diversió.",
    f4q: "Hi ha servei de menjador?",
    f4a: "Sí, opcional. De 13h a 15h posem monitors perquè es puguin quedar, però cada nen/a porta el seu dinar de casa.",
    f5q: "Hi ha descomptes per a germans?",
    f5a: "Sí, 10% de descompte per al segon germà i següents.",
    f6q: "Es pot inscriure a torns no consecutius?",
    f6a: "Sí, pots triar les setmanes que t'encaixin.",
    f7q: "Com es contacta amb el club durant el campus?",
    f7a: "Tenim un grup de WhatsApp diari amb fotos i avisos. A més, sempre pots trucar-nos.",
    reg_pre: "RESERVA LA TEVA PLAÇA",
    reg_title: "Reserva la plaça abans que <em>s'omplin els grups</em>.",
    reg_name: "Nom del pare/mare", reg_email: "Email", reg_phone: "Telèfon",
    reg_child: "Nom del nen/a", reg_age: "Edat", reg_turn: "Torn preferit",
    reg_meal: "Servei de menjador", reg_meal_y: "Sí", reg_meal_n: "No",
    reg_allergies: "Al·lèrgies o observacions", reg_image: "Autoritzo l'ús d'imatges del meu fill/a",
    reg_privacy: "Accepto la política de privacitat i els termes del servei",
    reg_submit: "RESERVAR PLAÇA", reg_secure: "Pagament 100% segur. Cancel·lació flexible.",
    reg_contact_t: "Encara tens dubtes?", reg_contact_s: "Demana que et truquem i t'ho expliquem tot.",
    reg_c_name: "Nom", reg_c_phone: "Telèfon", reg_c_age: "Edat del nen/a",
    reg_c_msg: "Missatge (opcional)", reg_c_submit: "TRUQUEU-ME",
    foot_priv: "Privacitat", foot_terms: "Termes", foot_contact: "Contacte",
    foot_copy: "© 2026 Club Volei Premià de Dalt (Beach Sports Catalunya — BSC). Tots els drets reservats. Dissenyada per iARTESANA.",
    sticky_cta: "INSCRIU-TE ARA"
  },
  es: {
    nav_casal: "Introducción", nav_campus: "Tecnificación", nav_activitats: "Actividades", nav_preus: "Horarios y Precios",
    nav_equip: "El Equipo", nav_faq: "FAQ", nav_inscripcio: "Inscríbete",
    hero_pre: "CAMPUS DE VERANO 2026",
    hero_title: "Campus de Verano 2026 de <em>vóley playa</em> en Premià de Dalt",
    hero_sub: "Un verano activo en la arena para que niños y jóvenes disfruten, aprendan y evolucionen con el vóley playa en BSC Center.",
    hero_cta: "INSCRIBIRSE A INTRODUCCIÓN", hero_cta2: "INSCRIBIRSE A TECNIFICACIÓN", hero_wa: "Pedir información por WhatsApp",
    badge: "¡Plazas limitadas!",
    qi_dates_t: "Fechas", qi_dates: "Del 30 de junio al 24 de julio · Turnos semanales",
    qi_ages_t: "Edades", qi_ages: "De 6 a 18 años · Grupos por edad",
    qi_time_t: "Horario", qi_time: "De lunes a viernes, 8h a 15h · Acogida y comedor opcionales",
    qi_loc_t: "Dónde", qi_loc: "BSC Center · Carrer Montseny, 19 · Premià de Dalt",
    about_pre: "ELIGE EL PROGRAMA IDEAL",
    about_title: "Dos programas, un <em>objetivo común</em>: disfrutar y crecer en la arena.",
    about_p1: "Este verano no solo harán deporte: ganarán confianza, amistades y ganas de seguir mejorando en la arena.",
    about_p2: "", about_p3: "",
    casal_title: "Introducción — 6 a 14 años", casal_desc: "Para niños que quieren descubrir el vóley playa de manera divertida, social y segura.",
    casal_list: "Juegos y actividades en la arena|Introducción al vóley playa|Actividades de agua|Competición cada viernes|Excursión semanal a Illa Fantasia",
    casal_hours: "De lunes a viernes, de 8h a 15h", casal_opts: "Acogida de 8h a 9h · Comedor de 13h a 15h (opcional, con comida de casa y monitoraje)",
    campus_title: "Tecnificación — 13 a 18 años", campus_desc: "Para jugadores y jugadoras que quieren dar un salto real de nivel este verano.",
    campus_list: "Técnica individual|Táctica de juego|Situaciones reales de competición|Preparación física específica|Mentalidad competitiva|Competición semanal",
    campus_ideal: "Ideal para jóvenes que ya juegan, compiten o quieren empezar a entrenar con más estructura y confianza.",
    vp1_t: "Deporte real", vp1: "Técnica de vóley playa con entrenadores titulados",
    vp2_t: "Diversión garantizada", vp2: "Juegos, gymkanas y actividades cada día",
    vp3_t: "Cerca de casa", vp3: "Carrer Montseny, 19, Premià de Dalt",
    sched_pre: "UN DÍA EN EL CAMPUS", sched_title: "Así será su <em>día a día</em>.",
    act_pre: "ACTIVIDADES E INSTALACIONES", act_title: "Todo lo que necesitan, en un <em>solo lugar</em>.",
    a1_t: "VÓLEY PLAYA", a1_s: "8 pistas de arena", a1_p: "Aprenden técnica y táctica con los mejores entrenadores.",
    a2_t: "ZONA SOCIAL", a2_s: "Zona chillout y terraza", a2_p: "Espacio para descansar, socializar y hacer comunidad.",
    a3_t: "ZONA SOCIAL", a3_s: "Bar-terraza y espacios", a3_p: "Para descansar y hacer comunidad.",
    a4_t: "ZONA SOCIAL", a4_s: "Bar-terraza y espacios", a4_p: "Para descansar y hacer comunidad.",
    price_pre: "HORARIOS Y PRECIOS",
    price_title: "Elige las semanas que mejor <em>encajen</em> con vuestro verano.",
    price_sub: "Puedes inscribirlo en un turno, en varios o en todos. Descuentos para hermanos y tarifa preferente para abonados.",
    turn: "Turno", price_cta: "Inscribirme",
    disc_title: "💛 Descuentos disponibles",
    disc1: "10% para hermanos", disc2: "Tarifa preferente abonados BSC", disc3: "15% early bird hasta el 31 de mayo",
    why_pre: "¿POR QUÉ CONFIAR EN BSC CENTER?", why_title: "La confianza de <em>más de 300 familias</em>.",
    w1_t: "15 años haciendo crecer el vóley playa", w1: "Somos el club de referencia de la zona",
    w2_t: "Entrenadores titulados y especializados", w2: "Profesionales con formación federativa avalada",
    w3_t: "Instalaciones pensadas para entrenar en la arena", w3: "8 pistas de arena, todas propias",
    w4_t: "Plazas limitadas", w4: "Grupos reducidos para garantizar atención personalizada",
    w5_t: "Ambiente cercano, seguro y familiar", w5: "Apoyo integral al deportista con acompañamiento personalizado",
    w6_t: "Más de 400 alumnos", w6: "4,8 estrellas en Google — las familias nos recomiendan",
    team_pre: "EL EQUIPO", team_title: "Las personas que <em>cuidarán</em> a tus hijos.",
    test_pre: "TESTIMONIOS", test_title: "Lo que dicen las <em>familias</em>.",
    t1: "\"Desde el primer día te sientes acogido. Buen ambiente, buena organización y mucha pasión por el deporte.\"",
    t1a: "— Roger N.",
    t2: "\"Excelentes entrenadores y ambiente inmejorable. Tanto si quieres competir como si sólo quieres pasar un buen rato, es el sitio ideal.\"",
    t2a: "— Núria V.",
    t3: "\"No sólo mejoras como deportista, sino que formas parte de un gran grupo humano. 100% recomendable.\"",
    t3a: "— Marta F.",
    faq_pre: "FAQ", faq_title: "Preguntas <em>frecuentes</em>.",
    f1q: "¿A partir de qué edad pueden venir?", f1a: "A partir de 6 años hasta los 18. Tenemos grupos por edades con actividades adaptadas a su nivel.",
    f2q: "¿Hay que saber jugar a vóley playa?", f2a: "No. La mayoría de niños vienen sin saber jugar y aprenden aquí.",
    f3q: "¿Qué pasa si llueve o hace mucho calor?", f3a: "Tenemos espacios cubiertos con sombra y agua. El programa se adapta.",
    f4q: "¿Hay servicio de comedor?", f4a: "Sí, opcional. De 13h a 15h ponemos monitores para que puedan quedarse, pero cada niño/a trae su comida de casa.",
    f5q: "¿Hay descuentos para hermanos?", f5a: "Sí, 10% de descuento para el segundo hermano y siguientes.",
    f6q: "¿Se puede inscribir en turnos no consecutivos?", f6a: "Sí, puedes elegir las semanas que te encajen.",
    f7q: "¿Cómo se contacta con el club?", f7a: "Por WhatsApp al 640 36 18 07 o por email. También tenemos grupo diario con fotos y avisos.",
    reg_pre: "RESERVA TU PLAZA", reg_title: "Reserva la plaza antes de que <em>se llenen los grupos</em>.",
    reg_submit: "RESERVAR PLAZA", reg_secure: "Plazas limitadas para garantizar grupos reducidos y atención personalizada.",
    foot_priv: "Privacidad", foot_terms: "Términos", foot_contact: "Contacto",
    foot_copy: "© 2026 Club Volei Premià de Dalt (Beach Sports Catalunya — BSC). Todos los derechos reservados. Diseñada por iARTESANA.",
    sticky_cta: "INSCRÍBETE AHORA"
  },
  en: {
    nav_casal: "Introduction", nav_campus: "Advanced", nav_activitats: "Activities", nav_preus: "Schedule & Prices",
    nav_equip: "The Team", nav_faq: "FAQ", nav_inscripcio: "Register",
    hero_pre: "SUMMER CAMPUS 2026",
    hero_title: "Summer Campus 2026 — <em>Beach Volleyball</em> in Premià de Dalt",
    hero_sub: "An active summer on the sand for kids and teens to enjoy, learn and evolve with beach volleyball at BSC Center.",
    hero_cta: "REGISTER FOR INTRODUCTION", hero_cta2: "REGISTER FOR ADVANCED", hero_wa: "Ask info via WhatsApp",
    badge: "Limited spots!",
    qi_dates_t: "Dates", qi_dates: "June 30 to July 24 · Weekly sessions",
    qi_ages_t: "Ages", qi_ages: "6 to 18 years old · Age groups",
    qi_time_t: "Hours", qi_time: "Monday to Friday, 8am to 3pm · Extended care available",
    qi_loc_t: "Where", qi_loc: "BSC Center · Carrer Montseny, 19 · Premià de Dalt",
    about_pre: "CHOOSE THE RIGHT PROGRAM",
    about_title: "Two programs, one <em>shared goal</em>: enjoy and grow on the sand.",
    about_p1: "This summer they won't just play sports: they'll gain confidence, friendships and the drive to keep improving on the sand.",
    about_p2: "", about_p3: "",
    casal_title: "Introduction — Ages 6 to 14", casal_desc: "For kids who want to discover beach volleyball in a fun, social and safe environment.",
    casal_list: "Games and sand activities|Introduction to beach volleyball|Water activities|Competition every Friday|Weekly trip to Illa Fantasia",
    casal_hours: "Monday to Friday, 8am to 3pm", casal_opts: "Drop-off from 8am · Lunch service from 1pm to 3pm (optional, packed lunch and supervision)",
    campus_title: "Advanced — Ages 13 to 18", campus_desc: "For players who want to take their game to the next level this summer.",
    campus_list: "Individual technique|Game tactics|Real competition scenarios|Sport-specific conditioning|Competitive mindset|Weekly competition",
    campus_ideal: "Ideal for young players who already compete or want to train with more structure and confidence.",
    vp1_t: "Real sport", vp1: "Beach volleyball technique with certified coaches",
    vp2_t: "Guaranteed fun", vp2: "Games, activities and challenges every day",
    vp3_t: "Close to home", vp3: "Carrer Montseny, 19, Premià de Dalt",
    sched_pre: "A DAY AT CAMP", sched_title: "Here's what their <em>day looks like</em>.",
    act_pre: "ACTIVITIES & FACILITIES", act_title: "Everything they need, in <em>one place</em>.",
    a1_t: "BEACH VOLLEYBALL", a1_s: "8 sand courts", a1_p: "They learn technique and tactics with top coaches.",
    a2_t: "SOCIAL AREA", a2_s: "Chillout zone & terrace", a2_p: "A space to rest, socialize and build community.",
    a3_t: "SOCIAL AREA", a3_s: "Bar-terrace & spaces", a3_p: "For rest and community.",
    a4_t: "SOCIAL AREA", a4_s: "Bar-terrace & spaces", a4_p: "For rest and community.",
    price_pre: "SCHEDULE & PRICES",
    price_title: "Choose the weeks that best <em>fit</em> your summer.",
    price_sub: "Register for one session, several, or all. Sibling discounts and subscriber rates available.",
    turn: "Session", price_cta: "Register",
    disc_title: "💛 Discounts available",
    disc1: "10% sibling discount", disc2: "BSC subscriber rate", disc3: "15% early bird until May 31",
    why_pre: "WHY TRUST BSC CENTER?", why_title: "Trusted by <em>over 300 families</em>.",
    w1_t: "15 years growing beach volleyball", w1: "We are the reference club in the area",
    w2_t: "Certified and specialized coaches", w2: "Professionals with accredited federation training",
    w3_t: "Facilities designed for sand training", w3: "8 sand courts, all our own",
    w4_t: "Limited spots", w4: "Small groups to ensure personalized attention",
    w5_t: "Close, safe and family-friendly", w5: "Full athlete support with personalized guidance",
    w6_t: "Over 400 students", w6: "4.8 stars on Google — families recommend us",
    team_pre: "THE TEAM", team_title: "The people who will <em>take care</em> of your kids.",
    test_pre: "TESTIMONIALS", test_title: "What <em>families</em> say.",
    t1: "\"From day one you feel welcome. Great atmosphere, great organization and real passion for the sport.\"",
    t1a: "— Roger N.",
    t2: "\"Excellent coaches and unbeatable atmosphere. Whether you want to compete or just have fun, this is the place.\"",
    t2a: "— Núria V.",
    t3: "\"You don't just improve as an athlete — you become part of an amazing community. 100% recommended.\"",
    t3a: "— Marta F.",
    faq_pre: "FAQ", faq_title: "Frequently asked <em>questions</em>.",
    f1q: "What's the minimum age?", f1a: "From 6 to 18 years old. We have age groups with activities adapted to each level.",
    f2q: "Do they need to know how to play?", f2a: "No. Most kids come with no experience and learn here.",
    f3q: "What happens if it rains or it's very hot?", f3a: "We have covered spaces with shade and water. The program adapts.",
    f4q: "Is there a lunch service?", f4a: "Yes, optional. From 1pm to 3pm we provide monitors for supervision, but each child brings their own packed lunch.",
    f5q: "Are there sibling discounts?", f5a: "Yes, 10% off for the second sibling and beyond.",
    f6q: "Can I register for non-consecutive sessions?", f6a: "Yes, pick whichever weeks work for you.",
    f7q: "How do we contact the club?", f7a: "Via WhatsApp at 640 36 18 07 or email. We also have a daily group with photos and updates.",
    reg_pre: "RESERVE YOUR SPOT", reg_title: "Reserve your spot before <em>groups fill up</em>.",
    reg_submit: "RESERVE SPOT", reg_secure: "Limited spots to ensure small groups and personalized attention.",
    foot_priv: "Privacy", foot_terms: "Terms", foot_contact: "Contact",
    foot_copy: "© 2026 Club Volei Premià de Dalt (Beach Sports Catalunya — BSC). All rights reserved. Designed by iARTESANA.",
    sticky_cta: "REGISTER NOW"
  }
};

let currentLang = 'cat';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  document.documentElement.lang = lang === 'cat' ? 'ca' : lang;
}

// --- FAQ Accordion ---
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// --- Scroll Reveal ---
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --- Mobile Menu ---
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.close-menu');
  if (!toggle) return;
  toggle.addEventListener('click', () => menu.classList.add('open'));
  close.addEventListener('click', () => menu.classList.remove('open'));
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// --- Smooth scroll for nav links ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// --- Form handling ---
function initForms() {
  const regForm = document.getElementById('form-inscripcio');
  const contactForm = document.getElementById('form-contacte');
  if (regForm) {
    regForm.addEventListener('submit', e => {
      e.preventDefault();
      alert(currentLang === 'en' ? 'Registration received! We will contact you shortly.' :
            currentLang === 'es' ? '¡Inscripción recibida! Te contactaremos pronto.' :
            'Inscripció rebuda! Et contactarem aviat.');
      regForm.reset();
    });
  }
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert(currentLang === 'en' ? 'We will call you soon!' :
            currentLang === 'es' ? '¡Te llamaremos pronto!' :
            'Et trucarem aviat!');
      contactForm.reset();
    });
  }
}

// Init is called from render.js after page content is rendered

