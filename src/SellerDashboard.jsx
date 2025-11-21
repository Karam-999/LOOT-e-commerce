import React, { useState, useEffect } from 'react';
import { Upload, DollarSign, Image as ImageIcon, Tag, Package, TrendingUp, ShoppingBag, BarChart3, X, Edit2, Trash2, LogOut } from 'lucide-react';
import SellerLogin from './components/SellerLogin';

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Urban Street Oversized Tee",
    price: 899,
    category: "clothes",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.5,
    tag: "Trending",
    stock: 45,
    sales: 128
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 2499,
    category: "clothes",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    tag: "Best Seller",
    stock: 32,
    sales: 256
  },
  {
    id: 3,
    name: "Chronos Black Dial",
    price: 3999,
    category: "watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    tag: "Luxury",
    stock: 15,
    sales: 89
  },
  {
    id: 4,
    name: "Air Runner Pro",
    price: 5499,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    tag: "New",
    stock: 28,
    sales: 167
  },
];

const SellerDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('loot-products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: 'clothes',
    image: '',
    images: [],
    tag: '',
    stock: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [imagePreview, setImagePreview] = useState([]);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('loot-products', JSON.stringify(products));
  }, [products]);

  // Calculate statistics
  const totalProducts = products.length;
  const totalRevenue = products.reduce((sum, p) => sum + (p.price * (p.sales || 0)), 0);
  const totalSales = products.reduce((sum, p) => sum + (p.sales || 0), 0);
  const lowStock = products.filter(p => p.stock < 20).length;

  // Handle image file upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const currentImages = newProduct.images || [];
    
    if (currentImages.length + files.length > 4) {
      alert(`You can only upload ${4 - currentImages.length} more image(s). Maximum 4 images total.`);
      return;
    }

    const imageUrls = [...currentImages];
    const previews = [...imagePreview];
    let processed = 0;

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        imageUrls.push(result);
        previews.push(result);
        processed++;

        if (processed === files.length) {
          setNewProduct({ ...newProduct, images: imageUrls });
          setImagePreview(previews);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    const newImages = newProduct.images.filter((_, i) => i !== index);
    const newPreviews = imagePreview.filter((_, i) => i !== index);
    setNewProduct({ ...newProduct, images: newImages });
    setImagePreview(newPreviews);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const mainImage = newProduct.images.length > 0 ? newProduct.images[0] : "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800";
    const product = {
      id: products.length + 1,
      name: newProduct.name,
      price: Number(newProduct.price),
      category: newProduct.category,
      image: mainImage,
      images: newProduct.images.length > 0 ? newProduct.images : [mainImage],
      rating: 5.0,
      tag: newProduct.tag || "New Arrival",
      stock: Number(newProduct.stock) || 0,
      sales: 0
    };

    setProducts([product, ...products]);
    setNewProduct({ name: '', price: '', category: 'clothes', image: '', images: [], tag: '', stock: '' });
    setImagePreview([]);
    alert('Product Added Successfully!');
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      images: product.images || [],
      tag: product.tag,
      stock: product.stock
    });
    setImagePreview(product.images || []);
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const mainImage = newProduct.images.length > 0 ? newProduct.images[0] : newProduct.image;
    setProducts(products.map(p => 
      p.id === editingProduct.id 
        ? { 
            ...p, 
            ...newProduct, 
            price: Number(newProduct.price), 
            stock: Number(newProduct.stock),
            image: mainImage,
            images: newProduct.images.length > 0 ? newProduct.images : [mainImage]
          }
        : p
    ));
    setEditingProduct(null);
    setNewProduct({ name: '', price: '', category: 'clothes', image: '', images: [], tag: '', stock: '' });
    setImagePreview([]);
    alert('Product Updated Successfully!');
  };

  const handleDeleteProduct = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
      alert('Product Deleted Successfully!');
    }
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <SellerLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 text-black p-2 rounded-lg">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-black">LOOT Seller Portal</h1>
                <p className="text-sm text-gray-400">Manage your products and sales</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="/"
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
              >
                View Store
              </a>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-lg font-bold transition-colors ${
              activeTab === 'overview' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 rounded-lg font-bold transition-colors ${
              activeTab === 'products' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`px-6 py-3 rounded-lg font-bold transition-colors ${
              activeTab === 'add' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {editingProduct ? 'Edit Product' : 'Add Product'}
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-3xl font-black mb-6">Dashboard Overview</h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Products</p>
                    <p className="text-3xl font-black">{totalProducts}</p>
                  </div>
                  <Package className="w-12 h-12 text-blue-500 opacity-20" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
                    <p className="text-3xl font-black">₹{(totalRevenue / 1000).toFixed(1)}k</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Sales</p>
                    <p className="text-3xl font-black">{totalSales}</p>
                  </div>
                  <BarChart3 className="w-12 h-12 text-purple-500 opacity-20" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Low Stock Items</p>
                    <p className="text-3xl font-black text-red-500">{lowStock}</p>
                  </div>
                  <Package className="w-12 h-12 text-red-500 opacity-20" />
                </div>
              </div>
            </div>

            {/* Recent Products */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-black mb-4">Top Selling Products</h3>
              <div className="space-y-4">
                {products
                  .sort((a, b) => (b.sales || 0) - (a.sales || 0))
                  .slice(0, 5)
                  .map(product => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                        <div>
                          <p className="font-bold">{product.name}</p>
                          <p className="text-sm text-gray-500">₹{product.price}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{product.sales || 0} sales</p>
                        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <h2 className="text-3xl font-black mb-6">All Products</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 font-bold">Product</th>
                    <th className="text-left p-4 font-bold">Category</th>
                    <th className="text-left p-4 font-bold">Price</th>
                    <th className="text-left p-4 font-bold">Stock</th>
                    <th className="text-left p-4 font-bold">Sales</th>
                    <th className="text-left p-4 font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </td>
                      <td className="p-4 capitalize">{product.category}</td>
                      <td className="p-4 font-bold">₹{product.price}</td>
                      <td className="p-4">
                        <span className={`font-bold ${product.stock < 20 ? 'text-red-600' : 'text-green-600'}`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="p-4">{product.sales || 0}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              handleEditProduct(product);
                              setActiveTab('add');
                            }}
                            className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add/Edit Product Tab */}
        {activeTab === 'add' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-black">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              {editingProduct && (
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setNewProduct({ name: '', price: '', category: 'clothes', image: '', images: [], tag: '', stock: '' });
                    setImagePreview([]);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  <X className="w-4 h-4" />
                  Cancel Edit
                </button>
              )}
            </div>
            
            <form onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input 
                      required
                      type="text" 
                      className="w-full border border-gray-300 rounded-lg p-3 pl-11 focus:border-yellow-400 focus:outline-none"
                      placeholder="e.g. Limited Edition Hoodie"
                      value={newProduct.name}
                      onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select 
                    className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                    value={newProduct.category}
                    onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                  >
                    <option value="clothes">Clothes</option>
                    <option value="watches">Watches</option>
                    <option value="shoes">Shoes</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹) *</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input 
                      required
                      type="number" 
                      className="w-full border border-gray-300 rounded-lg p-3 pl-11 focus:border-yellow-400 focus:outline-none"
                      placeholder="e.g. 1999"
                      value={newProduct.price}
                      onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                    />
                  </div>
                </div>

                {/* Stock */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity *</label>
                  <div className="relative">
                    <Package className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input 
                      required
                      type="number" 
                      className="w-full border border-gray-300 rounded-lg p-3 pl-11 focus:border-yellow-400 focus:outline-none"
                      placeholder="e.g. 50"
                      value={newProduct.stock}
                      onChange={e => setNewProduct({...newProduct, stock: e.target.value})}
                    />
                  </div>
                </div>

                {/* Tag */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tag (Optional)</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                    placeholder="e.g. Trending, New, Sale"
                    value={newProduct.tag}
                    onChange={e => setNewProduct({...newProduct, tag: e.target.value})}
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <div className="relative">
                    <ImageIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-lg p-3 pl-11 focus:border-yellow-400 focus:outline-none"
                      placeholder="https://..."
                      value={newProduct.image}
                      onChange={e => setNewProduct({...newProduct, image: e.target.value})}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Leave empty for default placeholder</p>
                </div>
              </div>

              {/* Image Upload from PC */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Product Images (Max 4) *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Click to upload images or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB (Max 4 images)</p>
                  </label>
                </div>

                {/* Image Previews */}
                {imagePreview.length > 0 && (
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {imagePreview.map((img, idx) => (
                      <div key={idx} className="relative group">
                        <img
                          src={img}
                          alt={`Preview ${idx + 1}`}
                          className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        {idx === 0 && (
                          <span className="absolute bottom-1 left-1 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded font-bold">
                            Main
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button 
                  type="submit" 
                  className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors flex justify-center items-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  {editingProduct ? 'Update Product' : 'Add to Store'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
