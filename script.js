/* =============================================
   OLX Pakistan Clone - JavaScript
   ============================================= */

// =============================================
// DATA
// =============================================
const PLACEHOLDER_COLORS = [
  '#e74c3c','#2980b9','#27ae60','#8e44ad',
  '#d35400','#16a085','#c0392b','#2c3e50',
];

const listings = {
  fresh: [
    { id: 1,  title: 'Samsung Galaxy S23 Ultra 256GB',   price: 'Rs 1.75 Lac', location: 'DHA Phase 5, Lahore',       date: '2 hours ago',  category: 'Mobiles',     icon: '\uD83D\uDCF1', color: '#2980b9' },
    { id: 2,  title: 'Honda Civic 2022 Oriel Prosmatec', price: 'Rs 75 Lac',   location: 'Gulberg, Lahore',           date: '4 hours ago',  category: 'Cars',        icon: '\uD83D\uDE97', color: '#27ae60', specs: '2022 \u2022 12,000 km \u2022 Petrol' },
    { id: 3,  title: '5 Marla House Bahria Town Phase 8',price: 'Rs 2.1 Crore',location: 'Bahria Town, Rawalpindi',   date: '6 hours ago',  category: 'Houses',      icon: '\uD83C\uDFE0', color: '#e74c3c' },
    { id: 4,  title: 'Apple MacBook Air M2 2023',        price: 'Rs 3.20 Lac', location: 'Saddar, Karachi',           date: '1 day ago',    category: 'Electronics', icon: '\uD83D\uDCBB', color: '#8e44ad' },
    { id: 5,  title: 'Honda CD 70 2023 Bike',            price: 'Rs 1.65 Lac', location: 'Others, Faisalabad',        date: '3 hours ago',  category: 'Bikes',       icon: '\uD83C\uDFCD\uFE0F', color: '#d35400' },
    { id: 6,  title: 'iPhone 15 Pro Max 256GB PTA',      price: 'Rs 4.90 Lac', location: 'Clifton, Karachi',          date: '5 hours ago',  category: 'Mobiles',     icon: '\uD83D\uDCF1', color: '#16a085' },
    { id: 7,  title: 'Toyota Corolla 2021 Altis X Auto', price: 'Rs 62 Lac',   location: 'Airport, Karachi',          date: '1 hour ago',   category: 'Cars',        icon: '\uD83D\uDE99', color: '#2c3e50', specs: '2021 \u2022 31,000 km \u2022 Petrol' },
    { id: 8,  title: 'Sofa Set 7 Seater',                price: 'Rs 65,000',   location: 'Johar Town, Lahore',        date: '2 days ago',   category: 'Furniture',   icon: '\uD83D\uDECB\uFE0F', color: '#c0392b' },
  ],
  mobiles: [
    { id: 101, title: 'iPhone 14 Plus 128GB Blue PTA',         price: 'Rs 2.35 Lac', location: 'Gulshan-e-Iqbal, Karachi',  date: '1 day ago',    category: 'Mobiles', icon: '\uD83D\uDCF1', color: '#2980b9' },
    { id: 102, title: 'Samsung Galaxy A55 5G 256GB',           price: 'Rs 98,000',   location: 'Hall Road, Lahore',         date: '6 days ago',   category: 'Mobiles', icon: '\uD83D\uDCF1', color: '#27ae60' },
    { id: 103, title: 'OnePlus 12R 256GB',                     price: 'Rs 1.20 Lac', location: 'DHA Phase 1, Karachi',      date: '5 days ago',   category: 'Mobiles', icon: '\uD83D\uDCF1', color: '#8e44ad' },
    { id: 104, title: 'Xiaomi 14 Pro 512GB New',               price: 'Rs 2.10 Lac', location: 'Satellite Town, Rawalpindi',date: '3 days ago',   category: 'Mobiles', icon: '\uD83D\uDCF1', color: '#e74c3c', featured: true },
    { id: 105, title: 'Google Pixel 8 128GB Unlocked',         price: 'Rs 1.55 Lac', location: 'F-7, Islamabad',            date: '2 days ago',   category: 'Mobiles', icon: '\uD83D\uDCF1', color: '#16a085' },
    { id: 106, title: 'Infinix Note 40 Pro 256GB',             price: 'Rs 65,000',   location: 'Faisalabad',                date: '4 days ago',   category: 'Mobiles', icon: '\uD83D\uDCF1', color: '#d35400' },
    { id: 107, title: 'Oppo Reno 11 Pro 5G 256GB',             price: 'Rs 1.15 Lac', location: 'Johar Town, Lahore',        date: '1 week ago',   category: 'Mobiles', icon: '\uD83D\uDCF1', color: '#2c3e50' },
    { id: 108, title: 'Vivo V30 Pro 256GB Green',              price: 'Rs 1.05 Lac', location: 'Gulberg 3, Lahore',         date: '2 weeks ago',  category: 'Mobiles', icon: '\uD83D\uDCF1', color: '#c0392b' },
  ],
  cars: [
    { id: 201, title: 'Suzuki Alto VXR 2022',                  price: 'Rs 28 Lac',   location: 'Gulberg, Lahore',           date: '2 days ago',   category: 'Cars', icon: '\uD83D\uDE97', color: '#e74c3c', specs: '2022 \u2022 24,000 km \u2022 Petrol' },
    { id: 202, title: 'Toyota Yaris ATIV CVT 2022',            price: 'Rs 49 Lac',   location: 'DHA Phase 2, Karachi',      date: '1 day ago',    category: 'Cars', icon: '\uD83D\uDE99', color: '#2980b9', specs: '2022 \u2022 17,000 km \u2022 Petrol' },
    { id: 203, title: 'Honda City Aspire 2023 CVT',            price: 'Rs 59 Lac',   location: 'Bahria Town, Lahore',       date: '3 hours ago',  category: 'Cars', icon: '\uD83D\uDE97', color: '#27ae60', specs: '2023 \u2022 8,000 km \u2022 Petrol', featured: true },
    { id: 204, title: 'Hyundai Tucson AWD 2022/2023',          price: 'Rs 78.95 Lac',location: 'DHA Phase 5, Lahore',       date: '3 hours ago',  category: 'Cars', icon: '\uD83D\uDE99', color: '#8e44ad', specs: '2023 \u2022 19,000 km \u2022 Petrol' },
    { id: 205, title: 'Kia Picanto MT 2023',                   price: 'Rs 31 Lac',   location: 'G-13, Islamabad',           date: '5 days ago',   category: 'Cars', icon: '\uD83D\uDE97', color: '#d35400', specs: '2023 \u2022 11,000 km \u2022 Petrol' },
    { id: 206, title: 'Toyota Passo 2022 X Grade',             price: 'Rs 43.90 Lac',location: 'Maulana Shaukat Ali Rd, Lahore', date: '2 weeks ago', category: 'Cars', icon: '\uD83D\uDE99', color: '#16a085', specs: '2022 \u2022 91,000 km \u2022 Petrol' },
    { id: 207, title: 'Changan Alsvin Comfort 2023',           price: 'Rs 37 Lac',   location: 'SMCHS, Karachi',            date: '4 days ago',   category: 'Cars', icon: '\uD83D\uDE97', color: '#2c3e50', specs: '2023 \u2022 5,000 km \u2022 Petrol' },
    { id: 208, title: 'Daihatsu Cuore Manual 2010',            price: 'Rs 8.69 Lac', location: 'D Ground, Faisalabad',      date: '5 days ago',   category: 'Cars', icon: '\uD83D\uDE99', color: '#c0392b', specs: '2010 \u2022 69,000 km \u2022 Petrol' },
  ],
  bikes: [
    { id: 301, title: 'Honda CB 150F 2023',                    price: 'Rs 2.85 Lac', location: 'Gulzar-E-Hijri, Karachi',   date: '1 day ago',    category: 'Bikes', icon: '\uD83C\uDFCD\uFE0F', color: '#e74c3c' },
    { id: 302, title: 'Yamaha YBR 125 2022 Edition',           price: 'Rs 3.60 Lac', location: 'Daluwali, Sialkot',         date: '4 weeks ago',  category: 'Bikes', icon: '\uD83C\uDFCD\uFE0F', color: '#2980b9' },
    { id: 303, title: 'Honda CD 70 2015 Good Condition',       price: 'Rs 40,500',   location: 'Others, Faisalabad',        date: '3 days ago',   category: 'Bikes', icon: '\uD83C\uDFCD\uFE0F', color: '#27ae60' },
    { id: 304, title: 'Suzuki GS 150 SE 2023',                 price: 'Rs 2.25 Lac', location: 'DHA Phase 2, Karachi',      date: '2 days ago',   category: 'Bikes', icon: '\uD83C\uDFCD\uFE0F', color: '#8e44ad', featured: true },
    { id: 305, title: 'Road Prince 110cc 2022',                price: 'Rs 52,000',   location: 'Gulzar-E-Hijri, Karachi',   date: '2 days ago',   category: 'Bikes', icon: '\uD83C\uDFCD\uFE0F', color: '#d35400' },
    { id: 306, title: 'Honda Pridor 100cc 2021',               price: 'Rs 1.35 Lac', location: 'Lahore',                    date: '1 week ago',   category: 'Bikes', icon: '\uD83C\uDFCD\uFE0F', color: '#16a085' },
    { id: 307, title: 'United 70cc 2022 Lemon Color',          price: 'Rs 75,000',   location: 'Gujranwala',                date: '3 days ago',   category: 'Bikes', icon: '\uD83C\uDFCD\uFE0F', color: '#2c3e50' },
    { id: 308, title: 'Kawasaki Ninja 400 Imported',           price: 'Rs 14 Lac',   location: 'F-10, Islamabad',           date: '2 weeks ago',  category: 'Bikes', icon: '\uD83C\uDFCD\uFE0F', color: '#c0392b' },
  ],
  houses: [
    { id: 401, title: '10 Marla House DHA Phase 6 Lahore',     price: 'Rs 5.5 Crore',location: 'DHA Phase 6, Lahore',       date: '2 days ago',   category: 'Houses', icon: '\uD83C\uDFE0', color: '#e74c3c', specs: '5 beds \u2022 6 baths \u2022 10 marla' },
    { id: 402, title: 'G-13 Brand New Double Storey House',    price: 'Rs 7 Crore',  location: 'G-13, Islamabad',           date: '4 weeks ago',  category: 'Houses', icon: '\uD83C\uDFE1', color: '#2980b9', specs: '5 beds \u2022 6 baths \u2022 8 marla' },
    { id: 403, title: '5 Marla House Bahria Town Lahore',      price: 'Rs 2.6 Crore',location: 'Bahria Town, Lahore',       date: '1 week ago',   category: 'Houses', icon: '\uD83C\uDFE0', color: '#27ae60', specs: '3 beds \u2022 3 baths \u2022 5 marla', featured: true },
    { id: 404, title: 'Beautiful Farmhouse Japan Road',        price: 'Rs 15 Crore', location: 'Japan Road, Islamabad',     date: '5 days ago',   category: 'Houses', icon: '\uD83C\uDFE1', color: '#8e44ad', specs: '2 beds \u2022 5 baths \u2022 5 kanal' },
    { id: 405, title: '4 Marla House Johar Town Phase 2',      price: 'Rs 2.1 Crore',location: 'Johar Town, Lahore',        date: '3 days ago',   category: 'Houses', icon: '\uD83C\uDFE0', color: '#d35400', specs: '3 beds \u2022 2 baths \u2022 4 marla' },
    { id: 406, title: '6 Marla House F-10 Islamabad',          price: 'Rs 6.8 Crore',location: 'F-10, Islamabad',           date: '1 day ago',    category: 'Houses', icon: '\uD83C\uDFE1', color: '#16a085', specs: '4 beds \u2022 4 baths \u2022 6 marla' },
    { id: 407, title: '1 Kanal House DHA Lahore For Sale',     price: 'Rs 9.47 Crore',location: 'DHA Phase 6, Lahore',      date: '2 weeks ago',  category: 'Houses', icon: '\uD83C\uDFE0', color: '#2c3e50', specs: '5 beds \u2022 6 baths \u2022 1 kanal' },
    { id: 408, title: '3 Marla House Wapda Town Lahore',       price: 'Rs 1.2 Crore',location: 'Wapda Town, Lahore',        date: '4 days ago',   category: 'Houses', icon: '\uD83C\uDFE1', color: '#c0392b', specs: '2 beds \u2022 2 baths \u2022 3 marla' },
  ],
  electronics: [
    { id: 501, title: 'Sony 55\" 4K Smart Android TV',          price: 'Rs 1.75 Lac', location: 'Gulshan, Karachi',          date: '1 week ago',   category: 'Electronics', icon: '\uD83D\uDCFA', color: '#2980b9' },
    { id: 502, title: 'Samsung 9.5kg Fully Auto Washing Machine',price: 'Rs 85,000', location: 'Lahore',                    date: '3 days ago',   category: 'Electronics', icon: '\uD83D\uDD27', color: '#27ae60' },
    { id: 503, title: 'Dell Inspiron 15 Core i7 Gen 12',       price: 'Rs 1.85 Lac', location: 'F-7, Islamabad',            date: '5 days ago',   category: 'Electronics', icon: '\uD83D\uDCBB', color: '#8e44ad', featured: true },
    { id: 504, title: 'Haier 1.5 Ton Inverter AC 2024',        price: 'Rs 1.30 Lac', location: 'DHA, Lahore',               date: '2 days ago',   category: 'Electronics', icon: '\u2744\uFE0F', color: '#e74c3c' },
    { id: 505, title: 'LG 32\" Full HD Monitor',                price: 'Rs 55,000',   location: 'Gulberg, Lahore',           date: '1 day ago',    category: 'Electronics', icon: '\uD83D\uDDA5\uFE0F', color: '#d35400' },
    { id: 506, title: 'Gaming PC RTX 4060 Core i9',            price: 'Rs 2.99 Lac', location: 'Bhara Kahu, Islamabad',     date: '2 weeks ago',  category: 'Electronics', icon: '\uD83D\uDDA5\uFE0F', color: '#16a085' },
    { id: 507, title: 'Canon EOS 90D DSLR Camera + Lens',      price: 'Rs 2.40 Lac', location: 'Karachi',                   date: '1 week ago',   category: 'Electronics', icon: '\uD83D\uDCF7', color: '#2c3e50' },
    { id: 508, title: 'JBL Flip 6 Bluetooth Speaker',          price: 'Rs 22,000',   location: 'Saddar, Rawalpindi',        date: '4 days ago',   category: 'Electronics', icon: '\uD83D\uDD0A', color: '#c0392b' },
  ],
};

