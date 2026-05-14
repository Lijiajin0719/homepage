/* ========== Main Interaction Script ========== */

document.addEventListener('DOMContentLoaded', function () {
  /* ---------- Active Nav Link ---------- */
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('active');
    }
  });

  /* ---------- Navbar Scroll Shadow ---------- */
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Initial check in case page is loaded scrolled down
  handleScroll();

  /* ---------- Hamburger Menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('nav-links');

  if (hamburger && navLinksEl) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinksEl.classList.toggle('show');
    });

    // Close mobile menu when a nav link is clicked
    navLinksEl.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinksEl.classList.remove('show');
      });
    });
  }

  /* ---------- Language Toggle via addEventListener ---------- */
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLang);
  }

  /* ---------- Publication Filter ---------- */
  const filterTags = document.querySelectorAll('.filter-tag');
  const pubCards = document.querySelectorAll('.pub-card');

  filterTags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      // Remove active from all filter tags
      filterTags.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-pressed', 'false');
      });

      // Add active to clicked tag
      tag.classList.add('active');
      tag.setAttribute('aria-pressed', 'true');

      const filter = tag.getAttribute('data-filter');

      // Show/hide pub cards based on data-category
      pubCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ---------- Research Nav Smooth Scroll ---------- */
  const researchNavItems = document.querySelectorAll('.research-nav-item');

  researchNavItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Update active class
      researchNavItems.forEach(function (nav) {
        nav.classList.remove('active');
      });
      item.classList.add('active');

      // Smooth scroll to target section
      const scrollTarget = item.getAttribute('data-scroll');
      if (scrollTarget) {
        const targetEl = document.getElementById(scrollTarget);
        if (targetEl) {
          const offset = 80; // Account for fixed navbar
          const targetPosition =
            targetEl.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      }
    });
  });
});

/* ---------- Language Toggle (global function called from HTML) ---------- */
function toggleLang() {
  const currentLang = getLang();
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  setLang(newLang);
}
