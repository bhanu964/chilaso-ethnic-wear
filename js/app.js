/**
 * CHILASO E-COMMERCE JAVASCRIPT APPLICATION
 * Handcrafted for Chilaso Fashion (@chilaso_)
 * Features: Auto Hero Slider, Cart Drawer, Wishlist, Shoppable Reels, Single-Line Carousel, QuickView, Auth, Search
 */

// -----------------------------------------------------------------------------
// 1. PRODUCT CATALOG DATA (Using User's Exact Assets)
// -----------------------------------------------------------------------------
const PRODUCTS = [
  // Kurthis (New Drop - Exactly 6 Dresses, 2 Rows)
  {
    id: "kurti-1",
    title: "Emerald Bloom Anarkali Kurti",
    category: "kurtis",
    categoryLabel: "Kurtis",
    price: 1499,
    originalPrice: 2250,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 142,
    image: "Kurthis/SaveClip.App_808997815_18094199930315930_9005857654987648019_n.jpg",
    description: "Handcrafted pure cotton Anarkali kurti featuring intricate neckline embroidery, flattering silhouette, and breathable festive comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: true
  },
  {
    id: "kurti-2",
    title: "Mint Mist Handloom Kurti",
    category: "kurtis",
    categoryLabel: "Kurtis",
    price: 1299,
    originalPrice: 1950,
    discount: "33% OFF",
    rating: 5.0,
    reviewsCount: 188,
    image: "Kurthis/mint green kurthi.jpeg",
    description: "Soothing mint green artisan kurti tailored from premium handloom weave. Ideal for festive gatherings, work elegance, and celebrations.",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNewDrop: true
  },
  {
    id: "kurti-3",
    title: "Crimson Royal Flared Kurti",
    category: "kurtis",
    categoryLabel: "Kurtis",
    price: 1399,
    originalPrice: 2099,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 96,
    image: "Kurthis/SaveClip.App_809235209_18094201322315930_9100156849092831516_n.jpg",
    description: "Regal crimson tiered silhouette with golden motif highlights and handcrafted sleeve borders designed to celebrate your special moments.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: true
  },
  {
    id: "kurti-4",
    title: "Ivory Flora Festive Kurti",
    category: "kurtis",
    categoryLabel: "Kurtis",
    price: 1349,
    originalPrice: 2025,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 114,
    image: "Kurthis/SaveClip.App_810118173_18094299029315930_3799147274588881270_n.jpg",
    description: "Delicate ivory floral printed kurti with contrast potli buttons and flowy ethnic hemline for effortless chic allure.",
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: true
  },
  {
    id: "kurti-5",
    title: "Mustard Aura Embroidered Kurti",
    category: "kurtis",
    categoryLabel: "Kurtis",
    price: 1449,
    originalPrice: 2175,
    discount: "33% OFF",
    rating: 4.7,
    reviewsCount: 78,
    image: "Kurthis/WhatsApp Image 2026-09-15 at 18.53.29.jpeg",
    description: "Radiant mustard yellow shade elevated with fine thread embroidery. Designed with lightweight airy drape for daylong comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: true
  },
  {
    id: "kurti-6",
    title: "Peacock Teal Designer Kurti",
    category: "kurtis",
    categoryLabel: "Kurtis",
    price: 1499,
    originalPrice: 2250,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 89,
    image: "Kurthis/WhatsApp Image 2026-10-04 at 14.03.32.jpeg",
    description: "Deep peacock teal hue with handcrafted zari embellishments and contemporary cuts. A festive showstopper.",
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: true
  },

  // Sarees (All Prices in ₹1200 - ₹1500 Range)
  {
    id: "saree-1",
    title: "Royal Kanjeevaram Silk Saree",
    category: "saris",
    categoryLabel: "Sarees",
    price: 1499,
    originalPrice: 2250,
    discount: "33% OFF",
    rating: 5.0,
    reviewsCount: 210,
    image: "Sarees/WhatsApp Image 2026-09-15 at 20.48.58 (1).jpeg",
    description: "Traditional rich woven silk saree with opulent golden zari pallu and rich heritage borders for weddings and grand milestones.",
    sizes: ["Free Size (6.3m with Blouse)"],
    isNewDrop: false
  },
  {
    id: "saree-2",
    title: "Blush Pink Tissue Zari Saree",
    category: "saris",
    categoryLabel: "Sarees",
    price: 1399,
    originalPrice: 2099,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 164,
    image: "Sarees/WhatsApp Image 2026-09-15 at 20.52.46.jpeg",
    description: "Glimmering blush pink tissue silk saree that catches the light with subtle sophistication. Comes with matching blouse piece.",
    sizes: ["Free Size (6.3m with Blouse)"],
    isNewDrop: false
  },
  {
    id: "saree-3",
    title: "Golden Amber Banarasi Saree",
    category: "saris",
    categoryLabel: "Sarees",
    price: 1449,
    originalPrice: 2175,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 135,
    image: "Sarees/WhatsApp Image 2026-09-15 at 20.52.46 (1).jpeg",
    description: "Timeless golden Banarasi drape featuring all-over floral butta weaving and intricate contrast border styling.",
    sizes: ["Free Size (6.3m with Blouse)"],
    isNewDrop: false
  },
  {
    id: "saree-4",
    title: "Pastel Floral Organza Saree",
    category: "saris",
    categoryLabel: "Sarees",
    price: 1299,
    originalPrice: 1950,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 92,
    image: "Sarees/WhatsApp Image 2026-09-15 at 20.54.44.jpeg",
    description: "Featherweight sheer organza silk saree graced with delicate hand-painted floral motifs and scalloped border work.",
    sizes: ["Free Size (6.3m with Blouse)"],
    isNewDrop: false
  },
  {
    id: "saree-5",
    title: "Emerald Heritage Zari Saree",
    category: "saris",
    categoryLabel: "Sarees",
    price: 1349,
    originalPrice: 2025,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 148,
    image: "Sarees/WhatsApp Image 2026-09-15 at 20.58.04.jpeg",
    description: "Deep emerald silk saree adorned with classic temple borders and opulent zari craftsmanship.",
    sizes: ["Free Size (6.3m with Blouse)"],
    isNewDrop: false
  },
  {
    id: "saree-6",
    title: "Sunset Crimson Festive Saree",
    category: "saris",
    categoryLabel: "Sarees",
    price: 1499,
    originalPrice: 2250,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 120,
    image: "Sarees/WhatsApp Image 2026-09-15 at 20.58.04 (1).jpeg",
    description: "A celebration of colors, blending fiery sunset red and rich zari sheen for weddings and festivities.",
    sizes: ["Free Size (6.3m with Blouse)"],
    isNewDrop: false
  },

  // Half-Sarees (Off-Saris - All Prices in ₹1200 - ₹1500 Range)
  {
    id: "half-saree-1",
    title: "Heritage Peacock Half-Saree Set",
    category: "half-saree",
    categoryLabel: "Half Sarees",
    price: 1499,
    originalPrice: 2250,
    discount: "33% OFF",
    rating: 5.0,
    reviewsCount: 175,
    image: "half-saree/WhatsApp Image 2026-10-11 at 06.20.27.jpeg",
    description: "Grand traditional South Indian Dhavani set comprising pure silk flared skirt, designer stitched blouse, and ornate zari voni.",
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: false
  },
  {
    id: "half-saree-2",
    title: "Velvet Crimson Bridal Half-Saree",
    category: "half-saree",
    categoryLabel: "Half Sarees",
    price: 1449,
    originalPrice: 2175,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 130,
    image: "half-saree/WhatsApp Image 2026-10-11 at 06.20.28.jpeg",
    description: "Luxury bridal half-saree with rich red can-can flare, heavily embroidered blouse, and grand drape dupatta.",
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: false
  },
  {
    id: "half-saree-3",
    title: "Golden Mustard Tradition Half-Saree",
    category: "half-saree",
    categoryLabel: "Half Sarees",
    price: 1399,
    originalPrice: 2099,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 112,
    image: "half-saree/WhatsApp Image 2026-10-11 at 06.20.28 (1).jpeg",
    description: "Festive auspicious yellow & gold pattu half-saree ensemble perfect for puberty ceremonies, haldi, and pooja functions.",
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: false
  },
  {
    id: "half-saree-4",
    title: "Blush Rose Pattu Half-Saree",
    category: "half-saree",
    categoryLabel: "Half Sarees",
    price: 1349,
    originalPrice: 2025,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 95,
    image: "half-saree/WhatsApp Image 2026-10-11 at 06.20.29.jpeg",
    description: "Youthful modern pastel pink half-saree crafted with fine jacquard borders and lightweight flowing dhavani.",
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: false
  },
  {
    id: "half-saree-5",
    title: "Emerald Royal Grand Half-Saree",
    category: "half-saree",
    categoryLabel: "Half Sarees",
    price: 1499,
    originalPrice: 2250,
    discount: "33% OFF",
    rating: 5.0,
    reviewsCount: 160,
    image: "half-saree/WhatsApp Image 2026-10-11 at 06.21.05.jpeg",
    description: "Epitome of royal elegance. Heavy zari pleated lehenga with tailored blouse and matching rich dupatta.",
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: false
  },

  // Dresses (All Prices in ₹1200 - ₹1500 Range)
  {
    id: "dress-1",
    title: "Chilaso Festive Twirl Maxi Dress",
    category: "dresses",
    categoryLabel: "Dresses",
    price: 1299,
    originalPrice: 1950,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 88,
    image: "Kurthis/SaveClip.App_810118173_18094299029315930_3799147274588881270_n.jpg",
    description: "Full flare ethnic fusion maxi dress crafted for dancing, festivities, and evening dinners. Features comfortable cinched waist.",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNewDrop: false
  },
  {
    id: "dress-2",
    title: "Flared Anarkali Occasion Dress",
    category: "dresses",
    categoryLabel: "Dresses",
    price: 1399,
    originalPrice: 2099,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 104,
    image: "Kurthis/SaveClip.App_809235209_18094201322315930_9100156849092831516_n.jpg",
    description: "Floor length festive gown dress with gold foil accents, flared hemline, and regal neckline detailing.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: false
  }
];

