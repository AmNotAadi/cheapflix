// Subscription data
const subscriptions = [
  {
    id: 'spotify',
    name: 'Spotify Premium',
    desc: 'Ad-free music, offline listening, and more.',
    price: 20, // First month offer
    original: 49, // Regular price
    discount: 59, // Discount percentage for first month
    icon: `<svg width='32' height='32' viewBox='0 0 32 32'><circle fill='#1ED760' cx='16' cy='16' r='16'/><path d='M23.1 22.1c-.3 0-.5-.1-.7-.2-5.1-3.1-11.5-1.5-11.6-1.5-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4.3-.1 7.3-1.8 13.1 1.7.5.3.7 1 .4 1.5-.2.3-.6.5-1 .5zm1.5-3.3c-.4 0-.7-.1-1-.3-5.8-3.6-14.6-2-15-1.9-.7.1-1.3-.3-1.4-1-.1-.7.3-1.3 1-1.4.4-.1 10-.9 16.5 2.2.6.3.8 1.1.5 1.7-.2.4-.6.7-1.1.7zm1.7-3.5c-.4 0-.8-.1-1.1-.3-6.6-4-17.2-2.2-17.7-2.1-.8.1-1.5-.4-1.6-1.2-.1-.8.4-1.5 1.2-1.6.5-.1 12.2-2.1 19.5 2.4.7.4.9 1.3.5 2-.3.4-.7.6-1.2.6z' fill='#fff'/></svg>`,
    brand: {
      color: '#1ED760',
      font: 'Circular, Arial, sans-serif',
      text: '#191414',
    },
  },
  {
    id: 'youtube',
    name: 'YouTube Premium',
    desc: 'No ads, background play, and YouTube Music.',
    price: 10, // First month offer
    original: 79, // Regular price
    discount: 87, // Discount percentage for first month
    icon: `<svg width='32' height='32' viewBox='0 0 32 32'><rect fill='#fff' width='32' height='32' rx='16'/><path d='M25.6 12.2c-.2-.8-.8-1.4-1.6-1.6C22.5 10 16 10 16 10s-6.5 0-8 .6c-.8.2-1.4.8-1.6 1.6C6 13.7 6 16 6 16s0 2.3.4 3.8c.2.8.8 1.4 1.6 1.6 1.5.6 8 .6 8 .6s6.5 0 8-.6c.8-.2 1.4-.8 1.6-1.6.4-1.5.4-3.8.4-3.8s0-2.3-.4-3.8z' fill='#FF0000'/><polygon points='14,20 20,16 14,12' fill='#fff'/></svg>`,
    brand: {
      color: '#FF0000',
      font: 'Roboto, Arial, sans-serif',
      text: '#222',
    },
  },
  // Commented out for now
  /*
  {
    id: 'duolingo',
    name: 'Duolingo Super',
    desc: 'No Ads, Unlimited Hearts',
    price: 10, // First-time user offer
    original: 149,
    discount: 93, // Updated discount percentage
    icon: `<svg width='32' height='32' viewBox='0 0 32 32'><circle fill='#58CC02' cx='16' cy='16' r='16'/><ellipse cx='11' cy='18' rx='2.2' ry='2.7' fill='#fff'/><ellipse cx='21' cy='18' rx='2.2' ry='2.7' fill='#fff'/><ellipse cx='11' cy='18' rx='1.1' ry='1.3' fill='#222'/><ellipse cx='21' cy='18' rx='1.1' ry='1.3' fill='#222'/><path d='M8 13c2-2 14-2 16 0-1 3-15 3-16 0z' fill='#A3E635'/></svg>`,
    brand: {
      color: '#58CC02',
      font: 'Poppins, Arial, sans-serif',
      text: '#222',
    },
  },
  {
    id: 'hotstar',
    name: 'JioHotstar Premium',
    desc: 'Live sports, movies, and TV shows.',
    price: 10, // First-time user offer
    original: 149,
    discount: 93, // Updated discount percentage
    icon: `<svg width='32' height='32' viewBox='0 0 32 32'><rect fill='#fff' width='32' height='32' rx='16'/><circle cx='16' cy='16' r='10' fill='#1C2A5E'/><text x='16' y='20' text-anchor='middle' font-size='10' fill='#00ADEF' font-family='Arial, sans-serif'>hotstar</text></svg>`,
    brand: {
      color: '#1C2A5E',
      font: 'Arial, sans-serif',
      text: '#00ADEF',
    },
  },
  */
];

