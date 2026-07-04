document.addEventListener('DOMContentLoaded', () => {
  // Wire up any "Buy Direct" buttons using STORE_CONFIG, if present on the page.
  if (typeof STORE_CONFIG !== 'undefined') {
    document.querySelectorAll('[data-buy-direct]').forEach((el) => {
      const key = el.getAttribute('data-buy-direct');
      const book = STORE_CONFIG[key];
      if (!book) return;
      if (book.directBuyEnabled && book.directBuyUrl && book.directBuyUrl !== '#') {
        el.href = book.directBuyUrl;
        el.classList.remove('btn-disabled');
      } else {
        el.href = '#';
        el.setAttribute('aria-disabled', 'true');
        el.classList.add('btn-disabled');
        el.addEventListener('click', (e) => {
          e.preventDefault();
        });
      }
    });
    document.querySelectorAll('[data-buy-amazon]').forEach((el) => {
      const key = el.getAttribute('data-buy-amazon');
      const book = STORE_CONFIG[key];
      if (book && book.amazonUrl) el.href = book.amazonUrl;
    });
  }

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  const form = document.querySelector('.signup-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = form.querySelector('.form-note');
      const email = form.querySelector('input[type="email"]').value;
      if (note) {
        note.textContent = `Thanks — ${email} is on the list. (Connect this form to your email provider to go live.)`;
      }
      form.reset();
    });
  }
});