// =============================================
// FAVOURITES STATE
// =============================================
let favourites = new Set(JSON.parse(localStorage.getItem('olx_favs') || '[]'));
function saveFavourites() {
  localStorage.setItem('olx_favs', JSON.stringify([...favourites]));
}
function toggleFav(id, btn) {
  if (favourites.has(id)) {
    favourites.delete(id);
    btn.classList.remove('active');
    btn.innerHTML = '<i class="far fa-heart"></i>';
    showToast('Removed from favourites');
  } else {
    favourites.add(id);
    btn.classList.add('active');
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    showToast('Added to favourites');
  }
  saveFavourites();
}

// =============================================
// CARD RENDERER
// =============================================
function createCard(item) {
  const isFav = favourites.has(item.id);
  const favIcon = isFav ? 'fas fa-heart' : 'far fa-heart';

  const card = document.createElement('div');
  card.className = 'listing-card';
  card.innerHTML = `
    <div class="card-img-wrap">
      <div class="card-img-placeholder" style="background:${item.color}">
        <span>${item.icon}</span>
      </div>
      ${item.featured ? '<span class="card-featured-badge">FEATURED</span>' : ''}
      <button class="card-fav ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFav(${item.id}, this)">
        <i class="${favIcon}"></i>
      </button>
    </div>
    <div class="card-body">
      <div class="card-price">${item.price}</div>
      ${item.specs ? `<div class="card-specs">${item.specs}</div>` : ''}
      <div class="card-title">${item.title}</div>
      <div class="card-meta">
        <span class="card-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
        <span class="card-date"><i class="far fa-clock"></i> ${item.date}</span>
      </div>
    </div>
  `;
  card.addEventListener('click', () => openItemDetail(item));
  return card;
}