const catalogueList = document.getElementById('catalogue-list');
const selectedPackages = document.getElementById('selected-packages');
const packageTotal = document.getElementById('package-total');
const checkoutBtn = document.getElementById('checkout-btn');

let selected = [];

function animateCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s cubic-bezier(.39,.575,.56,1.000), transform 0.6s cubic-bezier(.39,.575,.56,1.000)';
      card.style.opacity = 1;
      card.style.transform = 'none';
    }, 80 * i);
  });
}

function renderCatalogue() {
  catalogueList.innerHTML = '';
  subscriptions.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.borderColor = sub.brand.color;
    card.innerHTML = `
      <div class="card-icon">${sub.icon}</div>
      <div class="discount-sticker" style="background: #D4AF37; color: #23273A;">${sub.discount}% OFF</div>
      <div class="card-title">${sub.name}</div>
      <div class="card-desc">${sub.desc}</div>
      <div class="card-price">
        <span style="color:#D4AF37;font-weight:700;">₹${sub.price}</span>
        <span style="text-decoration:line-through;opacity:0.6;font-size:0.95em;margin-left:0.5em;">₹${sub.original}</span>
      </div>
      <button class="add-btn" data-id="${sub.id}">Add to Package</button>
    `;
    card.querySelector('.add-btn').onclick = (e) => {
      addToPackage(sub.id);
      buttonRipple(e);
    };
    catalogueList.appendChild(card);
  });
  animateCards();
}

function addToPackage(id) {
  if (!selected.includes(id)) {
    selected.push(id);
    renderSelected();
  }
}

function removeFromPackage(id) {
  selected = selected.filter(sid => sid !== id);
  renderSelected();
}

function renderSelected() {
  selectedPackages.innerHTML = '';
  let total = 0;
  let details = [];
  selected.forEach(id => {
    const sub = subscriptions.find(s => s.id === id);
    total += sub.price;
    details.push(sub.name);
    const card = document.createElement('div');
    card.className = 'selected-card';
    card.innerHTML = `
      <span>${sub.icon} ${sub.name} <span style="font-weight:600;">₹${sub.price}</span></span>
      <button class="remove-btn" title="Remove" data-id="${sub.id}">&times;</button>
    `;
    card.querySelector('.remove-btn').onclick = (e) => {
      removeFromPackage(sub.id);
      buttonRipple(e);
    };
    selectedPackages.appendChild(card);
  });
  // Extra discount for 2+ items
  let extraDiscount = 0;
  if (selected.length >= 2) {
    extraDiscount = Math.round(total * 0.10); // 10% off
    total -= extraDiscount;
  }
  packageTotal.innerHTML = `Total: ₹${total}${extraDiscount ? ` <span style='color:#D4AF37;font-size:0.95em;'>(+10% combo off!)</span>` : ''}`;
  checkoutBtn.disabled = selected.length === 0;
  checkoutBtn.dataset.details = details.join(', ');
  checkoutBtn.dataset.amount = total;
}

