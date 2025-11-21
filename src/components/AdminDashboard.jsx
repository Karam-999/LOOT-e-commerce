import { Upload, DollarSign, Image as ImageIcon, Tag } from 'lucide-react';

const AdminDashboard = ({ newProduct, setNewProduct, onSubmit }) => {
  return (
    <div className="bg-gray-800 text-white border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Upload className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold">Seller Dashboard: Upload Product</h2>
        </div>
        
        <form onSubmit={onSubmit} className="bg-gray-900 p-6 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Name */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-gray-400 mb-1">Product Name</label>
            <div className="relative">
              <Tag className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input 
                required
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded p-2.5 pl-10 focus:border-yellow-400 focus:outline-none"
                placeholder="e.g. Limited Edition Hoodie"
                value={newProduct.name}
                onChange={e => setNewProduct({...newProduct, name: e.target.value})}
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
            <select 
              className="w-full bg-gray-800 border border-gray-700 rounded p-2.5 focus:border-yellow-400 focus:outline-none"
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
            <label className="block text-sm font-medium text-gray-400 mb-1">Price (₹)</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input 
                required
                type="number" 
                className="w-full bg-gray-800 border border-gray-700 rounded p-2.5 pl-10 focus:border-yellow-400 focus:outline-none"
                placeholder="e.g. 1999"
                value={newProduct.price}
                onChange={e => setNewProduct({...newProduct, price: e.target.value})}
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Image URL</label>
            <div className="relative">
              <ImageIcon className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                className="w-full bg-gray-800 border border-gray-700 rounded p-2.5 pl-10 focus:border-yellow-400 focus:outline-none"
                placeholder="https://..."
                value={newProduct.image}
                onChange={e => setNewProduct({...newProduct, image: e.target.value})}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Leave empty for default placeholder</p>
          </div>

          {/* Submit */}
          <div className="col-span-2">
            <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-500 transition-colors flex justify-center items-center gap-2">
              <Upload className="w-5 h-5" /> Upload to Store
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