function renderSection(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  items.forEach(item => container.appendChild(createCard(item)));
}

// =============================================
// ITEM DETAIL
// =============================================
function openItemDetail(item) {
  const sellers = ['Ali Hassan', 'Ahmed Khan', 'Sara Malik', 'Usman Butt', 'Fatima Noor'];
  const seller = sellers[item.id % sellers.length];
  const desc = `This is a ${item.category} listing in excellent condition. ${item.specs ? `Specifications: ${item.specs}.` : ''} Located in ${item.location}. Serious buyers only, price is slightly negotiable. Contact for more details. WhatsApp preferred.`;

  document.getElementById('itemDetailContent').innerHTML = `
    <div class="item-detail-img-placeholder" style="background:${item.color}">
      <span style="font-size:72px">${item.icon}</span>
    </div>
    <div class="item-detail-price">${item.price}</div>
    <div class="item-detail-title">${item.title}</div>
    <div class="item-detail-meta">
      <span><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
      <span><i class="far fa-clock"></i> ${item.date}</span>
      <span><i class="fas fa-tag"></i> ${item.category}</span>
    </div>
    <div class="item-detail-desc">${desc}</div>
    <div class="item-detail-seller">
      <div class="seller-info">
        <div class="seller-name"><i class="fas fa-user-circle"></i> ${seller}</div>
        <div>Member since 2021 &bull; Lahore</div>
      </div>
      <button class="btn-contact" onclick="handleContact('${seller}')">
        <i class="fas fa-phone"></i> Show Phone Number
      </button>
    </div>
  `;
  showModal('itemModal');
}

