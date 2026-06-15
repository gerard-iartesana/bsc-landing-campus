function renderPage(){
const m=document.getElementById('main');
m.innerHTML=`
<section class="hero" id="hero">
<div class="hero-bg"></div>
<div class="hero-badge" data-i18n="badge"></div>
<div class="container hero-content">
<p class="pretitle" data-i18n="hero_pre"></p>
<h1 data-i18n="hero_title"></h1>
<p class="hero-sub" data-i18n="hero_sub"></p>
<div class="hero-ctas">
<a href="https://forms.gle/aScCmZEHJPzvL9gaA" target="_blank" rel="noopener" class="btn btn-casal" data-i18n="hero_cta"></a>
<a href="https://forms.gle/aScCmZEHJPzvL9gaA" target="_blank" rel="noopener" class="btn btn-campus" data-i18n="hero_cta2"></a>
</div>
<a href="https://wa.me/34640361807" target="_blank" rel="noopener" class="hero-whatsapp" data-i18n="hero_wa"></a>
</div>
</section>

<section class="quick-info reveal"><div class="container"><div class="quick-grid">
<div class="quick-item"><div class="quick-icon cal"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div><h3 data-i18n="qi_dates_t"></h3><p data-i18n="qi_dates"></p></div>
<div class="quick-item"><div class="quick-icon age"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3 data-i18n="qi_ages_t"></h3><p data-i18n="qi_ages"></p></div>
<div class="quick-item"><div class="quick-icon time"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h3 data-i18n="qi_time_t"></h3><p data-i18n="qi_time"></p></div>
<div class="quick-item"><div class="quick-icon loc"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><h3 data-i18n="qi_loc_t"></h3><p data-i18n="qi_loc"></p></div>
</div></div></section>

<section class="about reveal" id="casal"><div class="container">
<div style="text-align:center;margin-bottom:3rem">
<p class="pretitle" data-i18n="about_pre"></p>
<h2 class="section-title" data-i18n="about_title"></h2>
<p style="max-width:600px;margin:0 auto;color:#555" data-i18n="about_p1"></p>
</div>
<div class="program-grid">
<div class="program-card casal-card">
<div class="program-header h-yellow"><h3 data-i18n="casal_title"></h3></div>
<div class="program-body">
<p data-i18n="casal_desc"></p>
<h4>Què faran?</h4>
<ul id="casalList"></ul>
<div class="program-schedule"><strong>Horari:</strong> <span data-i18n="casal_hours"></span></div>
<div class="program-options"><strong>Opcions:</strong> <span data-i18n="casal_opts"></span></div>
<a href="https://forms.gle/aScCmZEHJPzvL9gaA" target="_blank" rel="noopener" class="btn btn-casal" data-i18n="hero_cta"></a>
</div></div>
<div class="program-card campus-card">
<div class="program-header h-red"><h3 data-i18n="campus_title"></h3></div>
<div class="program-body">
<p data-i18n="campus_desc"></p>
<h4>Què treballarem?</h4>
<ul id="campusList"></ul>
<p style="font-style:italic;color:#666;font-size:.9rem;margin-top:1rem" data-i18n="campus_ideal"></p>
<a href="https://forms.gle/aScCmZEHJPzvL9gaA" target="_blank" rel="noopener" class="btn btn-campus" data-i18n="hero_cta2"></a>
</div></div>
</div>
</div></section>

<section class="schedule reveal" id="schedule"><div class="container">
<p class="pretitle" data-i18n="sched_pre"></p>
<h2 class="section-title" data-i18n="sched_title"></h2>
<div class="timeline">
<div class="tl-item"><span class="tl-time">08:00–09:00</span><div class="tl-content"><h4>Acollida</h4><p>Servei opcional.</p></div></div>
<div class="tl-item"><span class="tl-time">09:00–11:00</span><div class="tl-content"><h4>Entrenament + Activitats a l'aire lliure</h4><p>Vòlei platja per grups</p></div></div>
<div class="tl-item"><span class="tl-time">11:00–11:30</span><div class="tl-content"><h4>Esmorzar</h4><p>Esmorzar saludable de casa</p></div></div>
<div class="tl-item"><span class="tl-time">11:30–13:00</span><div class="tl-content"><h4>Gimcanes i jocs / Entreno (Tecnificació)</h4><p>Activitats lúdiques i dinàmiques de grup</p></div></div>
<div class="tl-item"><span class="tl-time">13:00–15:00</span><div class="tl-content"><h4>Menjador (opcional)</h4><p>Monitoratge amb dinar de casa</p></div></div>
</div></div></section>

<div class="marquee-band"><div class="marquee-track">
<span>ESTIU</span><span>DIVERSIÓ</span><span>SORRA</span><span>AMICS</span><span>ESPORT</span><span>ESTIU</span><span>DIVERSIÓ</span><span>SORRA</span><span>AMICS</span><span>ESPORT</span><span>ESTIU</span><span>DIVERSIÓ</span><span>SORRA</span><span>AMICS</span><span>ESPORT</span>
</div></div>

<section class="activities reveal" id="activitats"><div class="container">
<p class="pretitle" data-i18n="act_pre"></p>
<h2 class="section-title" data-i18n="act_title"></h2>
<div class="act-grid">
<div class="act-card"><img src="assets/pistes-volei.jpg" alt="Vòlei platja" loading="lazy"><div class="act-overlay"><span class="pretitle" data-i18n="a1_s"></span><h3 data-i18n="a1_t"></h3><p data-i18n="a1_p"></p></div></div>
<div class="act-card"><img src="assets/chillout.jpg" alt="Zona social" loading="lazy"><div class="act-overlay"><span class="pretitle" data-i18n="a2_s"></span><h3 data-i18n="a2_t"></h3><p data-i18n="a2_p"></p></div></div>
</div></div></section>

<section class="pricing reveal" id="preus"><div class="container">
<div class="pricing-header">
<p class="pretitle" data-i18n="price_pre"></p>
<h2 class="section-title" data-i18n="price_title"></h2>
<p class="section-sub" data-i18n="price_sub"></p>
</div>
<div class="price-grid" id="priceGrid"></div>
<div class="discounts-band">
<h3 data-i18n="disc_title"></h3>
<div class="disc-items"><span class="disc-item" data-i18n="disc1"></span><span class="disc-item" data-i18n="disc2"></span><span class="disc-item" data-i18n="disc3"></span></div>
</div></div></section>

<section class="why-bsc reveal"><div class="container">
<p class="pretitle" data-i18n="why_pre"></p>
<h2 class="section-title" data-i18n="why_title"></h2>
<div class="why-grid">
<div class="why-item"><div class="why-icon"><svg width="32" height="32" fill="none" stroke="#FFD500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15a7 7 0 0 0 7-7c0-3.5-3-7-7-7S5 4.5 5 8a7 7 0 0 0 7 7z"/><path d="M8 15v2a4 4 0 0 0 8 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg></div><h3 data-i18n="w1_t"></h3><p data-i18n="w1"></p></div>
<div class="why-item"><div class="why-icon"><svg width="32" height="32" fill="none" stroke="#FFD500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/></svg></div><h3 data-i18n="w2_t"></h3><p data-i18n="w2"></p></div>
<div class="why-item"><div class="why-icon"><svg width="32" height="32" fill="none" stroke="#FFD500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></div><h3 data-i18n="w3_t"></h3><p data-i18n="w3"></p></div>
<div class="why-item"><div class="why-icon"><svg width="32" height="32" fill="none" stroke="#FFD500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3 data-i18n="w4_t"></h3><p data-i18n="w4"></p></div>
<div class="why-item"><div class="why-icon"><svg width="32" height="32" fill="none" stroke="#FFD500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg></div><h3 data-i18n="w5_t"></h3><p data-i18n="w5"></p></div>
<div class="why-item"><div class="why-icon"><svg width="32" height="32" fill="none" stroke="#FFD500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div><h3 data-i18n="w6_t"></h3><p data-i18n="w6"></p></div>
</div></div></section>

<section class="team reveal" id="equip"><div class="container">
<p class="pretitle" data-i18n="team_pre"></p>
<h2 class="section-title" data-i18n="team_title"></h2>
<div class="team-carousel" id="teamCarousel"></div>
</div></section>

<section class="testimonials reveal"><div class="container">
<p class="pretitle" data-i18n="test_pre"></p>
<h2 class="section-title" data-i18n="test_title"></h2>
<div class="test-grid">
<div class="test-card"><div class="test-stars">⭐⭐⭐⭐⭐</div><blockquote data-i18n="t1"></blockquote><p class="test-author" data-i18n="t1a"></p></div>
<div class="test-card"><div class="test-stars">⭐⭐⭐⭐⭐</div><blockquote data-i18n="t2"></blockquote><p class="test-author" data-i18n="t2a"></p></div>
<div class="test-card"><div class="test-stars">⭐⭐⭐⭐⭐</div><blockquote data-i18n="t3"></blockquote><p class="test-author" data-i18n="t3a"></p></div>
</div></div></section>

<section class="faq reveal" id="faq"><div class="container">
<p class="pretitle" data-i18n="faq_pre"></p>
<h2 class="section-title" data-i18n="faq_title"></h2>
<div class="faq-list">
${[1,2,3,4,5,6,7].map(i=>`<div class="faq-item"><button class="faq-question"><span data-i18n="f${i}q"></span><span class="icon">+</span></button><div class="faq-answer"><p data-i18n="f${i}a"></p></div></div>`).join('')}
</div></div></section>

<section class="registration" id="inscripcio"><div class="container" style="text-align:center">
<p class="pretitle" data-i18n="reg_pre"></p>
<h2 class="section-title" data-i18n="reg_title" style="color:#fff"></h2>
<p style="color:rgba(255,255,255,.7);max-width:500px;margin:0 auto 2rem" data-i18n="reg_secure"></p>
<div class="hero-ctas" style="justify-content:center">
<a href="https://forms.gle/aScCmZEHJPzvL9gaA" target="_blank" rel="noopener" class="btn btn-casal" data-i18n="hero_cta"></a>
<a href="https://forms.gle/aScCmZEHJPzvL9gaA" target="_blank" rel="noopener" class="btn btn-campus" data-i18n="hero_cta2"></a>
</div>
<a href="https://wa.me/34640361807" target="_blank" rel="noopener" class="hero-whatsapp" data-i18n="hero_wa"></a>
</div></section>`;

// Render price cards
const turns=[
{n:'1',d:'30 juny – 3 juliol',c:'h-yellow',p:'Des de 100€'},
{n:'2',d:'6–10 juliol',c:'h-red',pop:true,p:'Des de 100€'},
{n:'3',d:'13–17 juliol',c:'h-yellow',p:'Des de 100€'},
{n:'4',d:'20–24 juliol',c:'h-red',p:'Des de 100€'}
];
document.getElementById('priceGrid').innerHTML=turns.map(t=>`
<div class="price-card${t.pop?' popular':''}">
<div class="price-header ${t.c}"><h3><span data-i18n="turn"></span> ${t.n}</h3><p>${t.d}</p></div>
<div class="price-body">
<ul><li>Vòlei platja</li><li>Gimcanes i jocs</li><li>Excursió a l'Illa Fantasia</li><li>Zona social i terrassa</li></ul>
<div class="price-amount"><span>${t.p}</span><small>/setmana</small></div>
<a href="https://forms.gle/aScCmZEHJPzvL9gaA" target="_blank" rel="noopener" class="btn btn-primary" data-i18n="price_cta"></a>
</div></div>`).join('');

// Render team
const team=[
{n:'Julia',r:'Monitora',img:'assets/Julia.jpg'},
{n:'Fran',r:'Monitor',img:'assets/Fran.jpg'},
{n:'Dani',r:'Monitor',img:'assets/Dani.jpg'}
];
document.getElementById('teamCarousel').innerHTML=team.map(t=>`
<div class="team-card">${t.img
  ? `<img class="team-photo" src="${t.img}" alt="${t.n}" loading="lazy">`
  : `<div class="team-photo" style="background:linear-gradient(135deg,#F39200,#E63027);display:flex;align-items:center;justify-content:center;font-size:2.5rem;color:#fff">${t.n[0]}</div>`}
<div class="team-info"><h3>${t.n}</h3><p>${t.r}</p></div></div>`).join('');
}
document.addEventListener('DOMContentLoaded', function(){
  renderPage();
  initFAQ();
  initReveal();
  initMobileMenu();
  initSmoothScroll();
  initForms();
  document.querySelectorAll('.lang-switch button').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.dataset.lang); });
  });
  setLang('cat');
  // Render program lists
  function renderLists(){
    var t=translations[currentLang];
    var cl=document.getElementById('casalList');
    var cml=document.getElementById('campusList');
    if(cl&&t.casal_list) cl.innerHTML=t.casal_list.split('|').map(function(i){return '<li>'+i+'</li>';}).join('');
    if(cml&&t.campus_list) cml.innerHTML=t.campus_list.split('|').map(function(i){return '<li>'+i+'</li>';}).join('');
  }
  renderLists();
  // Override setLang to also render lists
  var origSetLang=setLang;
  setLang=function(l){origSetLang(l);renderLists();};
});
