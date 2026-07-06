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

    // Wire up "not launched yet" sections: shows a fallback (e.g. "Get
    // Notified") until directBuyEnabled is true and a real link is set,
    // then swaps to the buy button automatically. No HTML changes needed
    // to go live — just update STORE_CONFIG.
    document.querySelectorAll('[data-buy-toggle]').forEach((wrapper) => {
      const key = wrapper.getAttribute('data-buy-toggle');
      const book = STORE_CONFIG[key];
      if (!book) return;
      const fallback = wrapper.querySelector('[data-buy-toggle-fallback]');
      const buyBtn = wrapper.querySelector('[data-buy-toggle-buy]');
      if (book.directBuyEnabled && book.directBuyUrl && book.directBuyUrl !== '#') {
        if (buyBtn) {
          buyBtn.href = book.directBuyUrl;
          buyBtn.style.display = '';
        }
        if (fallback) fallback.style.display = 'none';
      }
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
