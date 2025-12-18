// ===== PARTICLES ANIMATION =====
class Particles {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId)
    if (!this.canvas) return

    this.ctx = this.canvas.getContext('2d')
    this.quantity = options.quantity || 100
    this.color = options.color || '#a855f7'
    this.particleSize = options.particleSize || 2
    this.particles = []

    this.resize()
    this.init()
    this.animate()
    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    this.canvas.width = this.canvas.offsetWidth
    this.canvas.height = this.canvas.offsetHeight
  }

  init() {
    this.particles = Array.from({ length: this.quantity }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = this.color
    this.ctx.globalAlpha = 0.5

    this.particles.forEach((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy

      if (particle.x < 0) particle.x = this.canvas.width
      if (particle.x > this.canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = this.canvas.height
      if (particle.y > this.canvas.height) particle.y = 0

      this.ctx.beginPath()
      this.ctx.arc(particle.x, particle.y, this.particleSize, 0, Math.PI * 2)
      this.ctx.fill()
    })

    requestAnimationFrame(this.animate)
  }
}

// ===== THEME & CONFIG =====
const themeConfig = {
  backgroundColor: "#0a0a0a",
  textColor: "#f5f5f5",
  textLightColor: "#a0a0a0",
  accentColor: "#8b5cf6",
  primaryColor: "#a855f7",
  secondaryColor: "#d946ef",
  borderColor: "#1f2937",
};

/**
 * Applies CSS variables for theming
 * @param {Object} config - Theme configuration
 */
function applyTheme(config) {
  const root = document.documentElement;
  root.style.setProperty("--bg", config.backgroundColor);
  root.style.setProperty("--text", config.textColor);
  root.style.setProperty("--text-light", config.textLightColor);
  root.style.setProperty("--accent", config.accentColor);
  root.style.setProperty("--primary", config.primaryColor);
  root.style.setProperty("--secondary", config.secondaryColor);
  root.style.setProperty("--border", config.borderColor);
}

// ===== NAVIGATION =====
/**
 * Initialize mobile navigation toggle
 */
function initMobileNav() {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("navLinks");

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    const isActive = navLinks.classList.contains("active");
    navLinks.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", !isActive);
  });

  // Close menu when clicking on a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== TYPING ANIMATION =====
/**
 * Create typing animation effect
 */
function initTypingAnimation() {
  const typingText = document.getElementById("typingText");
  if (!typingText) return;

  const phrases = [
    "Diseña tu presencia online",
    "Convierte visitas en clientes",
    "Crece tu negocio digitalmente",
  ];

  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 2000;

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
      currentCharIndex--;

      if (currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, deleteSpeed);
      }
    } else {
      typingText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;

      if (currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
      } else {
        setTimeout(type, typeSpeed);
      }
    }
  }

  type();
}

// ===== SCROLL-TO-TOP BUTTON =====
/**
 * Initialize scroll-to-top button functionality
 */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById("scrollTop");
  if (!scrollTopBtn) return;

  // Show button when scrolled down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  // Scroll to top smoothly
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ===== INTERSECTION OBSERVER - Animate elements on scroll =====
/**
 * Initialize animations for elements coming into view
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  document.querySelectorAll(".card, .stat-card, .process-step").forEach((el) => {
    observer.observe(el);
  });
}

// ===== BUTTON INTERACTIONS =====
/**
 * Initialize button click handlers
 */
function initButtonHandlers() {
  // Primary buttons
  document.querySelectorAll(".btn-primary").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      handleContactClick();
    });
  });

  // Outline buttons
  document.querySelectorAll(".btn-outline").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const href = btn.getAttribute("href");
      if (href && href.includes("wa.me")) {
        window.open(href, "_blank");
      } else {
        handleContactClick();
      }
    });
  });
}

/**
 * Handle contact button click
 */
function handleContactClick() {
  const whatsappNumber = "1234567890"; // Replace with actual number
  const message = encodeURIComponent(
    "Hola, me gustaría hablar sobre tu servicio de landing pages."
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
}

// ===== SMOOTH SCROLL BEHAVIOR =====
/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ===== FORM VALIDATION =====
/**
 * Initialize form validation
 */
function initFormValidation() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll(
        "input[required], textarea[required]"
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          input.classList.add("input-error");
          isValid = false;
        } else {
          input.classList.remove("input-error");
        }
      });

      if (isValid) {
        // Handle form submission
        handleFormSubmit(form);
      }
    });

    // Remove error class on input
    form.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("input", () => {
        input.classList.remove("input-error");
      });
    });
  });
}

/**
 * Handle form submission
 */