// Video Reels Catalog
const VIDEO_REELS = [
  {
    id: "reel-1",
    title: "Grand Half-Saree Celebration Look",
    videoSrc: "Videos/SaveClip.App_AQPcCmxQ7FdiVxQSkMitR-64ntkGTd6m-VEAljawPlXZ8G6PJA1g0oUXEN35XaR7dNrXFmDJVjwQ37C7Zo4ukHEeRZhCvgSA_e0qtGc.mp4",
    productRefId: "half-saree-1",
    tag: "Half Saree Edit",
    priceText: "₹1,499"
  },
  {
    id: "reel-2",
    title: "Festive Silk Saree Elegance",
    videoSrc: "Videos/SaveClip.App_AQNRSzKzTubOXv30iZSg-UQCyCDNrlS0op7PiPPiyzONA2sybUlBOtaVtSYtjc2s3F_cGWvaGYupI99SGiHxzet5FRxEdAdjvE4DmQY.mp4",
    productRefId: "saree-1",
    tag: "Silk Saree",
    priceText: "₹1,499"
  },
  {
    id: "reel-3",
    title: "Everyday Chic Kurti Twirl",
    videoSrc: "Videos/SaveClip.App_AQNasc19BOeP9K1o2qbenHFNz8mttm9TT-yo1CO4BzyeGEZuZzmKXkbsSrV_-eHPi8Hrs-XNgZZCcOw9vYfcOEvRKmKUBvvHP_T9fU8.mp4",
    productRefId: "kurti-2",
    tag: "New Drop",
    priceText: "₹1,299"
  },
  {
    id: "reel-4",
    title: "Bridal Pattu Half-Saree Look",
    videoSrc: "Videos/SaveClip.App_AQPmlZ6lMCA_uxxrG5EuHQp328Ou-ngHtQCJbL9PZaYpisz5h5vFlNzs7XlErP6HFj_el3zdR9gh6wECOnzOKywZwdMxI_Cks_v-LqA.mp4",
    productRefId: "half-saree-2",
    tag: "Wedding Drop",
    priceText: "₹1,449"
  },
  {
    id: "reel-5",
    title: "Handcrafted Zari Border Details",
    videoSrc: "Videos/SaveClip.App_AQNZCoVB-9nXPQTPY557mK5xRD8Mu__9ZUKWK8ugjqajuK8a0UjkiNfM68LuNgc1Qr0HjQUSCKqs_r65GuuWINFSZRBQmtPEnHUU_Fs.mp4",
    productRefId: "saree-2",
    tag: "Zari Silk",
    priceText: "₹1,399"
  },
  {
    id: "reel-6",
    title: "Casual Glamour Festive Kurti",
    videoSrc: "Videos/SaveClip.App_AQMQBssttf7hfxxJnENctya5FIsLicVJJuvuw1U2T1E4vhEGBDgO5f3NnpSJVJgHt_Ice3YMOp6OOacTof23OZWmD6mu3CbQ3WVUKzs.mp4",
    productRefId: "kurti-1",
    tag: "Bestseller",
    priceText: "₹1,499"
  }
];

