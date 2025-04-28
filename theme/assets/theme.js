document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (add this to your header section)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
      });
    }
    
    // Cart count updater
    function updateCartCount() {
      fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
          document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = cart.item_count;
          });
        });
    }
    
    // Listen for cart updates (you'll need to implement this based on your cart functionality)
    document.addEventListener('cart:updated', updateCartCount);
    
    // Initialize cart count
    updateCartCount();
  });