checkoutBtn && (checkoutBtn.onclick = function(e) {
  if (selected.length === 0) return;
  buttonRipple(e);
  
  // Build detailed message
  let message = "Hi Cheapflix! I want to order:\n\n";
  let totalBeforeDiscount = 0;
  
  selected.forEach(id => {
    const sub = subscriptions.find(s => s.id === id);
    totalBeforeDiscount += sub.price;
    message += `• ${sub.name}: ₹${sub.price}\n`;
  });
  
  // Calculate discount
  let discount = 0;
  if (selected.length >= 2) {
    discount = Math.round(totalBeforeDiscount * 0.10);
  }
  
  const finalTotal = totalBeforeDiscount - discount;
  
  message += `\nSubtotal: ₹${totalBeforeDiscount}`;
  if (discount > 0) {
    message += `\nCombo Discount (10%): -₹${discount}`;
  }
  message += `\nFinal Total: ₹${finalTotal}`;
  message += `\n\nPlease help me complete my order!`;
  
  const whatsappNumber = '919202718909';
  const encodedMsg = encodeURIComponent(message);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
});

// Button ripple effect
function buttonRipple(e) {
  const btn = e.currentTarget;
  const circle = document.createElement('span');
  circle.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  circle.style.left = (e.clientX - rect.left) + 'px';
  circle.style.top = (e.clientY - rect.top) + 'px';
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}

// Add ripple CSS
(function addRippleCSS() {
  const style = document.createElement('style');
  style.innerHTML = `.ripple { position: absolute; border-radius: 50%; transform: scale(0); animation: ripple 0.6s linear; background: rgba(212,175,55,0.18); pointer-events: none; z-index: 10; width: 80px; height: 80px; left: 50%; top: 50%; }
@keyframes ripple { to { transform: scale(2.5); opacity: 0; } } button, .add-btn, .remove-btn { position: relative; overflow: hidden; }`;
  document.head.appendChild(style);
})();

// Smooth scroll for nav links
Array.from(document.querySelectorAll('.nav-links a')).forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Smooth scroll for Browse Catalogue button
const browseBtn = document.getElementById('browse-catalogue-btn');
if (browseBtn) {
  browseBtn.addEventListener('click', function() {
    const section = document.getElementById('catalogue');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  });
}

// Highlight nav link for current page
(function highlightNav() {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    if ((path === '' && link.getAttribute('href').includes('index.html')) ||
        (path && link.getAttribute('href').includes(path))) {
      link.classList.add('active');
    }
  });
})();

// How We Work section enhancements
function enhanceHowWeWork() {
  const howWeWorkSection = document.getElementById('how-we-work');
  const howWeWorkText = document.querySelector('.how-we-work-text');
  const howWeWorkContent = document.querySelector('.how-we-work-content');
  
  if (!howWeWorkSection || !howWeWorkText || !howWeWorkContent) return;

  // Typewriter effect
  const originalText = howWeWorkText.textContent;
  howWeWorkText.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < originalText.length) {
      howWeWorkText.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(typeWriter, 500);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(howWeWorkSection);

  // Interactive lightbulb
  const lightbulb = howWeWorkContent.querySelector('::before');
  howWeWorkContent.addEventListener('mouseenter', () => {
    howWeWorkContent.style.setProperty('--lightbulb-emoji', '"⚡"');
  });
  
  howWeWorkContent.addEventListener('mouseleave', () => {
    howWeWorkContent.style.setProperty('--lightbulb-emoji', '"💡"');
  });

  // Hover effect for the entire section
  howWeWorkContent.addEventListener('mouseenter', () => {
    howWeWorkContent.style.transform = 'translateY(-8px) scale(1.02)';
    howWeWorkContent.style.boxShadow = '0 8px 32px rgba(20,24,38,0.25)';
  });

  howWeWorkContent.addEventListener('mouseleave', () => {
    howWeWorkContent.style.transform = 'translateY(0) scale(1)';
    howWeWorkContent.style.boxShadow = '0 4px 24px rgba(20,24,38,0.15)';
  });
}

// Initialize enhancements
document.addEventListener('DOMContentLoaded', function() {
  enhanceHowWeWork();
});

// Initial render (only if catalogueList exists)
if (catalogueList) {
  renderCatalogue();
  renderSelected();
} 