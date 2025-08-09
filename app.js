// Application data from provided JSON
const applicationData = {
  featuredDestinations: [
    {
      name: "Paris, France",
      image: "paris.jpg",
      description: "The City of Light with iconic landmarks",
      rating: 4.8
    },
    {
      name: "Tokyo, Japan", 
      image: "tokyo.jpg",
      description: "Modern metropolis meets ancient traditions",
      rating: 4.7
    },
    {
      name: "New York, USA",
      image: "newyork.jpg", 
      description: "The city that never sleeps",
      rating: 4.6
    },
    {
      name: "London, UK",
      image: "london.jpg",
      description: "Historic charm with modern attractions",
      rating: 4.5
    }
  ],
  popularHotels: [
    {
      name: "Grand Palace Hotel",
      location: "Paris, France",
      rating: 4.9,
      price: "$299",
      description: "Luxury hotel near Eiffel Tower",
      image: "hotel1.jpg"
    },
    {
      name: "Tokyo Bay Resort",
      location: "Tokyo, Japan", 
      rating: 4.7,
      price: "$189",
      description: "Modern hotel with city views",
      image: "hotel2.jpg"
    },
    {
      name: "Manhattan Suites",
      location: "New York, USA",
      rating: 4.6, 
      price: "$349",
      description: "Premium location in Times Square",
      image: "hotel3.jpg"
    }
  ],
  topRestaurants: [
    {
      name: "Le Petit Bistro",
      location: "Paris, France",
      cuisine: "French",
      rating: 4.8,
      priceRange: "$$$",
      description: "Authentic French cuisine in cozy setting",
      image: "restaurant1.jpg"
    },
    {
      name: "Sushi Zen",
      location: "Tokyo, Japan",
      cuisine: "Japanese", 
      rating: 4.9,
      priceRange: "$$$$",
      description: "Traditional sushi experience",
      image: "restaurant2.jpg"
    },
    {
      name: "Brooklyn Steakhouse", 
      location: "New York, USA",
      cuisine: "American",
      rating: 4.7,
      priceRange: "$$$",
      description: "Prime steaks and classic American fare",
      image: "restaurant3.jpg"
    }
  ]
};

// Emoji mapping for different destinations and establishments
const locationEmojis = {
  'Paris, France': '🗼',
  'Tokyo, Japan': '🏯',
  'New York, USA': '🏙️',
  'London, UK': '🏰',
  'French': '🥖',
  'Japanese': '🍣',
  'American': '🥩',
  'hotel': '🏨',
  'default': '📍'
};

// Generate star rating display
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '⭐';
  }
  
  if (hasHalfStar) {
    stars += '⭐';
  }
  
  // Fill remaining stars with empty stars if needed
  const totalStars = hasHalfStar ? fullStars + 1 : fullStars;
  for (let i = totalStars; i < 5; i++) {
    stars += '☆';
  }
  
  return stars;
}

// Get appropriate emoji for location or type
function getEmoji(location, type = 'default') {
  return locationEmojis[location] || locationEmojis[type] || locationEmojis.default;
}

// Render featured destinations
function renderDestinations() {
  const destinationsGrid = document.getElementById('destinations-grid');
  if (!destinationsGrid) return;
  
  destinationsGrid.innerHTML = applicationData.featuredDestinations.map((destination, index) => {
    const emoji = getEmoji(destination.name);
    const stars = generateStarRating(destination.rating);
    
    return `
      <div class="destination-card card-animate" style="animation-delay: ${index * 0.1}s">
        <div class="card__image">${emoji}</div>
        <div class="card__content">
          <h3 class="card__title">${destination.name}</h3>
          <p class="card__description">${destination.description}</p>
          <div class="card__rating">
            <span class="rating-stars">${stars}</span>
            <span class="rating-value">${destination.rating}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render popular hotels
function renderHotels() {
  const hotelsGrid = document.getElementById('hotels-grid');
  if (!hotelsGrid) return;
  
  hotelsGrid.innerHTML = applicationData.popularHotels.map((hotel, index) => {
    const emoji = getEmoji(hotel.location, 'hotel');
    const stars = generateStarRating(hotel.rating);
    
    return `
      <div class="hotel-card card-animate" style="animation-delay: ${index * 0.1}s">
        <div class="card__image">${emoji}</div>
        <div class="card__content">
          <div class="card__location">${hotel.location}</div>
          <h3 class="card__title">${hotel.name}</h3>
          <p class="card__description">${hotel.description}</p>
          <div class="card__rating">
            <span class="rating-stars">${stars}</span>
            <span class="rating-value">${hotel.rating}</span>
          </div>
          <div class="card__price">from ${hotel.price}</div>
        </div>
      </div>
    `;
  }).join('');
}

// Render top restaurants
function renderRestaurants() {
  const restaurantsGrid = document.getElementById('restaurants-grid');
  if (!restaurantsGrid) return;
  
  restaurantsGrid.innerHTML = applicationData.topRestaurants.map((restaurant, index) => {
    const emoji = getEmoji(restaurant.cuisine);
    const stars = generateStarRating(restaurant.rating);
    
    return `
      <div class="restaurant-card card-animate" style="animation-delay: ${index * 0.1}s">
        <div class="card__image">${emoji}</div>
        <div class="card__content">
          <div class="card__location">${restaurant.location}</div>
          <div class="card__cuisine">${restaurant.cuisine}</div>
          <h3 class="card__title">${restaurant.name}</h3>
          <p class="card__description">${restaurant.description}</p>
          <div class="card__rating">
            <span class="rating-stars">${stars}</span>
            <span class="rating-value">${restaurant.rating}</span>
          </div>
          <div class="card__meta">
            <div class="price-range">${restaurant.priceRange}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Handle search functionality
function handleSearch() {
  // Header search
  const headerSearchInput = document.querySelector('.search-bar__input');
  const headerSearchButton = document.querySelector('.search-bar__button');
  
  // Main hero search
  const mainSearchInput = document.querySelector('.main-search-bar__input');
  const mainSearchButton = document.querySelector('.main-search-bar__button');
  
  function performSearch(query) {
    if (query.trim()) {
      console.log(`Searching for: ${query}`);
      alert(`Searching for: "${query}"\n\nThis is a static demo. In a real TripAdvisor site, this would show search results.`);
    }
  }
  
  // Header search handlers
  if (headerSearchButton) {
    headerSearchButton.addEventListener('click', () => {
      performSearch(headerSearchInput.value);
    });
  }
  
  if (headerSearchInput) {
    headerSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch(headerSearchInput.value);
      }
    });
  }
  
  // Main search handlers
  if (mainSearchButton) {
    mainSearchButton.addEventListener('click', () => {
      performSearch(mainSearchInput.value);
    });
  }
  
  if (mainSearchInput) {
    mainSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch(mainSearchInput.value);
      }
    });
  }
}