// -----------------------------------------------------------------------------
// 2. STORE STATE (LocalStorage Synced)
// -----------------------------------------------------------------------------
class ChilasoStore {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("chilaso_cart") || "[]");
    this.wishlist = JSON.parse(localStorage.getItem("chilaso_wishlist") || "[]");
    this.user = JSON.parse(localStorage.getItem("chilaso_user") || "null");
    this.appliedDiscount = 0;
  }

  saveCart() {
    localStorage.setItem("chilaso_cart", JSON.stringify(this.cart));
    this.updateBadges();
  }

  saveWishlist() {
    localStorage.setItem("chilaso_wishlist", JSON.stringify(this.wishlist));
    this.updateBadges();
  }

  saveUser(userData) {
    this.user = userData;
    localStorage.setItem("chilaso_user", JSON.stringify(userData));
    this.updateUserUI();
  }

  logoutUser() {
    this.user = null;
    localStorage.removeItem("chilaso_user");
    this.updateUserUI();
  }

  addToCart(productId, size = "M", quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.cart.findIndex(item => item.id === productId && item.size === size);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        size: size,
        quantity: quantity
      });
    }

    this.saveCart();
    showToast(`Added "${product.title}" (${size}) to your bag!`);
  }

  updateQuantity(productId, size, change) {
    const item = this.cart.find(i => i.id === productId && i.size === size);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
      this.removeFromCart(productId, size);
      return;
    }
    this.saveCart();
  }

  removeFromCart(productId, size) {
    this.cart = this.cart.filter(item => !(item.id === productId && item.size === size));
    this.saveCart();
    showToast("Item removed from your bag");
  }

  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      showToast(`Removed from your wishlist`);
    } else {
      this.wishlist.push(productId);
      if (product) showToast(`Saved "${product.title}" to wishlist ❤️`);
    }
    this.saveWishlist();
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  updateBadges() {
    const cartBadges = document.querySelectorAll(".cart-count-badge");
    const cartCount = this.getCartCount();
    cartBadges.forEach(badge => {
      badge.textContent = cartCount;
      badge.style.display = cartCount > 0 ? "inline-block" : "none";
    });

    const wishlistBadges = document.querySelectorAll(".wishlist-count-badge");
    const wishCount = this.wishlist.length;
    wishlistBadges.forEach(badge => {
      badge.textContent = wishCount;
      badge.style.display = wishCount > 0 ? "inline-block" : "none";
    });

    document.querySelectorAll("[data-wishlist-id]").forEach(btn => {
      const pid = btn.getAttribute("data-wishlist-id");
      if (this.isInWishlist(pid)) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  updateUserUI() {
    const userBtnText = document.getElementById("header-user-text");
    if (!userBtnText) return;
    if (this.user) {
      userBtnText.textContent = `Hi, ${this.user.name.split(" ")[0]}`;
    } else {
      userBtnText.textContent = "Account";
    }
  }
}

const store = new ChilasoStore();

// -----------------------------------------------------------------------------
// 3. HERO BANNER SLIDER (TonesFashion Style, 2.8s Auto-Slide)
// -----------------------------------------------------------------------------
function initHeroSlider() {
  const track = document.querySelector(".hero-slider-track");
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  const prevBtn = document.querySelector(".hero-nav-prev");
  const nextBtn = document.querySelector(".hero-nav-next");

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoSlideTimer = null;
  const SLIDE_DURATION = 2800;

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, SLIDE_DURATION);
  }

  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
      startAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
      startAutoSlide();
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      goToSlide(idx);
      startAutoSlide();
    });
  });

  const sliderWrapper = document.querySelector(".hero-slider-wrapper");
  if (sliderWrapper) {
    sliderWrapper.addEventListener("mouseenter", stopAutoSlide);
    sliderWrapper.addEventListener("mouseleave", startAutoSlide);

    let startX = 0;
    let endX = 0;
    sliderWrapper.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      stopAutoSlide();
    }, { passive: true });

    sliderWrapper.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        goToSlide(currentIndex + 1);
      } else if (endX - startX > 50) {
        goToSlide(currentIndex - 1);
      }
      startAutoSlide();
    }, { passive: true });
  }

  startAutoSlide();
}

