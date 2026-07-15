import './style/main.scss';
import photoOne from './assets/photo 1.png';
import photoTwo from './assets/photo 2.jpg';
import photoThree from './assets/photo 3.png';
import photoFour from './assets/photo 4.jpg';
import testimonialHero from './assets/testimonial-hero.jpg';
import testimonialStory from './assets/testimonial-story.jpg';

const localImages = {
  'photo-1': photoOne,
  'photo-2': photoTwo,
  'photo-3': photoThree,
  'photo-4': photoFour,
  'testimonial-hero': testimonialHero,
  'testimonial-story': testimonialStory,
};

class AwakeSite {
  constructor() {
    this.header = document.querySelector('[data-header]');
    this.menu = document.querySelector('[data-menu]');
    this.menuToggle = document.querySelector('[data-menu-toggle]');
    this.navLinks = [...document.querySelectorAll('.header__nav-link[data-nav-link]')];
    this.faqButtons = [...document.querySelectorAll('[data-faq-button]')];
    this.yearElements = [...document.querySelectorAll('[data-year]')];
    this.scrollFillElements = [...document.querySelectorAll('[data-scroll-fill]')];
    this.swapButtons = [...document.querySelectorAll('a.button')];
    this.localImageElements = [...document.querySelectorAll('[data-local-image]')];
    this.scrollFillFrame = null;
    this.buttonSwapFrame = null;
  }

  init() {
    this.applyLocalImages();
    this.setCurrentYear();
    this.bindMobileMenu();
    this.bindSmoothScroll();
    this.bindFaq();
    this.observeSections();
    this.bindScrollFill();
    this.bindButtonSwap();
  }

  setCurrentYear() {
    const currentYear = String(new Date().getFullYear());
    this.yearElements.forEach((element) => {
      element.textContent = currentYear;
    });
  }

  applyLocalImages() {
    this.localImageElements.forEach((element) => {
      const imageKey = element.getAttribute('data-local-image');
      const imageSrc = imageKey ? localImages[imageKey] : null;

      if (!imageSrc) return;

      if (element instanceof SVGImageElement) {
        element.setAttribute('href', imageSrc);
        element.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageSrc);
        return;
      }

      element.setAttribute('src', imageSrc);
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
    this.menu?.classList.toggle('header__panel--open', isOpen);
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
      this.setFaqOpen(button, button.getAttribute('aria-expanded') === 'true');
    });

    this.faqButtons.forEach((button) => {
      button.addEventListener('click', () => {
        this.faqButtons.forEach((faqButton) => {
          this.setFaqOpen(faqButton, faqButton === button);
        });
      });
    });
  }

  setFaqOpen(button, isOpen) {
    const answerId = button.getAttribute('aria-controls');
    const answer = answerId ? document.getElementById(answerId) : null;
    const item = button.closest('.faq__item');

    button.setAttribute('aria-expanded', String(isOpen));
    answer?.toggleAttribute('hidden', !isOpen);
    item?.classList.toggle('faq__item--open', isOpen);
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
    const fillRange = Math.max(1, viewportHeight);

    this.scrollFillElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / fillRange));
      const alpha = 0.16 + progress * 0.84;

      element.style.setProperty('--scroll-fill-alpha', alpha.toFixed(3));
    });
  }

  bindButtonSwap() {
    if (!this.swapButtons.length) return;

    const queueMeasure = () => {
      if (this.buttonSwapFrame) return;

      this.buttonSwapFrame = window.requestAnimationFrame(() => {
        this.buttonSwapFrame = null;
        this.measureButtonSwap();
      });
    };

    this.swapButtons.forEach((button) => {
      button.addEventListener('pointerenter', () => this.measureButtonSwap(button));
      button.addEventListener('focus', () => this.measureButtonSwap(button));
    });

    this.measureButtonSwap();
    window.addEventListener('resize', queueMeasure);

    if (document.fonts?.ready) {
      document.fonts.ready.then(queueMeasure).catch(() => {});
    }
  }

  measureButtonSwap(targetButton = null) {
    const buttons = targetButton ? [targetButton] : this.swapButtons;

    buttons.forEach((button) => {
      const icon = button.querySelector('.button__icon');
      const label = [...button.children].find((child) => child !== icon && child.tagName === 'SPAN');

      if (!icon || !label) return;

      const labelLeft = label.offsetLeft;
      const iconLeft = icon.offsetLeft;
      const labelWidth = label.offsetWidth;
      const iconWidth = icon.offsetWidth;
      const contentLeft = Math.min(labelLeft, iconLeft);
      const contentRight = Math.max(labelLeft + labelWidth, iconLeft + iconWidth);
      const labelTargetLeft = contentRight - labelWidth;
      const iconTargetLeft = contentLeft;

      button.style.setProperty('--button-text-shift', `${labelTargetLeft - labelLeft}px`);
      button.style.setProperty('--button-icon-shift', `${iconTargetLeft - iconLeft}px`);
    });
  }

  setActiveLink(hash) {
    this.navLinks.forEach((link) => {
      link.classList.toggle('header__nav-link--active', link.hash === hash);
    });
  }
}

const app = new AwakeSite();
app.init();