// Handle navigation menu clicks
function handleNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu__link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.textContent;
      console.log(`Navigating to: ${section}`);
      alert(`Navigating to: ${section}\n\nThis is a static demo. In a real TripAdvisor site, this would navigate to the ${section} section.`);
    });
  });
}

// Handle card clicks
function handleCardClicks() {
  document.addEventListener('click', function(e) {
    // Destination cards
    const destinationCard = e.target.closest('.destination-card');
    if (destinationCard) {
      const name = destinationCard.querySelector('.card__title').textContent;
      console.log(`Clicked on destination: ${name}`);
      alert(`Exploring: ${name}\n\nThis is a static demo. In a real TripAdvisor site, this would show destination details, attractions, and recommendations.`);
      return;
    }
    
    // Hotel cards
    const hotelCard = e.target.closest('.hotel-card');
    if (hotelCard) {
      const name = hotelCard.querySelector('.card__title').textContent;
      const price = hotelCard.querySelector('.card__price').textContent;
      console.log(`Clicked on hotel: ${name}`);
      alert(`Hotel: ${name}\nPrice: ${price}\n\nThis is a static demo. In a real TripAdvisor site, this would show hotel details, photos, reviews, and booking options.`);
      return;
    }
    
    // Restaurant cards
    const restaurantCard = e.target.closest('.restaurant-card');
    if (restaurantCard) {
      const name = restaurantCard.querySelector('.card__title').textContent;
      const cuisine = restaurantCard.querySelector('.card__cuisine').textContent;
      const rating = restaurantCard.querySelector('.rating-value').textContent;
      console.log(`Clicked on restaurant: ${name}`);
      alert(`Restaurant: ${name}\nCuisine: ${cuisine}\nRating: ${rating}\n\nThis is a static demo. In a real TripAdvisor site, this would show restaurant details, menu, reviews, and reservation options.`);
      return;
    }
  });
}

// Handle filter changes
function handleFilters() {
  const filterSelects = document.querySelectorAll('.filter-select');
  const filterInputs = document.querySelectorAll('.filter-input');
  
  filterSelects.forEach(select => {
    select.addEventListener('change', function() {
      const filterType = this.previousElementSibling.textContent;
      const value = this.value;
      console.log(`Filter changed - ${filterType}: ${value}`);
      
      if (value && !value.includes('Any')) {
        alert(`Filter Applied: ${filterType} = ${value}\n\nThis is a static demo. In a real TripAdvisor site, this would filter the results accordingly.`);
      }
    });
  });
  
  filterInputs.forEach(input => {
    input.addEventListener('change', function() {
      const filterType = this.previousElementSibling.textContent;
      const value = this.value;
      if (value) {
        console.log(`Date filter changed - ${filterType}: ${value}`);
        alert(`Date Selected: ${value}\n\nThis is a static demo. In a real TripAdvisor site, this would filter results for your selected travel dates.`);
      }
    });
  });
}

// Add smooth scrolling for better UX
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add intersection observer for animations
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards for animation
  const cards = document.querySelectorAll('.destination-card, .hotel-card, .restaurant-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// Footer link handlers
function handleFooterLinks() {
  const footerLinks = document.querySelectorAll('.footer a');
  
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Don't prevent default for social links (they have target="_blank")
      if (!this.hasAttribute('target')) {
        e.preventDefault();
        const linkText = this.textContent;
        console.log(`Footer link clicked: ${linkText}`);
        alert(`${linkText}\n\nThis is a static demo. In a real TripAdvisor site, this would navigate to the ${linkText} page.`);
      }
    });
  });
}

// Initialize the application
function init() {
  console.log('Initializing TripAdvisor clone...');
  
  // Render dynamic content
  renderDestinations();
  renderHotels();
  renderRestaurants();
  
  // Add event handlers
  handleSearch();
  handleNavigation();
  handleCardClicks();
  handleFilters();
  handleFooterLinks();
  addSmoothScrolling();
  
  // Add animations after content is rendered
  setTimeout(() => {
    addScrollAnimations();
  }, 100);
  
  console.log('TripAdvisor clone initialized successfully');
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}