// -----------------------------------------------------------------------------
// 4. PRODUCT CARDS & SINGLE-LINE AUTO-GLIDING CAROUSEL
// -----------------------------------------------------------------------------
function renderProductCard(product) {
  const isWish = store.isInWishlist(product.id);
  const formattedPrice = `₹${product.price.toLocaleString("en-IN")}`;
  const formattedOrigPrice = `₹${product.originalPrice.toLocaleString("en-IN")}`;

  return `
    <article class="product-card" data-category="${product.category}" data-id="${product.id}">
      <div class="product-media">
        <span class="product-badge-sale">Save ${product.discount.replace(" OFF", "")}</span>
        
        <button class="product-wishlist-btn ${isWish ? 'active' : ''}" 
                data-wishlist-id="${product.id}" 
                aria-label="Add to wishlist"
                onclick="event.stopPropagation(); store.toggleWishlist('${product.id}'); renderWishlistDrawer();">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="${isWish ? '#c62a32' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>

        <img src="${product.image}" alt="${product.title}" loading="lazy" />

        <button class="product-quick-view-btn" onclick="openQuickView('${product.id}')">
          Quick View
        </button>
      </div>

      <div class="product-info">
        <span class="product-category-tag">${product.categoryLabel}</span>
        <h3 class="product-title" title="${product.title}">${product.title}</h3>

        <div class="product-price-box">
          <span class="price-current">${formattedPrice}</span>
          <del class="price-original">${formattedOrigPrice}</del>
          <span class="price-discount-percent">${product.discount}</span>
        </div>

        <button class="product-add-cart-btn" onclick="store.addToCart('${product.id}', 'M', 1); openCartDrawer();">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>
          </svg>
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

function renderProductGrids() {
  const newDropContainer = document.getElementById("new-drop-grid");
  const singleLineCarousel = document.getElementById("single-line-carousel");
  const sareesLineCarousel = document.getElementById("sarees-line-carousel");

  // Render New Drop Kurtis
  if (newDropContainer) {
    const kurtis = PRODUCTS.filter(p => p.category === "kurtis");
    newDropContainer.innerHTML = kurtis.map(renderProductCard).join("");
  }

  // Render Single-Line Carousel for All Collections (moves one by one)
  if (singleLineCarousel) {
    singleLineCarousel.innerHTML = PRODUCTS.map(renderProductCard).join("");
    initSingleLineCarouselAutoScroll();
  }

  // Render Dedicated Sarees Line (User Requested after Store Image)
  if (sareesLineCarousel) {
    const sarees = PRODUCTS.filter(p => p.category === "saris");
    sareesLineCarousel.innerHTML = sarees.map(renderProductCard).join("");
  }

  store.updateBadges();
}

function stepSareesLine(direction) {
  const carousel = document.getElementById("sarees-line-carousel");
  if (!carousel) return;
  const card = carousel.querySelector(".product-card");
  const step = card ? card.offsetWidth + 20 : 290;
  carousel.scrollBy({ left: step * direction, behavior: "smooth" });
}

// Auto-gliding carousel that gently steps one by one
function initSingleLineCarouselAutoScroll() {
  const carousel = document.getElementById("single-line-carousel");
  const prevBtn = document.getElementById("carousel-prev-btn");
  const nextBtn = document.getElementById("carousel-next-btn");
  if (!carousel) return;

  let autoScrollTimer = null;
  const STEP_INTERVAL = 3800; // takes long time as user requested

  function stepNext() {
    const card = carousel.querySelector(".product-card");
    const step = card ? card.offsetWidth + 18 : 280;
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: step, behavior: "smooth" });
    }
  }

  function stepPrev() {
    const card = carousel.querySelector(".product-card");
    const step = card ? card.offsetWidth + 18 : 280;
    if (carousel.scrollLeft <= 10) {
      carousel.scrollTo({ left: carousel.scrollWidth, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: -step, behavior: "smooth" });
    }
  }

  function startAuto() {
    stopAuto();
    autoScrollTimer = setInterval(stepNext, STEP_INTERVAL);
  }

  function stopAuto() {
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }
  }

  if (nextBtn) nextBtn.addEventListener("click", () => { stepNext(); startAuto(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { stepPrev(); startAuto(); });

  carousel.addEventListener("mouseenter", stopAuto);
  carousel.addEventListener("mouseleave", startAuto);
  carousel.addEventListener("touchstart", stopAuto, { passive: true });
  carousel.addEventListener("touchend", startAuto, { passive: true });

  startAuto();
}

function filterCategoryFromSection(cat) {
  const carousel = document.getElementById("single-line-carousel");
  if (!carousel) return;

  const targetCard = carousel.querySelector(`.product-card[data-category="${cat}"]`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  const section = document.getElementById("all-collections-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// -----------------------------------------------------------------------------
// 5. WATCH, SHOP, REPEAT - SHOPPABLE VIDEO REELS
// -----------------------------------------------------------------------------
function renderVideoReels() {
  const container = document.getElementById("video-reels-container");
  if (!container) return;

  container.innerHTML = VIDEO_REELS.map(reel => `
    <div class="reel-card" onclick="openReelModal('${reel.id}')">
      <video src="${reel.videoSrc}" 
             muted 
             loop 
             playsinline 
             preload="metadata"
             onmouseenter="this.play()" 
             onmouseleave="this.pause()">
      </video>

      <div class="reel-overlay">
        <div class="reel-top-bar">
          <span class="reel-tag">${reel.tag}</span>
          <button class="reel-sound-btn" onclick="event.stopPropagation(); toggleReelCardSound(this);">
            <svg viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          </button>
        </div>

        <div class="reel-bottom-info">
          <h4 class="reel-title">${reel.title}</h4>
          <div class="reel-shop-pill">
            <span>Shop This Look</span>
            <strong>${reel.priceText}</strong>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function toggleReelCardSound(btn) {
  const card = btn.closest(".reel-card");
  const video = card.querySelector("video");
  if (!video) return;

  video.muted = !video.muted;
  if (!video.muted) {
    video.play();
    btn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
    `;
  } else {
    btn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
      </svg>
    `;
  }
}

function openReelModal(reelId) {
  const reel = VIDEO_REELS.find(r => r.id === reelId);
  if (!reel) return;
  const product = PRODUCTS.find(p => p.id === reel.productRefId);

  const modal = document.getElementById("reel-modal");
  const modalVideo = document.getElementById("reel-modal-video");
  const modalInfo = document.getElementById("reel-modal-info");

  if (!modal || !modalVideo || !modalInfo) return;

  modalVideo.src = reel.videoSrc;
  modalVideo.muted = false;
  modalVideo.play().catch(() => {
    modalVideo.muted = true;
    modalVideo.play();
  });

  modalInfo.innerHTML = `
    <h3 style="font-size:1.125rem; font-weight:700; margin-bottom:6px;">${reel.title}</h3>
    <p style="color:#666; font-size:0.8125rem; margin-bottom:14px;">Chilaso Exclusive Reel</p>

    ${product ? `
      <div style="display:flex; gap:12px; align-items:center; background:#f9f9f9; padding:10px; border-radius:6px; margin-bottom:16px;">
        <img src="${product.image}" style="width:56px; height:70px; object-fit:cover; border-radius:4px;" />
        <div>
          <h4 style="font-size:0.875rem; font-weight:600;">${product.title}</h4>
          <div style="font-size:1rem; font-weight:700; color:#181818; margin-top:2px;">
            ₹${product.price.toLocaleString("en-IN")} <del style="font-size:0.8125rem; color:#888;">₹${product.originalPrice.toLocaleString("en-IN")}</del>
          </div>
        </div>
      </div>

      <button class="hero-shop-now-btn" style="width:100%; justify-content:center;" onclick="closeReelModal(); store.addToCart('${product.id}', 'M', 1); openCartDrawer();">
        Add Featured Look to Cart (₹${product.price})
      </button>
    ` : ''}
  `;

  modal.classList.add("is-open");
}

function closeReelModal() {
  const modal = document.getElementById("reel-modal");
  const modalVideo = document.getElementById("reel-modal-video");
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
  if (modal) modal.classList.remove("is-open");
}

// -----------------------------------------------------------------------------
// 6. CART DRAWER SYSTEM
// -----------------------------------------------------------------------------
function openNavDrawer() {
  const drawer = document.getElementById("mobile-nav-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (drawer) drawer.classList.add("is-open");
  if (backdrop) backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeNavDrawer() {
  const drawer = document.getElementById("mobile-nav-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (drawer) drawer.classList.remove("is-open");
  if (backdrop) backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (drawer) drawer.classList.add("is-open");
  if (backdrop) backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (drawer) drawer.classList.remove("is-open");
  if (backdrop) backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
}

function renderCartDrawer() {
  const cartBody = document.getElementById("cart-drawer-body");
  const subtotalEl = document.getElementById("cart-subtotal-val");
  const finalTotalEl = document.getElementById("cart-total-val");
  const progressFill = document.getElementById("free-shipping-fill");
  const progressText = document.getElementById("free-shipping-text");

  if (!cartBody) return;

  const FREE_SHIPPING_THRESHOLD = 1999;
  const subtotal = store.getCartSubtotal();
  const discountAmount = Math.round(subtotal * (store.appliedDiscount / 100));
  const finalTotal = subtotal - discountAmount;

  if (progressFill && progressText) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      progressFill.style.width = "100%";
      progressText.innerHTML = `🎉 <strong>Congratulations!</strong> You have unlocked FREE Pan-India Shipping!`;
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      progressFill.style.width = `${pct}%`;
      progressText.innerHTML = `Add <strong>₹${remaining.toLocaleString("en-IN")}</strong> more for <strong>FREE Shipping</strong>!`;
    }
  }

  if (store.cart.length === 0) {
    cartBody.innerHTML = `
      <div style="text-align:center; padding:48px 16px;">
        <svg viewBox="0 0 24 24" width="56" height="56" fill="#ccc" style="margin-bottom:14px;">
          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"/>
        </svg>
        <h3 style="font-size:1.125rem; font-weight:700; margin-bottom:6px;">Your bag is empty</h3>
        <p style="color:#777; font-size:0.875rem; margin-bottom:20px;">Discover our new drop festive kurtis and sarees to fill your bag!</p>
        <button class="hero-shop-now-btn" style="background:#181818; color:#fff;" onclick="closeCartDrawer();">Start Shopping</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₹0";
    if (finalTotalEl) finalTotalEl.textContent = "₹0";
    return;
  }

  cartBody.innerHTML = store.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
      
      <div class="cart-item-details">
        <div>
          <h4 class="cart-item-title">${item.title}</h4>
          <p class="cart-item-meta">Size: <strong>${item.size}</strong></p>
          <div style="font-size:0.9375rem; font-weight:700; color:#181818; margin-top:2px;">
            ₹${(item.price * item.quantity).toLocaleString("en-IN")}
          </div>
        </div>

        <div class="cart-item-price-qty">
          <div class="qty-control">
            <button class="qty-btn" onclick="store.updateQuantity('${item.id}', '${item.size}', -1); renderCartDrawer();">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="store.updateQuantity('${item.id}', '${item.size}', 1); renderCartDrawer();">+</button>
          </div>

          <button class="cart-item-remove-btn" onclick="store.removeFromCart('${item.id}', '${item.size}'); renderCartDrawer();">
            Remove
          </button>
        </div>
      </div>
    </div>
  `).join("");

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  if (finalTotalEl) finalTotalEl.textContent = `₹${finalTotal.toLocaleString("en-IN")}`;
}

function applyCouponCode() {
  const input = document.getElementById("cart-coupon-input");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === "CHILASO10" || code === "FIRST10") {
    store.appliedDiscount = 10;
    showToast("🎉 Promo Code applied! Extra 10% Discount activated.");
    renderCartDrawer();
  } else if (code === "SAVE33") {
    store.appliedDiscount = 33;
    showToast("🔥 Mega 33% Savings applied!");
    renderCartDrawer();
  } else {
    showToast("Invalid promo code. Try CHILASO10");
  }
}

// -----------------------------------------------------------------------------
// 7. WISHLIST DRAWER
// -----------------------------------------------------------------------------
function openWishlistDrawer() {
  renderWishlistDrawer();
  const drawer = document.getElementById("wishlist-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (drawer) drawer.classList.add("is-open");
  if (backdrop) backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeWishlistDrawer() {
  const drawer = document.getElementById("wishlist-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (drawer) drawer.classList.remove("is-open");
  if (backdrop) backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
}

function renderWishlistDrawer() {
  const container = document.getElementById("wishlist-drawer-body");
  if (!container) return;

  if (store.wishlist.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:48px 16px;">
        <svg viewBox="0 0 24 24" width="56" height="56" fill="#ccc" style="margin-bottom:14px;">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <h3 style="font-size:1.125rem; font-weight:700; margin-bottom:6px;">Your Wishlist is Empty</h3>
        <p style="color:#777; font-size:0.875rem; margin-bottom:20px;">Save your favorite kurtis and sarees here to shop anytime!</p>
        <button class="hero-shop-now-btn" style="background:#181818; color:#fff;" onclick="closeWishlistDrawer();">Explore Collections</button>
      </div>
    `;
    return;
  }

  const savedProducts = PRODUCTS.filter(p => store.wishlist.includes(p.id));

  container.innerHTML = savedProducts.map(product => `
    <div class="cart-item">
      <img src="${product.image}" alt="${product.title}" class="cart-item-img" />
      <div class="cart-item-details">
        <div>
          <h4 class="cart-item-title">${product.title}</h4>
          <p class="cart-item-meta">${product.categoryLabel}</p>
          <div style="font-size:0.9375rem; font-weight:700; color:#181818; margin-top:2px;">
            ₹${product.price.toLocaleString("en-IN")} <del style="font-size:0.75rem; color:#888;">₹${product.originalPrice.toLocaleString("en-IN")}</del>
          </div>
        </div>

        <div style="display:flex; gap:8px; margin-top:8px;">
          <button class="hero-shop-now-btn" style="padding:6px 14px; font-size:0.75rem; background:#181818; color:#fff;" onclick="store.addToCart('${product.id}', 'M', 1); store.toggleWishlist('${product.id}'); renderWishlistDrawer(); openCartDrawer();">
            Move to Cart
          </button>
          <button class="cart-item-remove-btn" onclick="store.toggleWishlist('${product.id}'); renderWishlistDrawer();">
            Remove
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// -----------------------------------------------------------------------------
// 8. PRODUCT QUICK VIEW MODAL
// -----------------------------------------------------------------------------
let selectedQuickViewSize = "M";

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  selectedQuickViewSize = product.sizes[0] || "M";

  const modal = document.getElementById("quickview-modal");
  const gallery = document.getElementById("quickview-gallery-wrap");
  const details = document.getElementById("quickview-details-wrap");

  if (!modal || !gallery || !details) return;

  gallery.innerHTML = `
    <div style="position:relative;">
      <span class="product-badge-sale" style="position:absolute; top:12px; left:12px;">Save ${product.discount.replace(" OFF", "")}</span>
      <img src="${product.image}" alt="${product.title}" style="width:100%; aspect-ratio:3/4; object-fit:cover; border-radius:8px;" />
    </div>
  `;

  details.innerHTML = `
    <span class="product-category-tag">${product.categoryLabel}</span>
    <h2 style="font-size:1.375rem; font-family:var(--font-family-serif); font-weight:700; margin-bottom:12px;">${product.title}</h2>

    <div class="product-price-box" style="margin-bottom:14px;">
      <span class="price-current" style="font-size:1.375rem;">₹${product.price.toLocaleString("en-IN")}</span>
      <del class="price-original" style="font-size:1rem;">₹${product.originalPrice.toLocaleString("en-IN")}</del>
      <span class="price-discount-percent" style="font-size:0.8125rem;">${product.discount}</span>
    </div>

    <p style="color:#555; font-size:0.875rem; line-height:1.5; margin-bottom:18px;">
      ${product.description}
    </p>

    <div class="size-select-group">
      <div class="size-label">
        <span>Select Size:</span>
        <span style="color:var(--color-secondary); font-weight:600; cursor:pointer;" onclick="showToast('S(36), M(38), L(40), XL(42), XXL(44)');">Size Guide</span>
      </div>
      <div class="size-options">
        ${product.sizes.map(sz => `
          <button class="size-btn ${sz === selectedQuickViewSize ? 'active' : ''}" onclick="selectQuickViewSize('${sz}', this)">
            ${sz}
          </button>
        `).join("")}
      </div>
    </div>

    <div style="display:flex; gap:10px; margin-top:20px;">
      <button class="hero-shop-now-btn" style="flex:1; justify-content:center; background:#181818; color:#fff;" onclick="store.addToCart('${product.id}', selectedQuickViewSize, 1); closeQuickView(); openCartDrawer();">
        Add to Bag
      </button>
      <button class="hero-shop-now-btn" style="flex:1; justify-content:center; background:var(--color-secondary); color:#fff;" onclick="store.addToCart('${product.id}', selectedQuickViewSize, 1); closeQuickView(); openCheckoutModal();">
        Buy It Now
      </button>
    </div>

    <div style="border-top:1px solid #ebebeb; margin-top:20px; padding-top:14px; font-size:0.8125rem; color:#666; display:flex; flex-direction:column; gap:6px;">
      <div>✔ <strong>Free Shipping:</strong> On orders above ₹1,999</div>
      <div>✔ <strong>Easy Exchanges:</strong> 7-day doorstep exchange</div>
      <div>✔ <strong>Cash on Delivery:</strong> Available across India</div>
    </div>
  `;

  modal.classList.add("is-open");
}

function selectQuickViewSize(size, btn) {
  selectedQuickViewSize = size;
  const container = btn.parentElement;
  container.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function closeQuickView() {
  const modal = document.getElementById("quickview-modal");
  if (modal) modal.classList.remove("is-open");
}

// -----------------------------------------------------------------------------
// 9. SEARCH DRAWER & LIVE FILTER
// -----------------------------------------------------------------------------
function openSearchModal() {
  const modal = document.getElementById("search-modal");
  if (modal) {
    modal.classList.add("is-open");
    const input = document.getElementById("search-input");
    if (input) setTimeout(() => input.focus(), 150);
  }
}

function closeSearchModal() {
  const modal = document.getElementById("search-modal");
  if (modal) modal.classList.remove("is-open");
}

function handleSearchInput(query) {
  const resultsContainer = document.getElementById("search-results-list");
  if (!resultsContainer) return;

  const q = query.trim().toLowerCase();
  if (q.length === 0) {
    resultsContainer.innerHTML = `<p style="color:#777; font-size:0.875rem;">Start typing to search for kurtis, sarees, half sarees...</p>`;
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p style="color:#777; font-size:0.875rem;">No items found matching "${query}".</p>`;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px solid #eee; cursor:pointer;" onclick="closeSearchModal(); openQuickView('${p.id}');">
      <div style="display:flex; align-items:center; gap:10px;">
        <img src="${p.image}" style="width:44px; height:56px; object-fit:cover; border-radius:4px;" />
        <div>
          <h4 style="font-size:0.85rem; font-weight:600;">${p.title}</h4>
          <span style="font-size:0.75rem; color:#888;">${p.categoryLabel}</span>
        </div>
      </div>
      <div style="font-weight:700; color:#181818; font-size:0.875rem;">
        ₹${p.price.toLocaleString("en-IN")}
      </div>
    </div>
  `).join("");
}

// -----------------------------------------------------------------------------
// 10. AUTH & ACCOUNT MODAL
// -----------------------------------------------------------------------------
function openAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;

  if (store.user) {
    renderAccountProfile();
  } else {
    renderLoginForm();
  }

  modal.classList.add("is-open");
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.classList.remove("is-open");
}

function renderLoginForm() {
  const container = document.getElementById("auth-modal-content");
  if (!container) return;

  container.innerHTML = `
    <div class="auth-tabs">
      <button class="auth-tab-btn active" onclick="renderLoginForm()">Sign In</button>
      <button class="auth-tab-btn" onclick="renderRegisterForm()">Create Account</button>
    </div>

    <form class="auth-form" onsubmit="handleLoginSubmit(event)">
      <div class="form-group">
        <label>Email or Mobile</label>
        <input type="text" id="auth-email" class="form-input" placeholder="e.g. yourname@gmail.com" required value="bhanuprasad@chilaso.com" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" id="auth-password" class="form-input" placeholder="••••••••" required value="chilaso2026" />
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8125rem;">
        <label style="display:flex; align-items:center; gap:6px;">
          <input type="checkbox" checked /> Remember me
        </label>
        <a href="#" style="color:var(--color-secondary);" onclick="event.preventDefault(); showToast('Password reset link sent.');">Forgot?</a>
      </div>

      <button type="submit" class="hero-shop-now-btn" style="width:100%; justify-content:center; background:#181818; color:#fff; margin-top:6px;">Sign In</button>
    </form>
  `;
}

function renderRegisterForm() {
  const container = document.getElementById("auth-modal-content");
  if (!container) return;

  container.innerHTML = `
    <div class="auth-tabs">
      <button class="auth-tab-btn" onclick="renderLoginForm()">Sign In</button>
      <button class="auth-tab-btn active" onclick="renderRegisterForm()">Create Account</button>
    </div>

    <form class="auth-form" onsubmit="handleRegisterSubmit(event)">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="reg-name" class="form-input" placeholder="Bhanu Prasad" required />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input type="email" id="reg-email" class="form-input" placeholder="name@domain.com" required />
      </div>

      <div class="form-group">
        <label>Mobile</label>
        <input type="tel" id="reg-phone" class="form-input" placeholder="+91 9876543210" required />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" id="reg-pass" class="form-input" placeholder="Create password" required />
      </div>

      <button type="submit" class="hero-shop-now-btn" style="width:100%; justify-content:center; background:#181818; color:#fff; margin-top:6px;">Create Account</button>
    </form>
  `;
}

function renderAccountProfile() {
  const container = document.getElementById("auth-modal-content");
  if (!container) return;

  container.innerHTML = `
    <div style="text-align:center; margin-bottom:20px;">
      <div style="width:64px; height:64px; border-radius:50%; background:var(--color-secondary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:1.375rem; font-weight:700; margin:0 auto 10px;">
        ${store.user.name.charAt(0)}
      </div>
      <h3 style="font-size:1.125rem; font-weight:700;">${store.user.name}</h3>
      <p style="color:#777; font-size:0.8125rem;">${store.user.email}</p>
    </div>

    <div style="background:#f9f9f9; padding:14px; border-radius:6px; margin-bottom:18px;">
      <h4 style="font-size:0.875rem; font-weight:700; margin-bottom:6px;">Recent Orders</h4>
      <p style="font-size:0.8125rem; color:#666;">Order #CHIL-9241 • 1x Mint Mist Handloom Kurti (Delivered)</p>
    </div>

    <button class="hero-shop-now-btn" style="width:100%; justify-content:center; background:#e0e0e0; color:#333;" onclick="store.logoutUser(); renderLoginForm();">
      Sign Out
    </button>
  `;
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("auth-email").value;
  store.saveUser({
    name: "Bhanu Prasad",
    email: email
  });
  showToast("Welcome back to Chilaso, Bhanu!");
  closeAuthModal();
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  store.saveUser({
    name: name,
    email: email
  });
  showToast(`Account created for ${name}!`);
  closeAuthModal();
}

// -----------------------------------------------------------------------------
// 11. CHECKOUT MODAL SYSTEM
// -----------------------------------------------------------------------------
function openCheckoutModal() {
  closeCartDrawer();
  const modal = document.getElementById("checkout-modal");
  const itemsSummary = document.getElementById("checkout-items-summary");
  const totalVal = document.getElementById("checkout-total-val");

  if (!modal || !itemsSummary || !totalVal) return;

  const subtotal = store.getCartSubtotal();
  const discountAmount = Math.round(subtotal * (store.appliedDiscount / 100));
  const finalTotal = subtotal - discountAmount;

  itemsSummary.innerHTML = store.cart.map(i => `
    <div style="display:flex; justify-content:space-between; font-size:0.8125rem; margin-bottom:4px;">
      <span>${i.quantity}x ${i.title} (${i.size})</span>
      <strong>₹${(i.price * i.quantity).toLocaleString("en-IN")}</strong>
    </div>
  `).join("");

  totalVal.textContent = `₹${finalTotal.toLocaleString("en-IN")}`;
  modal.classList.add("is-open");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.classList.remove("is-open");
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  store.cart = [];
  store.saveCart();
  closeCheckoutModal();
  showToast("🎉 Order Placed Successfully! We'll send tracking details via WhatsApp.");
}

// -----------------------------------------------------------------------------
// 12. TOAST NOTIFICATIONS
// -----------------------------------------------------------------------------
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// -----------------------------------------------------------------------------
// 13. DOM READY INITIALIZATION
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  renderProductGrids();
  renderVideoReels();

  store.updateBadges();
  store.updateUserUI();

  // Header & Floating WhatsApp scroll transition:
  // On initial hero fold (scrollY <= 120): Header is transparent with white logo, WhatsApp button is hidden.
  // After scrolling down (scrollY > 120): Header becomes frosted white with black logo, WhatsApp button appears.
  const header = document.querySelector(".site-header");
  const whatsappBtn = document.querySelector(".floating-whatsapp");

  function handleScroll() {
    const isScrolled = window.scrollY > 120;
    if (header) {
      if (isScrolled) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    }
    if (whatsappBtn) {
      if (isScrolled) whatsappBtn.classList.add("is-visible");
      else whatsappBtn.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check on page load

  // Backdrop click to close all drawers
  const backdrop = document.getElementById("drawer-backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      closeCartDrawer();
      closeWishlistDrawer();
      closeNavDrawer();
    });
  }

  // Footer mobile accordion toggle (Tones Fashion style)
  const collapsibleButtons = document.querySelectorAll(".thb-widget-title.collapsible");
  collapsibleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        btn.classList.toggle("active");
      }
    });
  });
});