function handleContact(name) {
  showToast(`Connecting you with ${name}...`);
}

// =============================================
// MODALS
// =============================================
function showModal(id, open = true) {
  const el = document.getElementById(id);
  if (!el) return;
  if (open) {
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    el.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeModal(event, id) {
  if (event.target === event.currentTarget) {
    showModal(id, false);
  }
}

// =============================================
// SEARCH
// =============================================
function handleSearch() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) { showToast('Please enter a search term'); return; }

  const allItems = Object.values(listings).flat();
  const results = allItems.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    item.location.toLowerCase().includes(query)
  );

  const freshContainer = document.getElementById('freshListings');
  const sectionEl = freshContainer.closest('.listings-section');
  sectionEl.querySelector('h2').textContent = `Search results for "${query}" (${results.length})`;
  freshContainer.innerHTML = '';
  if (results.length === 0) {
    freshContainer.innerHTML = '<p style="color:#888;padding:20px 0;">No listings found. Try a different keyword.</p>';
  } else {
    results.slice(0, 12).forEach(item => freshContainer.appendChild(createCard(item)));
  }
  sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  showToast(`Found ${results.length} result${results.length !== 1 ? 's' : ''}`);
}

// Allow Enter key in search box
document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});

// Sub-nav filter
document.querySelectorAll('.sub-nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.sub-nav-link').forEach(l => l.classList.remove('active-nav'));
    link.classList.add('active-nav');
    const text = link.textContent.trim();
    if (text === 'All') {
      renderSection('freshListings', listings.fresh);
      document.querySelector('#freshListings').closest('.listings-section').querySelector('h2').textContent = 'Fresh Recommendations';
    }
  });
});

// =============================================
// TOAST
// =============================================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// =============================================
// INIT
// =============================================
function init() {
  renderSection('freshListings', listings.fresh);
  renderSection('mobileListings', listings.mobiles);
  renderSection('carListings', listings.cars);
  renderSection('bikeListings', listings.bikes);
  renderSection('houseListings', listings.houses);
  renderSection('electronicsListings', listings.electronics);
}

document.addEventListener('DOMContentLoaded', init);