function handleFormSubmit(form) {
  // Collect form data
  const formData = new FormData(form);

  // For demo purposes, log and show success
  console.log("Form submitted:", Object.fromEntries(formData));

  // Show success message
  const successMsg = document.createElement("div");
  successMsg.className = "success-message";
  successMsg.textContent = "¡Mensaje enviado correctamente!";
  form.appendChild(successMsg);

  // Reset form
  form.reset();

  // Remove success message after 3 seconds
  setTimeout(() => {
    successMsg.remove();
  }, 3000);
}

// ===== ACCESSIBILITY =====
/**
 * Check color contrast ratios for accessibility
 */
function validateContrast() {
  // Get computed styles
  const root = getComputedStyle(document.documentElement);
  const bgColor = root.getPropertyValue("--bg").trim();
  const textColor = root.getPropertyValue("--text").trim();

  console.log("Background:", bgColor);
  console.log("Text Color:", textColor);
  console.log("✓ Theme applied successfully");
}

// ===== INITIALIZE ALL =====
/**
 * Run all initialization functions when DOM is ready
 */
function initializeApp() {
  // Apply theme
  applyTheme(themeConfig);
  validateContrast();

  // Initialize features
  initMobileNav();
  initTypingAnimation();
  initScrollToTop();
  initScrollAnimations();
  initButtonHandlers();
  initSmoothScroll();
  initFormValidation();

  console.log("✓ Application initialized successfully");
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

// ===== PERFORMANCE MONITORING =====



window.addEventListener("load", () => {
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    console.log(`✓ Page loaded in ${loadTime}ms`);
  }
});

// ===== THEME APPLICATION =====
function applyConfig(config) {
  document.querySelectorAll('.floating-element').forEach(el => { el.style.background = config.accent_color || defaultConfig.accent_color; });

	// Navigation and structural elements with guards
	const nav = safeQuery('.nav-section'); if (nav) { nav.style.backgroundColor = config.background_color || defaultConfig.background_color; nav.style.borderBottom = `1px solid ${(config.text_color || defaultConfig.text_color)}15`; }
	const logo = safeQuery('.logo-text'); if (logo) logo.style.color = config.text_color || defaultConfig.text_color;
	const navCta = safeQuery('.nav-cta-button'); if (navCta) { navCta.style.backgroundColor = config.primary_action_color || defaultConfig.primary_action_color; navCta.style.color = config.background_color || defaultConfig.background_color; }

	// Dividers and text colors
	document.querySelectorAll('.divider-line').forEach(line => { line.style.background = config.text_color || defaultConfig.text_color; });

	// Apply text content safely
	const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
	setText('hero-title', config.hero_title || defaultConfig.hero_title);
	setText('hero-subtitle', config.hero_subtitle || defaultConfig.hero_subtitle);
	setText('cta-button', config.cta_button || defaultConfig.cta_button);
	setText('nav-cta', config.cta_button || defaultConfig.cta_button);
	setText('feature-1-title', config.feature_1_title || defaultConfig.feature_1_title);
	setText('feature-2-title', config.feature_2_title || defaultConfig.feature_2_title);
	setText('feature-3-title', config.feature_3_title || defaultConfig.feature_3_title);
	setText('cta-title', config.cta_title || defaultConfig.cta_title);
	setText('cta-description', config.cta_description || defaultConfig.cta_description);
	setText('cta-button-final', config.cta_button_final || defaultConfig.cta_button_final);

	// Apply font family and sizes to root — better than iterating many nodes
	try { document.documentElement.style.setProperty('--ui-font-family', `${customFont}, ${baseFontStack}`); } catch (e) {}
	const heroTitle = safeQuery('.hero-title'); if (heroTitle) heroTitle.style.fontSize = `${baseSize * 3}px`;
	const heroSubtitle = safeQuery('.hero-subtitle'); if (heroSubtitle) heroSubtitle.style.fontSize = `${baseSize * 1.125}px`;

	// Buttons sizing
	document.querySelectorAll('.cta-button, .cta-button-final, .nav-cta-button').forEach(button => { button.style.fontSize = `${baseSize}px`; });

	// Feature cards and steps
	document.querySelectorAll('.feature-card').forEach(card => { card.style.backgroundColor = config.background_color || defaultConfig.background_color; card.style.color = config.text_color || defaultConfig.text_color; card.style.border = `1px solid ${(config.text_color || defaultConfig.text_color)}10`; });
	document.querySelectorAll('.feature-icon').forEach(icon => { icon.style.backgroundColor = config.accent_color || defaultConfig.accent_color; icon.style.color = config.background_color || defaultConfig.background_color; });
	document.querySelectorAll('.step-number').forEach(num => { num.style.backgroundColor = config.accent_color || defaultConfig.accent_color; num.style.color = config.background_color || defaultConfig.background_color; num.style.border = `2px solid ${config.accent_color || defaultConfig.accent_color}`; });

	// CTA container
	const ctaContainer = safeQuery('.cta-container'); if (ctaContainer) { ctaContainer.style.backgroundColor = config.surface_color || defaultConfig.surface_color; ctaContainer.style.border = `1px solid ${(config.text_color || defaultConfig.text_color)}10`; }

	// Guard elementSdk updates
	try { if (window.elementSdk && typeof window.elementSdk.setConfig === 'function') { /* keep in sync if needed */ } } catch (e) { /* no-op */ }
}

