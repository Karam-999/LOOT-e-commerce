import { X, Star, Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProductDetail = ({ product, onClose, onAddToCart, onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  // Use product images array if available, otherwise create array from single image
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.image, product.image, product.image, product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    alert(`Added ${quantity} item(s) to cart!`);
  };

  // Mock reviews data
  const reviews = [
    { id: 1, author: "Rahul S.", rating: 5, date: "Nov 15, 2025", text: "Excellent product! Worth every penny. Highly recommended!" },
    { id: 2, author: "Priya M.", rating: 4, date: "Nov 10, 2025", text: "Good quality, fast delivery. Very satisfied with the purchase." },
    { id: 3, author: "Amit K.", rating: 5, date: "Nov 5, 2025", text: "Amazing! Exactly as described. Will buy again." }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-50">
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-screen px-4 py-8">
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left: Images */}
              <div>
                {/* Main Image */}
                <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4">
                  <img
                    src={images[selectedImage]}
                    alt={product.name}
                    className="w-full h-[500px] object-cover"
                  />
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
                      {product.tag}
                    </span>
                  )}
                  
                  {/* Image Navigation */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-yellow-400 scale-105' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-24 object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="flex flex-col">
                <div className="flex-1">
                  {/* Category */}
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{product.category}</p>
                  
                  {/* Title */}
                  <h1 className="text-3xl font-black text-gray-900 mb-4">{product.name}</h1>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                    <span className="text-sm text-gray-500">({reviews.length} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-black text-gray-900">₹{product.price.toLocaleString()}</span>
                    <p className="text-sm text-green-600 font-medium mt-1">Inclusive of all taxes</p>
                  </div>

                  {/* Description */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold mb-2">Product Details</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Premium quality {product.category} crafted with attention to detail. 
                      Perfect for everyday wear and special occasions. Made with high-quality materials 
                      ensuring durability and comfort. Available in various sizes and colors.
                    </p>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Quantity</label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center text-xl font-bold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mb-6">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => {
                        handleAddToCart();
                        if (onBuyNow) onBuyNow();
                      }}
                      className="flex-1 bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      Buy Now
                    </button>
                  </div>

                  {/* Features */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        Free shipping on orders above ₹999
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        7 days easy return policy
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        100% authentic products
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {reviews.map(review => (
                      <div key={review.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-gray-900">{review.author}</span>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
