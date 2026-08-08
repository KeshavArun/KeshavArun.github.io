/* ==========================================================================
   CoAI — site behaviour
   No libraries, no build step. Five small jobs:
     1. Nav bar background on scroll
     2. Mobile menu
     3. Typing effect in the hero
     4. Scroll-reveal for sections
     5. Agent console step animation  (+ footer year)

   Everything here degrades safely: if the script never runs, the page
   still shows all of its content.
   ========================================================================== */

(function () {
  'use strict';

  /* Tells the stylesheet that JS is available, so it can hide elements
     that are about to be animated in. Done first so nothing flashes. */
  document.documentElement.classList.add('has-js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  /* --- 1. Nav bar background on scroll ---------------------------------- */
  var nav = document.getElementById('nav');

  function updateNav() {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });


  /* --- 2. Mobile menu --------------------------------------------------- */
  var toggle = document.getElementById('nav-toggle');
  var links  = document.getElementById('nav-links');

  function setMenu(open) {
    if (!toggle || !links) return;
    links.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      setMenu(!links.classList.contains('is-open'));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1000) setMenu(false);
    });
  }


  /* --- 3. Hero typing effect --------------------------------------------
     Types each phrase out, holds it, deletes it, moves to the next.
     >>> EDIT THIS LIST TO CHANGE WHAT THE HERO TYPES <<<
     (these are the five capabilities listed further down the page)        */
  var PHRASES = [
    'Conversational agents',
    'Workflow automation & integrations',
    'Research & enrichment agents',
    'Document & knowledge systems',
    'Custom internal tools'
  ];

  var TYPE_MS   = 55;    // speed while typing a character
  var DELETE_MS = 28;    // speed while deleting
  var HOLD_MS   = 1700;  // pause on a finished phrase

  var typed = document.getElementById('typed');

  if (typed) {
    if (reduceMotion) {
      // No animation — just show the first phrase.
      typed.textContent = PHRASES[0];
    } else {
      var pi = 0;      // which phrase
      var ci = 0;      // how many characters are showing
      var deleting = false;

      (function tick() {
        var phrase = PHRASES[pi];
        ci += deleting ? -1 : 1;
        typed.textContent = phrase.slice(0, ci);

        var wait = deleting ? DELETE_MS : TYPE_MS;

        if (!deleting && ci === phrase.length) {
          deleting = true;
          wait = HOLD_MS;
        } else if (deleting && ci === 0) {
          deleting = false;
          pi = (pi + 1) % PHRASES.length;
          wait = 320;
        }
        setTimeout(tick, wait);
      })();
    }
  }


  /* --- 4. Scroll reveal -------------------------------------------------
     Elements with class "reveal" fade and slide up the first time they
     come into view. Stagger is set per element with style="--d:120ms".   */
  var revealables = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    // Show everything immediately.
    Array.prototype.forEach.call(revealables, function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);   // only ever animates once
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(revealables, function (el) {
      observer.observe(el);
    });
  }


  /* --- 5. Agent console: light each step in turn ------------------------ */
  var steps = document.querySelectorAll('.console .step');

  if (steps.length) {
    if (reduceMotion) {
      Array.prototype.forEach.call(steps, function (s) { s.classList.add('is-on'); });
    } else {
      var si = 0;
      setInterval(function () {
        Array.prototype.forEach.call(steps, function (s, i) {
          s.classList.toggle('is-on', i <= si);
        });
        si = (si + 1) % (steps.length + 1);   // extra tick resets the run
      }, 900);
    }
  }


  /* --- Footer year ------------------------------------------------------ */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

})();
