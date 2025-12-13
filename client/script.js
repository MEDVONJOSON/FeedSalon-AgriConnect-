// Global JavaScript functions for AgriPredict

// Toggle account menu
function toggleAccountMenu() {
  const menu = document.getElementById('accountMenu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('accountMenu');
  const button = event.target.closest('button');
  
  if (menu && !menu.contains(event.target) && button?.textContent?.trim() !== 'Account') {
    menu.classList.add('hidden');
  }
});

// Logout function
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    localStorage.removeItem('farmerData');
    localStorage.removeItem('buyerData');
    localStorage.removeItem('userType');
    window.location.href = 'index.html';
  }
}

// Check authentication on protected pages
function checkAuth() {
  const currentPage = window.location.pathname.split('/').pop();
  const protectedPages = ['dashboard.html', 'buyer-dashboard.html'];
  
  if (protectedPages.includes(currentPage)) {
    const userType = localStorage.getItem('userType');
    if (!userType) {
      window.location.href = 'login.html';
    }
  }
}

// Format currency to Leones
function formatCurrency(amount) {
  return `Le ${amount.toLocaleString()}`;
}

// Format date
function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-SL', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Show notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg text-white z-50 ${
    type === 'success' ? 'bg-green-600' : 'bg-red-600'
  }`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Intersection Observer for scroll animations
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
};

// Smooth counter animation
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = Math.round(target).toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.round(current).toLocaleString();
    }
  }, 16);
}

// Initialize counters on page load
function initCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseInt(el.getAttribute('data-counter'));
    animateCounter(el, target);
  });
}

// Progress bar animation
function animateProgress(elementId, targetPercent, duration = 1500) {
  const element = document.getElementById(elementId);
  if (!element) return;

  let current = 0;
  const increment = targetPercent / (duration / 16);

  const timer = setInterval(() => {
    current += increment;
    if (current >= targetPercent) {
      element.style.width = targetPercent + '%';
      clearInterval(timer);
    } else {
      element.style.width = current + '%';
    }
  }, 16);
}

// Toast notification system
const toastQueue = [];
let isShowingToast = false;

function showToast(message, type = 'success', duration = 3000) {
  toastQueue.push({ message, type, duration });
  if (!isShowingToast) {
    displayNextToast();
  }
}

function displayNextToast() {
  if (toastQueue.length === 0) {
    isShowingToast = false;
    return;
  }

  isShowingToast = true;
  const { message, type, duration } = toastQueue.shift();

  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg text-white z-50 notification-enter ${
    type === 'success' ? 'bg-green-600' : 
    type === 'error' ? 'bg-red-600' : 
    type === 'warning' ? 'bg-yellow-600' : 
    'bg-blue-600'
  }`;
  
  const icon = type === 'success' ? '✓' : 
               type === 'error' ? '✕' : 
               type === 'warning' ? '⚠' : 'ℹ';
  
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="text-xl">${icon}</span>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideInFromRight 0.3s ease-out reverse';
    setTimeout(() => {
      toast.remove();
      displayNextToast();
    }, 300);
  }, duration);
}

// Modal system
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('scale-in');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.closest('.modal-container')?.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
});

// Tabs system
function switchTab(tabGroup, tabId) {
  // Hide all tab contents in this group
  document.querySelectorAll(`[data-tab-group="${tabGroup}"]`).forEach(tab => {
    tab.classList.add('hidden');
  });
  
  // Remove active state from all tab buttons
  document.querySelectorAll(`[data-tab-button="${tabGroup}"]`).forEach(btn => {
    btn.classList.remove('border-green-600', 'text-green-600');
    btn.classList.add('border-transparent', 'text-gray-600');
  });
  
  // Show selected tab
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.remove('hidden');
    selectedTab.classList.add('fade-in');
  }
  
  // Activate button
  const activeButton = document.querySelector(`[onclick*="${tabId}"]`);
  if (activeButton) {
    activeButton.classList.add('border-green-600', 'text-green-600');
    activeButton.classList.remove('border-transparent', 'text-gray-600');
  }
}

// Search and filter functionality
function filterItems(searchTerm, containerSelector, itemSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const items = container.querySelectorAll(itemSelector);
  const term = searchTerm.toLowerCase();

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(term)) {
      item.style.display = '';
      item.classList.add('fade-in');
    } else {
      item.style.display = 'none';
    }
  });
}

// Sort functionality
function sortItems(containerSelector, itemSelector, sortBy, order = 'asc') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const items = Array.from(container.querySelectorAll(itemSelector));
  
  items.sort((a, b) => {
    const aValue = a.getAttribute(`data-${sortBy}`) || a.textContent;
    const bValue = b.getAttribute(`data-${sortBy}`) || b.textContent;
    
    if (order === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  items.forEach(item => container.appendChild(item));
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard!', 'success', 2000);
  }).catch(() => {
    showToast('Failed to copy', 'error', 2000);
  });
}

// Share functionality
function shareContent(title, text, url) {
  if (navigator.share) {
    navigator.share({ title, text, url })
      .catch(() => showToast('Sharing cancelled', 'info', 2000));
  } else {
    copyToClipboard(url);
    showToast('Link copied to clipboard!', 'success', 2000);
  }
}

// Local storage helpers
const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  },
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Storage error:', e);
      return null;
    }
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  }
};

// Form handling with validation
function handleFormSubmit(formId, onSuccess) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!validateForm(formId)) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    if (onSuccess) {
      onSuccess(data);
    }
  });
}

// Debounce function for search inputs
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize all features on page load
document.addEventListener('DOMContentLoaded', function() {
  checkAuth();
  observeElements();
  initCounters();
  
  // Add fade-in animation to main content
  const main = document.querySelector('main');
  if (main) {
    main.classList.add('fade-in');
  }

  // Initialize tooltips
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.classList.add('tooltip');
  });

  // Add ripple effect to buttons
  document.querySelectorAll('button, .btn').forEach(btn => {
    if (!btn.classList.contains('no-ripple')) {
      btn.classList.add('btn-ripple');
    }
  });
});

// Form validation helper
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('border-red-500');
      isValid = false;
    } else {
      input.classList.remove('border-red-500');
    }
  });
  
  return isValid;
}

// Smooth scroll to element
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

console.log('AgriPredict - Empowering Sierra Leonean Farmers with AI Technology');

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}
