/**
 * DATA ANALYST PORTFOLIO - MAIN JAVASCRIPT
 * Handles navigation, mobile menu, smooth scrolling, email copy, and contact form
 * Zero external dependencies (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Footer Year
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerBtn && navMenu) {
    const closeMobileMenu = () => {
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('mobile-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    const toggleMobileMenu = () => {
      const willOpen = !navMenu.classList.contains('mobile-open');
      hamburgerBtn.classList.toggle('active', willOpen);
      navMenu.classList.toggle('mobile-open', willOpen);
      hamburgerBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      document.body.style.overflow = willOpen ? 'hidden' : '';
    };

    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close menu when clicking on any navigation link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('mobile-open')) {
        if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
          closeMobileMenu();
        }
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('mobile-open')) {
        closeMobileMenu();
      }
    });

    // Reset menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991 && navMenu.classList.contains('mobile-open')) {
        closeMobileMenu();
      }
    });
  }

  // 3. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  const highlightNavLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(sectionId)) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavLink, { passive: true });

  // 4. Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. Toast Notification Utility
  const toastNotification = document.getElementById('toastNotification');

  const showToast = (message) => {
    if (!toastNotification) return;
    toastNotification.textContent = message;
    toastNotification.classList.add('show');
    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  };

  // 6. Copy Email to Clipboard
  const copyEmailButtons = document.querySelectorAll('.copy-email-btn');
  copyEmailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'prachigund05@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`✓ Copied ${email} to clipboard!`);
        }).catch(() => {
          showToast(`Email: ${email}`);
        });
      } else {
        showToast(`Email: ${email}`);
      }
    });
  });

  // 7. Contact Form Submission Feedback
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const messageInput = document.getElementById('senderMessage');

      if (nameInput && emailInput && messageInput) {
        // Show success confirmation feedback
        if (formFeedback) {
          formFeedback.textContent = `Thank you, ${nameInput.value.trim()}! Your message has been received. I will reach out shortly.`;
          formFeedback.className = 'form-feedback success';
          formFeedback.style.display = 'block';
        }
        showToast('✓ Message sent successfully!');

        contactForm.reset();

        setTimeout(() => {
          if (formFeedback) {
            formFeedback.style.display = 'none';
          }
        }, 6000);
      }
    });
  }

});
