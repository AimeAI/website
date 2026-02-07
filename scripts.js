/* AIME Intelligence — Site JS */

(function () {
  'use strict';

  /* ========== Mobile Nav Toggle ========== */
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ========== Contact Form (Formspree) ========== */
  var form = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var hp = form.querySelector('.honeypot input');
      if (hp && hp.value) return;

      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending...';

      var data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            form.style.display = 'none';
            if (formSuccess) formSuccess.style.display = 'block';
          } else {
            btn.disabled = false;
            btn.textContent = 'Send Request';
            alert('Something went wrong. Please email us directly at mani@aimeintelligence.com');
          }
        })
        .catch(function () {
          btn.disabled = false;
          btn.textContent = 'Send Request';
          alert('Something went wrong. Please email us directly at mani@aimeintelligence.com');
        });
    });
  }

  /* ========== Active nav link highlighting ========== */
  var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  var filename = currentPath.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === filename || (filename === '' && href === 'index.html') ||
        (filename === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
    if ((filename.includes('-intel') || filename.includes('case-stud')) &&
        href === 'case-studies.html') {
      link.classList.add('active');
    }
  });

  /* ========== Countdown Timer (Quarterly Engagement Window) ========== */
  var countdownEl = document.getElementById('countdown-timer');

  if (countdownEl) {
    var now = new Date();
    var quarter = Math.ceil((now.getMonth() + 1) / 3);
    var endMonth = quarter * 3;
    var endYear = now.getFullYear();

    if (endMonth > 12) {
      endMonth = 3;
      endYear++;
    }

    var quarterEnd = new Date(endYear, endMonth, 0, 23, 59, 59);
    var quarterLabels = { 1: 'Q1', 2: 'Q2', 3: 'Q3', 4: 'Q4' };
    var quarterLabel = quarterLabels[quarter] + ' ' + endYear;

    var labelEl = countdownEl.querySelector('.countdown-quarter-label');
    if (labelEl) labelEl.textContent = quarterLabel + ' engagement window';

    function updateCountdown() {
      var now = new Date();
      var diff = quarterEnd - now;

      if (diff <= 0) {
        countdownEl.innerHTML = '<span class="banner-text">New quarter begins — <strong>slots available</strong></span>';
        return;
      }

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      var daysEl = countdownEl.querySelector('[data-days]');
      var hoursEl = countdownEl.querySelector('[data-hours]');
      var minsEl = countdownEl.querySelector('[data-mins]');

      if (daysEl) daysEl.textContent = days;
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 60000);
  }

  /* ========== Cost of Inaction Calculator ========== */
  var calculator = document.getElementById('coi-calculator');

  if (calculator) {
    var inputs = calculator.querySelectorAll('input[type="number"]');
    var monthlyEl = document.getElementById('coi-monthly');
    var totalEl = document.getElementById('coi-total');

    function calcCOI() {
      var people = parseFloat(document.getElementById('coi-people').value) || 0;
      var hours = parseFloat(document.getElementById('coi-hours').value) || 0;
      var rate = parseFloat(document.getElementById('coi-rate').value) || 0;
      var months = parseFloat(document.getElementById('coi-months').value) || 0;

      var monthly = people * hours * 4.3 * rate;
      var total = monthly * months;

      if (monthlyEl) monthlyEl.textContent = '$' + Math.round(monthly).toLocaleString();
      if (totalEl) totalEl.textContent = '$' + Math.round(total).toLocaleString();
    }

    inputs.forEach(function (input) {
      input.addEventListener('input', calcCOI);
    });

    calcCOI();
  }

})();