function mapToCapabilities(config) {
	return {
		recolorables: [
			{ get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; if (window.elementSdk) window.elementSdk.setConfig({ background_color: v }); } },
			{ get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; if (window.elementSdk) window.elementSdk.setConfig({ surface_color: v }); } },
			{ get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; if (window.elementSdk) window.elementSdk.setConfig({ text_color: v }); } },
			{ get: () => config.primary_action_color || defaultConfig.primary_action_color, set: (v) => { config.primary_action_color = v; if (window.elementSdk) window.elementSdk.setConfig({ primary_action_color: v }); } },
			{ get: () => config.secondary_action_color || defaultConfig.secondary_action_color, set: (v) => { config.secondary_action_color = v; if (window.elementSdk) window.elementSdk.setConfig({ secondary_action_color: v }); } },
			{ get: () => config.accent_color || defaultConfig.accent_color, set: (v) => { config.accent_color = v; if (window.elementSdk) window.elementSdk.setConfig({ accent_color: v }); } }
		],
		borderables: [],
		fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; if (window.elementSdk) window.elementSdk.setConfig({ font_family: v }); } },
		fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; if (window.elementSdk) window.elementSdk.setConfig({ font_size: v }); } }
	};
}

function mapToEditPanelValues(config) {
	return new Map([
		["hero_title", config.hero_title || defaultConfig.hero_title],
		["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
		["cta_button", config.cta_button || defaultConfig.cta_button],
		["feature_1_title", config.feature_1_title || defaultConfig.feature_1_title],
		["feature_2_title", config.feature_2_title || defaultConfig.feature_2_title],
		["feature_3_title", config.feature_3_title || defaultConfig.feature_3_title],
		["cta_title", config.cta_title || defaultConfig.cta_title],
		["cta_description", config.cta_description || defaultConfig.cta_description],
		["cta_button_final", config.cta_button_final || defaultConfig.cta_button_final]
	]);
}

if (window.elementSdk && typeof window.elementSdk.init === 'function') {
	try {
		window.elementSdk.init({ defaultConfig, onConfigChange, mapToCapabilities, mapToEditPanelValues });
	} catch (e) { console.warn('elementSdk init failed', e); }
}

// Typing effect on page load
window.addEventListener('load', () => {
	const typingElement = document.getElementById('hero-title');
	if (typingElement) {
		setTimeout(() => { typingElement.classList.add('typing-complete'); }, 2000);
	}
});

// Mobile nav toggle + accessibility
document.addEventListener('DOMContentLoaded', () => {
	const toggle = document.getElementById('nav-toggle');
	const links = document.querySelector('.nav-links');
	if (!toggle || !links) return;
	toggle.addEventListener('click', () => {
		const isHidden = links.classList.toggle('hidden');
		// aria-expanded on toggle
		toggle.setAttribute('aria-expanded', String(!isHidden));
	});
	// ensure menu is visible on resize >= md
	window.addEventListener('resize', () => {
		if (window.innerWidth >= 768 && links.classList.contains('hidden')) {
			links.classList.remove('hidden');
		}
	});
});

// ===== PROGRESSIVE BLUR ON SCROLL =====
/**
 * Initialize progressive blur effect - section in focus is clear, others are blurred
 */
function initProgressiveBlur() {
  const sections = document.querySelectorAll('section');
  let activeSectionIndex = 0;

  function updateBlur() {
    const windowCenter = window.scrollY + window.innerHeight / 2;
    let closestSection = 0;
    let closestDistance = Infinity;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = window.scrollY + rect.top + rect.height / 2;
      const distance = Math.abs(windowCenter - sectionCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestSection = index;
      }
    });

    // Update blur status for all sections
    sections.forEach((section, index) => {
      if (index === closestSection) {
        // Current section - focused (no blur, show overlay)
        section.classList.remove('blur-inactive');
        section.classList.add('blur-active');
      } else {
        // Other sections - blurred out
        section.classList.add('blur-inactive');
        section.classList.remove('blur-active');
      }
    });

    activeSectionIndex = closestSection;
  }

  window.addEventListener('scroll', updateBlur, { passive: true });
  updateBlur(); // Initial call
}

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
  new Particles('particles-canvas', {
    quantity: 200,
    color: '#a855f7',
    particleSize: 2,
  })
});

console.log('Web product template loaded');
initProgressiveBlur();
