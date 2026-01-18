// ===== DESKTOP STICKY NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
  
  const mainNav = document.getElementById('main-nav');
  const heroSection = document.querySelector('.hero-section');
  
  if (!mainNav || !heroSection) {
    console.error('Navigation or hero section not found');
    return;
  }
  
  // Get hero section height
  const heroHeight = heroSection.offsetHeight;
  
  // Make navigation sticky on scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // When scrolled past hero section (minus 100px for smooth transition)
    if (scrollPosition > heroHeight - 100) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for desktop nav links
  const desktopNavLinks = document.querySelectorAll('.main-navigation .nav-link');
  
  desktopNavLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1); // Remove the #
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // Calculate offset for sticky nav
        const navHeight = mainNav.classList.contains('scrolled') ? 70 : 0;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update active state
        desktopNavLinks.forEach(function(l) {
          l.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  
  // Update active link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(function(section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Remove active from all desktop links
        desktopNavLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        
        // Add active to current section link
        const activeLink = document.querySelector(`.main-navigation .nav-link[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });
  
});

// ===== MOBILE MENU =====
document.addEventListener('DOMContentLoaded', function() {
  
  // Get all required elements
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('close-btn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  // Verify elements exist
  if (!hamburgerBtn) {
    console.error('Hamburger button not found');
    return;
  }
  if (!mobileNav) {
    console.error('Mobile nav not found');
    return;
  }
  if (!closeBtn) {
    console.error('Close button not found');
    return;
  }
  
  // Create and append overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-nav-overlay';
  document.body.appendChild(overlay);
  
  // Function to open menu
  function openMenu() {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    hamburgerBtn.classList.add('active');
  }
  
  // Function to close menu
  function closeMenu() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    hamburgerBtn.classList.remove('active');
  }
  
  // Open menu when hamburger is clicked
  hamburgerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    openMenu();
  });
  
  // Close menu when X button is clicked
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    closeMenu();
  });
  
  // Close menu when overlay is clicked
  overlay.addEventListener('click', function() {
    closeMenu();
  });
  
  // Close menu when any navigation link is clicked
  mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Let the smooth scroll happen first, then close menu
      setTimeout(function() {
        closeMenu();
      }, 300); // 300ms delay gives smooth transition
    });
  });
  
  // Close menu when ESC key is pressed
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      closeMenu();
    }
  });
  
});

// ===== EXPERIENCE TABS =====
document.addEventListener('DOMContentLoaded', function() {
  
  const tabButtons = document.querySelectorAll('.tab-button');
  const jobPanels = document.querySelectorAll('.job-panel');
  
  // Debug: Check if elements are found
  console.log('Found tab buttons:', tabButtons.length);
  console.log('Found job panels:', jobPanels.length);
  
  if (tabButtons.length === 0 || jobPanels.length === 0) {
    console.error('Tabs or panels not found!');
    return;
  }
  
  // Add click event to each tab button
  tabButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target panel ID from data-tab attribute
      const targetId = this.getAttribute('data-tab');
      console.log('Tab clicked:', targetId);
      
      // Remove 'active' class from all buttons
      tabButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      
      // Remove 'active' class from all panels
      jobPanels.forEach(function(panel) {
        panel.classList.remove('active');
      });
      
      // Add 'active' class to clicked button
      this.classList.add('active');
      
      // Find and show the corresponding panel
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        console.log('✓ Panel activated:', targetId);
      } else {
        console.error('✗ Panel not found:', targetId);
      }
    });
  });
  
  // Ensure first tab is active on page load
  if (tabButtons[0] && jobPanels[0]) {
    tabButtons[0].classList.add('active');
    jobPanels[0].classList.add('active');
  }
  
});
