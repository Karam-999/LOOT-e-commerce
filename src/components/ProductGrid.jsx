import { Star, Plus } from 'lucide-react';

const ProductGrid = ({ products, onAddToCart, onProductClick, selectedCategory, setSelectedCategory }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-bold text-gray-400">No loot found in this category.</h3>
        <button onClick={() => setSelectedCategory('all')} className="text-yellow-600 font-bold mt-2 hover:underline">View all items</button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map(product => (
        <div 
          key={product.id} 
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 cursor-pointer"
          onClick={() => onProductClick(product)}
        >
          <div className="relative h-64 overflow-hidden bg-gray-100">
            {product.tag && (
              <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-black px-2 py-1 rounded z-10 uppercase tracking-wider">
                {product.tag}
              </span>
            )}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm text-gray-500 capitalize">{product.category}</p>
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                <Star className="w-3 h-3 fill-current" />
                <span>{product.rating}</span>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 line-clamp-1 text-gray-900 group-hover:text-yellow-600 transition-colors">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-xl font-black">₹{product.price.toLocaleString()}</span>
              <button 
                className="text-sm font-bold underline decoration-2 hover:text-yellow-600"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
