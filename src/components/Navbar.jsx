import { ShoppingBag, Menu, X, Search } from 'lucide-react';

const Navbar = ({ 
  searchQuery, 
  setSearchQuery, 
  cartCount, 
  setIsCartOpen, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  categories,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedCategory('all')}>
            <div className="bg-yellow-400 text-black p-2 rounded-lg">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tighter">LOOT</span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <input 
              type="text"
              placeholder="Search for loot..."
              className="w-full bg-gray-900 border border-gray-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              className="relative p-2 hover:bg-gray-800 rounded-full transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 p-4">
          <input 
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800 text-white rounded p-2 mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex flex-col gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 rounded ${selectedCategory === cat.id ? 'bg-yellow-400 text-black font-bold' : 'text-gray-300'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
