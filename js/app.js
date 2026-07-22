/* ===========================================================
   Tricia Korade campaign site: client-side behavior
   - hash routing between the 5 pages
   - active nav state + mobile menu
   - renders repeated data (pillars, platform blocks, steps)
   =========================================================== */
(function () {
  'use strict';

  /* ---- editable content data (mirrors the design prototype) ---- */
  var DONATE_URL = '#'; // TODO: replace with the real ActBlue/donation link

  var pillars = [
    { tag: '01', title: 'Smart Growth & Infrastructure', desc: 'Balancing economic vitality with the natural beauty that makes Johnson City special.',
      bullets: ['Support infill housing and thoughtful development', 'Advance revenue-generating ideas like the Boone Creek Tourism District', 'Protect green spaces and our Main Street America feel'] },
    { tag: '02', title: 'Fiscal Stewardship', desc: 'Protecting taxpayers through rigorous, data-driven budget analysis.',
      bullets: ['Treat property tax increases as an absolute last resort', 'Leverage enterprise funds and cut process inefficiencies', 'Bring 35 years of high-level budget experience to City Hall'] },
    { tag: '03', title: 'Community & Nonprofits', desc: 'Bridging government, business, and the nonprofits that fill critical gaps.',
      bullets: ['Address complex issues like homelessness through real partnership', 'Support the small nonprofit sector as an economic driver', 'Rebuild trust between city government and the whole community'] }
  ];

  var steps = [
    { n: '01', t: 'Check your registration', body: 'Make sure you’re registered to vote by Monday, Oct 5, 2026. Not sure? Verify your status online in a couple of minutes.' },
    { n: '02', t: 'Know your county & polling place', body: 'Find out which county you live in and where your assigned polling place is. Early-voting sites may differ from Election Day locations.' },
    { n: '03', t: 'Vote early or on Election Day', body: 'Vote early Oct 14 to 29, or head to your polling place on Tuesday, Nov 3, 2026. Bring a valid photo ID.' }
  ];

  var PAGES = ['home', 'about', 'platform', 'election', 'contact'];

  /* ---- tiny DOM helpers ---- */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---- render repeated content ---- */
  function renderPillarsCards() {
    var host = document.querySelector('[data-pillars-cards]');
    if (!host) return;
    pillars.forEach(function (p) {
      var card = el('div', 'card');
      card.appendChild(el('div', 'card-num', esc(p.tag)));
      card.appendChild(el('h3', 'card-title', esc(p.title)));
      card.appendChild(el('p', 'card-desc', esc(p.desc)));
      host.appendChild(card);
    });
  }

  function renderPlatformBlocks() {
    var host = document.querySelector('[data-platform-blocks]');
    if (!host) return;
    pillars.forEach(function (p) {
      var block = el('div', 'plat-block');
      block.appendChild(el('div', 'plat-tag', esc(p.tag)));
      block.appendChild(el('h3', 'plat-title', esc(p.title)));
      var ul = el('ul');
      p.bullets.forEach(function (b) {
        var li = el('li');
        li.appendChild(el('span', 'dot'));
        li.appendChild(el('span', null, esc(b)));
        ul.appendChild(li);
      });
      block.appendChild(ul);
      host.appendChild(block);
    });
  }

  function renderSteps() {
    var host = document.querySelector('[data-steps]');
    if (!host) return;
    steps.forEach(function (s) {
      var step = el('div', 'step');
      step.appendChild(el('div', 'step-num', esc(s.n)));
      step.appendChild(el('h3', 'step-title', esc(s.t)));
      step.appendChild(el('p', 'step-body', esc(s.body)));
      host.appendChild(step);
    });
  }

  /* ---- donate links ---- */
  function wireDonate() {
    document.querySelectorAll('[data-donate]').forEach(function (a) {
      a.setAttribute('href', DONATE_URL);
    });
  }

  /* ---- routing ---- */
  function currentPage() {
    var h = (location.hash || '').replace(/^#\/?/, '');
    return PAGES.indexOf(h) !== -1 ? h : 'home';
  }

  function showPage(page) {
    document.querySelectorAll('.page').forEach(function (s) {
      s.hidden = s.getAttribute('data-page') !== page;
    });
    document.querySelectorAll('[data-nav][data-page]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-page') === page);
    });
    closeNav();
    window.scrollTo(0, 0);
  }

  function route() { showPage(currentPage()); }

  /* ---- mobile nav ---- */
  var header = document.getElementById('siteHeader');
  var hamburger = document.getElementById('hamburger');

  function openNav() {
    header.classList.add('nav-open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeNav() {
    header.classList.remove('nav-open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }
  function toggleNav() {
    if (header.classList.contains('nav-open')) closeNav(); else openNav();
  }

  /* ---- init ---- */
  renderPillarsCards();
  renderPlatformBlocks();
  renderSteps();
  wireDonate();

  if (hamburger) hamburger.addEventListener('click', toggleNav);
  window.addEventListener('hashchange', route);
  route();
})();
