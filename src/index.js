import './style/main.scss';

class AwakeSite {
  constructor() {
    this.header = document.querySelector('[data-header]');
    this.menu = document.querySelector('[data-menu]');
    this.menuToggle = document.querySelector('[data-menu-toggle]');
    this.navLinks = [...document.querySelectorAll('.site-header__nav-link[data-nav-link]')];
    this.faqButtons = [...document.querySelectorAll('[data-faq-button]')];
    this.yearElements = [...document.querySelectorAll('[data-year]')];
    this.scrollFillElements = [...document.querySelectorAll('[data-scroll-fill]')];
    this.scrollFillFrame = null;
  }

  init() {
    this.setCurrentYear();
    this.bindMobileMenu();
    this.bindSmoothScroll();
    this.bindFaq();
    this.observeSections();
    this.bindScrollFill();
  }

  setCurrentYear() {
    const currentYear = String(new Date().getFullYear());
    this.yearElements.forEach((element) => {
      element.textContent = currentYear;
    });
  }

  bindMobileMenu() {
    if (!this.menu || !this.menuToggle) return;

    this.menuToggle.addEventListener('click', () => {
      const isOpen = this.menuToggle.getAttribute('aria-expanded') === 'true';
      this.setMenuOpen(!isOpen);
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 961px)').matches) {
        this.setMenuOpen(false);
      }
    });
  }

  setMenuOpen(isOpen) {
    this.menuToggle?.setAttribute('aria-expanded', String(isOpen));
    this.menu?.classList.toggle('site-header__panel--open', isOpen);
    document.body.classList.toggle('page--menu-open', isOpen);
  }

  bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        this.setMenuOpen(false);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  bindFaq() {
    this.faqButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const answerId = button.getAttribute('aria-controls');
        const answer = answerId ? document.getElementById(answerId) : null;
        if (!answer) return;

        const isOpen = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isOpen));
        answer.hidden = isOpen;
      });
    });
  }

  observeSections() {
    if (!('IntersectionObserver' in window)) return;

    const sectionLinks = this.navLinks.filter((link) => link.hash && document.querySelector(link.hash));
    const sections = sectionLinks.map((link) => document.querySelector(link.hash));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          this.setActiveLink(`#${entry.target.id}`);
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0.01,
      },
    );

    sections.forEach((section) => observer.observe(section));
  }

  bindScrollFill() {
    if (!this.scrollFillElements.length) return;

    const queueUpdate = () => {
      if (this.scrollFillFrame) return;

      this.scrollFillFrame = window.requestAnimationFrame(() => {
        this.scrollFillFrame = null;
        this.updateScrollFill();
      });
    };

    this.updateScrollFill();
    window.addEventListener('scroll', queueUpdate, { passive: true });
    window.addEventListener('resize', queueUpdate);
  }

  updateScrollFill() {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const startLine = viewportHeight * 0.88;
    const fillRange = Math.min(720, Math.max(360, viewportHeight * 0.58 + viewportWidth * 0.08));

    this.scrollFillElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (startLine - rect.top) / fillRange));
      const words = [...element.querySelectorAll('[data-scroll-fill-word]')];

      if (!words.length) {
        element.style.setProperty('--about-title-fill', `${Math.round(progress * 100)}%`);
        return;
      }

      const fadeSpread = 1.85;
      const fillCursor = progress * (words.length + fadeSpread);

      words.forEach((word, index) => {
        const wordProgress = Math.min(1, Math.max(0, (fillCursor - index) / fadeSpread));
        const alpha = 0.16 + wordProgress * 0.84;

        word.style.color = `rgba(23, 25, 28, ${alpha.toFixed(3)})`;
      });
    });
  }

  setActiveLink(hash) {
    this.navLinks.forEach((link) => {
      link.classList.toggle('site-header__nav-link--active', link.hash === hash);
    });
  }
}

const app = new AwakeSite();
app.init();
