import { ShoppingBag, X, Minus, Plus, Trash2 } from 'lucide-react';

const Cart = ({ isOpen, onClose, cart, onRemove, onUpdateQty, cartCount, cartTotal, onCheckout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex pl-10 pointer-events-none">
        <div className="w-screen pointer-events-auto bg-white shadow-2xl flex flex-col">
          
          {/* Cart Header */}
          <div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
            <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" /> YOUR LOOT ({cartCount})
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                <ShoppingBag className="w-16 h-16 opacity-20" />
                <p>Your bag is empty.</p>
                <button 
                  onClick={onClose}
                  className="text-black font-bold underline hover:text-yellow-600"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.id} className="flex py-2">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">₹{(item.price * item.qty).toLocaleString()}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 capitalize">{item.category}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border rounded-md">
                          <button 
                            onClick={() => onUpdateQty(item.id, -1)}
                            className="p-1 hover:bg-gray-100"
                            disabled={item.qty <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-bold">{item.qty}</span>
                          <button 
                            onClick={() => onUpdateQty(item.id, 1)}
                            className="p-1 hover:bg-gray-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          className="font-medium text-red-500 hover:text-red-600 flex items-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>₹{cartTotal.toLocaleString()}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                onClick={onCheckout}
                className="w-full flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900"
              >
                Checkout
              </button>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{' '}
                  <button
                    type="button"
                    className="font-medium text-yellow-600 hover:text-yellow-500"
                    onClick={onClose}
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