// =============================================================================
// 14. CHILA SOW PREMIUM SUBSCRIPTION POPUP MODULE
// =============================================================================

/**
 * Global Configuration for Chila Sow.
 * To integrate with your live CRM / SMS Marketing backend:
 * Set window.CHILASO_CONFIG.subscriptionApiUrl = "https://your-crm-endpoint/api/subscribe"
 * or provide a custom async handler:
 * window.CHILASO_CONFIG.customSubscriptionHandler = async (payload) => { ... }
 */
window.CHILASO_CONFIG = window.CHILASO_CONFIG || {
  subscriptionApiUrl: null,
  customSubscriptionHandler: null
};

(function initChilasowSubscriptionModule() {
  const STORAGE_KEY_DISMISSED = "chilasow_popup_dismissed_date";
  const STORAGE_KEY_SUBSCRIBED = "chilasow_subscribed";
  const POPUP_DELAY_MS = 5000;

  let popupTimer = null;
  let isPopupOpen = false;
  let isSubmitting = false;
  let previouslyFocusedElement = null;

  /**
   * Returns current calendar date formatted as YYYY-MM-DD in Asia/Kolkata timezone.
   */
  function getTodayKolkataDate() {
    try {
      const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
      return formatter.format(new Date());
    } catch (e) {
      const now = new Date();
      const kolkataTime = new Date(now.getTime() + (5.5 * 60 + now.getTimezoneOffset()) * 60000);
      return `${kolkataTime.getFullYear()}-${String(kolkataTime.getMonth() + 1).padStart(2, "0")}-${String(kolkataTime.getDate()).padStart(2, "0")}`;
    }
  }

  function hasSubscribed() {
    try {
      return localStorage.getItem(STORAGE_KEY_SUBSCRIBED) === "true";
    } catch (e) {
      return false;
    }
  }

  function hasDismissedToday() {
    try {
      const storedDate = localStorage.getItem(STORAGE_KEY_DISMISSED);
      return storedDate === getTodayKolkataDate();
    } catch (e) {
      return false;
    }
  }

  function saveDismissalToday() {
    try {
      localStorage.setItem(STORAGE_KEY_DISMISSED, getTodayKolkataDate());
    } catch (e) {
      console.warn("Chilasow popup: localStorage write failed", e);
    }
  }

  function saveSubscribed() {
    try {
      localStorage.setItem(STORAGE_KEY_SUBSCRIBED, "true");
    } catch (e) {
      console.warn("Chilasow popup: localStorage write failed", e);
    }
  }

  /**
   * Validate Indian Mobile Number:
   * Exactly 10 digits starting with 6, 7, 8, or 9 (standard DoT India allocation)
   */
  function validateIndianMobile(rawInput) {
    if (!rawInput || typeof rawInput !== "string") {
      return { isValid: false, message: "Please enter your 10-digit mobile number." };
    }
    let clean = rawInput.replace(/[\s\-\(\)\+]/g, "");
    if (clean.startsWith("91") && clean.length === 12) {
      clean = clean.slice(2);
    } else if (clean.startsWith("0") && clean.length === 11) {
      clean = clean.slice(1);
    }

    if (!clean) {
      return { isValid: false, message: "Please enter your mobile number." };
    }
    if (!/^\d+$/.test(clean)) {
      return { isValid: false, message: "Mobile number must contain digits only." };
    }
    if (clean.length !== 10) {
      return { isValid: false, message: "Please enter a 10-digit Indian mobile number." };
    }
    if (!/^[6-9]/.test(clean)) {
      return { isValid: false, message: "Indian mobile numbers must begin with 6, 7, 8, or 9." };
    }

    return { isValid: true, mobile: clean };
  }

  /**
   * Backend Subscription API integration.
   * Does NOT fake success without backend confirmation.
   */
  async function submitSubscriptionApi(mobileNumber) {
    const config = window.CHILASO_CONFIG || {};

    // 1. Custom handler (if configured by CRM/SDK)
    if (typeof config.customSubscriptionHandler === "function") {
      return await config.customSubscriptionHandler({
        mobile: mobileNumber,
        countryCode: "+91",
        timezone: "Asia/Kolkata",
        subscribedAt: new Date().toISOString()
      });
    }

    // 2. HTTP Endpoint (if configured)
    if (config.subscriptionApiUrl) {
      const response = await fetch(config.subscriptionApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          mobile: mobileNumber,
          countryCode: "+91",
          source: "chilasow_popup",
          timezone: "Asia/Kolkata",
          subscribedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        let errMessage = `Subscription request failed (${response.status})`;
        try {
          const errData = await response.json();
          if (errData && errData.message) errMessage = errData.message;
        } catch (_) {}
        throw new Error(errMessage);
      }

      return await response.json().catch(() => ({ success: true }));
    }

    // 3. No endpoint configured: explicitly inform the user/system instead of pretending success
    throw new Error("Subscription service is being configured. Please contact support or try again later.");
  }

  function handleKeydown(e) {
    if (e.key === "Escape" && isPopupOpen) {
      dismissPopup();
    }
  }

  function openPopup() {
    if (isPopupOpen || hasSubscribed() || hasDismissedToday()) return;

    const backdrop = document.getElementById("chilasow-popup-backdrop");
    const input = document.getElementById("chilasow-phone-input");
    if (!backdrop) return;

    previouslyFocusedElement = document.activeElement;
    isPopupOpen = true;

    backdrop.setAttribute("aria-hidden", "false");
    backdrop.classList.add("is-open");

    // Add keyboard trap listener
    window.addEventListener("keydown", handleKeydown);

    // Focus input after transition
    setTimeout(() => {
      if (input && isPopupOpen) input.focus();
    }, 200);
  }

  function closePopupDOM() {
    const backdrop = document.getElementById("chilasow-popup-backdrop");
    if (backdrop) {
      backdrop.classList.remove("is-open");
      backdrop.setAttribute("aria-hidden", "true");
    }
    isPopupOpen = false;
    window.removeEventListener("keydown", handleKeydown);

    if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === "function") {
      try { previouslyFocusedElement.focus(); } catch (_) {}
    }
  }

  function dismissPopup() {
    if (!isPopupOpen && !popupTimer) return;

    if (popupTimer) {
      clearTimeout(popupTimer);
      popupTimer = null;
    }

    saveDismissalToday();
    closePopupDOM();
  }

  function setupEventListeners() {
    const backdrop = document.getElementById("chilasow-popup-backdrop");
    const closeBtn = document.getElementById("chilasow-popup-close-btn");
    const laterBtn = document.getElementById("chilasow-popup-later-btn");
    const form = document.getElementById("chilasow-subscription-form");
    const input = document.getElementById("chilasow-phone-input");
    const feedback = document.getElementById("chilasow-popup-feedback");
    const submitBtn = document.getElementById("chilasow-popup-submit-btn");
    const successView = document.getElementById("chilasow-popup-success");

    // Dismissal 1: Close X button
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dismissPopup();
      });
    }

    // Dismissal 2: Maybe Later link
    if (laterBtn) {
      laterBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dismissPopup();
      });
    }

    // Dismissal 3: Clicking the backdrop outside the card
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          dismissPopup();
        }
      });
    }

    // Input sanitization: only allow digits in the phone input
    if (input) {
      input.addEventListener("input", () => {
        if (feedback) {
          feedback.textContent = "";
          feedback.className = "chilasow-popup-feedback";
        }
        input.value = input.value.replace(/\D/g, "");
      });
    }

    // Form submission
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        const validation = validateIndianMobile(input ? input.value : "");
        if (!validation.isValid) {
          if (feedback) {
            feedback.textContent = validation.message;
            feedback.className = "chilasow-popup-feedback is-error";
          }
          if (input) input.focus();
          return;
        }

        // Set Loading State
        isSubmitting = true;
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.classList.add("is-loading");
          const btnText = submitBtn.querySelector(".btn-text");
          if (btnText) btnText.textContent = "Signing Up...";
        }
        if (feedback) {
          feedback.textContent = "";
          feedback.className = "chilasow-popup-feedback";
        }

        try {
          // Call Backend API
          await submitSubscriptionApi(validation.mobile);

          // Mark visitor as subscribed ONLY after successful confirmation
          saveSubscribed();

          // Show Success State
          if (form) form.style.display = "none";
          if (successView) successView.style.display = "block";

          // Auto-close after 2.5s and cleanup
          setTimeout(() => {
            closePopupDOM();
          }, 2500);

        } catch (error) {
          // Display Error State
          if (feedback) {
            feedback.textContent = error.message || "Subscription failed. Please try again.";
            feedback.className = "chilasow-popup-feedback is-error";
          }
        } finally {
          isSubmitting = false;
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.classList.remove("is-loading");
            const btnText = submitBtn.querySelector(".btn-text");
            if (btnText) btnText.textContent = "Sign Me Up";
          }
        }
      });
    }

    // Cross-tab synchronization
    window.addEventListener("storage", (e) => {
      if (e.key === STORAGE_KEY_DISMISSED || e.key === STORAGE_KEY_SUBSCRIBED) {
        if (popupTimer) {
          clearTimeout(popupTimer);
          popupTimer = null;
        }
        if (isPopupOpen) {
          closePopupDOM();
        }
      }
    });
  }

  // Schedule auto-popup after 5 seconds if eligible
  function schedulePopup() {
    if (hasSubscribed() || hasDismissedToday()) {
      return;
    }
    popupTimer = setTimeout(() => {
      openPopup();
    }, POPUP_DELAY_MS);
  }

  // Public methods on window.ChilasowPopup for testing and manual triggering
  window.ChilasowPopup = {
    open: openPopup,
    dismiss: dismissPopup,
    getTodayKolkataDate,
    hasSubscribed,
    hasDismissedToday,
    validateIndianMobile,
    submitSubscriptionApi
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setupEventListeners();
      schedulePopup();
    });
  } else {
    setupEventListeners();
    schedulePopup();
  }
})();
