import React, { useState, useEffect } from 'react';
import { Star, Watch, Footprints, Shirt } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryFilters from './components/CategoryFilters';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import StoreLocator from './components/StoreLocator';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

// Initial Mock Data
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Urban Street Oversized Tee",
    price: 899,
    category: "clothes",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    tag: "Trending"
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 2499,
    category: "clothes",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    tag: "Best Seller"
  },
  {
    id: 3,
    name: "Chronos Black Dial",
    price: 3999,
    category: "watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    tag: "Luxury"
  },
  {
    id: 4,
    name: "Air Runner Pro",
    price: 5499,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    tag: "New"
  },
  {
    id: 5,
    name: "Vintage Leather Strap",
    price: 1299,
    category: "watches",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800",
    rating: 4.2,
    tag: null
  },
  {
    id: 6,
    name: "Canvas High Tops",
    price: 1899,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    rating: 4.4,
    tag: "Sale"
  },
  {
    id: 7,
    name: "Ripped Skinny Jeans",
    price: 1599,
    category: "clothes",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800",
    rating: 4.3,
    tag: null
  },
  {
    id: 8,
    name: "Minimalist White Sneaker",
    price: 2999,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    tag: "Classic"
  }
];

const App = () => {
  // We changed PRODUCTS from a constant to State so we can add to it
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('loot-products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('loot-cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  // Save to localStorage whenever products or cart changes
  useEffect(() => {
    localStorage.setItem('loot-products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('loot-cart', JSON.stringify(cart));
  }, [cart]);
  
  // Admin Functions
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Filter Logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Categories config
  const categories = [
    { id: 'all', label: 'All Loot', icon: Star },
    { id: 'clothes', label: 'Clothing', icon: Shirt },
    { id: 'watches', label: 'Watches', icon: Watch },
    { id: 'shoes', label: 'Shoes', icon: Footprints },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartCount}
        setIsCartOpen={setIsCartOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Hero />

      <main id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilters 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductGrid 
          products={filteredProducts}
          onAddToCart={addToCart}
          onProductClick={setSelectedProduct}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </main>

      <StoreLocator />

      <Contact />

      <Footer 
        onShowTerms={() => setShowTerms(true)}
        onShowPrivacy={() => setShowPrivacy(true)}
      />

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQty}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onCheckout={() => {
          setShowCheckout(true);
          setIsCartOpen(false);
        }}
      />

      {showCheckout && (
        <Checkout 
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setShowCheckout(false)}
          onClearCart={clearCart}
        />
      )}

      <ProductDetail 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
        onBuyNow={() => {
          setShowCheckout(true);
          setSelectedProduct(null);
        }}
      />

      {showTerms && <Terms onClose={() => setShowTerms(false)} />}
      {showPrivacy && <Privacy onClose={() => setShowPrivacy(false)} />}
    </div>
  );
};

export default App;