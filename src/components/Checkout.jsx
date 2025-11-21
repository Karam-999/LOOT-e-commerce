import { useState } from 'react';
import { CreditCard, Smartphone, Building2, Wallet, ArrowLeft, Check } from 'lucide-react';

const Checkout = ({ cart, cartTotal, onClose, onClearCart }) => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    netBankingBank: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const paymentMethods = [
    { id: 'upi', name: 'UPI Payment', icon: Smartphone, description: 'Pay using Google Pay, PhonePe, Paytm' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, Rupay' },
    { id: 'netbanking', name: 'Net Banking', icon: Building2, description: 'All major banks supported' },
    { id: 'cod', name: 'Cash on Delivery', icon: Wallet, description: 'Pay when you receive' }
  ];

  const banks = [
    'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 
    'Punjab National Bank', 'Bank of Baroda', 'Canara Bank', 'Other'
  ];

  const handlePayment = () => {
    if (!selectedPayment) {
      alert('Please select a payment method');
      return;
    }

    // Simulate payment processing
    setShowSuccess(true);
    
    setTimeout(() => {
      alert('Payment Successful! Your order has been placed.');
      onClearCart();
      onClose();
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-black mb-2">Payment Successful!</h2>
          <p className="text-gray-600">Your order has been placed successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="border-b p-6">
            <div className="flex items-center gap-4">
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-black">Checkout</h1>
                <p className="text-sm text-gray-500">Complete your payment</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Payment Methods */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
                <div className="grid grid-cols-1 gap-3">
                  {paymentMethods.map(method => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedPayment === method.id
                            ? 'border-yellow-400 bg-yellow-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg ${
                            selectedPayment === method.id ? 'bg-yellow-400' : 'bg-gray-100'
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-bold">{method.name}</p>
                            <p className="text-sm text-gray-500">{method.description}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Payment Details Forms */}
              {selectedPayment === 'upi' && (
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold mb-4">Enter UPI ID</h3>
                  <input
                    type="text"
                    placeholder="yourname@paytm"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                    value={paymentDetails.upiId}
                    onChange={(e) => setPaymentDetails({...paymentDetails, upiId: e.target.value})}
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    UPI apps: Google Pay, PhonePe, Paytm, BHIM
                  </p>
                </div>
              )}

              {selectedPayment === 'card' && (
                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                  <h3 className="font-bold mb-4">Enter Card Details</h3>
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                    maxLength="16"
                    value={paymentDetails.cardNumber}
                    onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                    value={paymentDetails.cardName}
                    onChange={(e) => setPaymentDetails({...paymentDetails, cardName: e.target.value})}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                      maxLength="5"
                      value={paymentDetails.cardExpiry}
                      onChange={(e) => setPaymentDetails({...paymentDetails, cardExpiry: e.target.value})}
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                      maxLength="3"
                      value={paymentDetails.cardCvv}
                      onChange={(e) => setPaymentDetails({...paymentDetails, cardCvv: e.target.value})}
                    />
                  </div>
                </div>
              )}

              {selectedPayment === 'netbanking' && (
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold mb-4">Select Your Bank</h3>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                    value={paymentDetails.netBankingBank}
                    onChange={(e) => setPaymentDetails({...paymentDetails, netBankingBank: e.target.value})}
                  >
                    <option value="">Select Bank</option>
                    {banks.map(bank => (
                      <option key={bank} value={bank}>{bank}</option>
                    ))}
                  </select>
                </div>
              )}

              {selectedPayment === 'cod' && (
                <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-400">
                  <h3 className="font-bold mb-2">Cash on Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Pay ₹{cartTotal.toLocaleString()} in cash when your order is delivered.
                    Additional charges may apply.
                  </p>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-4">
                <h3 className="font-bold mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                        <p className="text-sm font-bold">₹{(item.price * item.qty).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (18%)</span>
                    <span>₹{Math.round(cartTotal * 0.18).toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{Math.round(cartTotal * 1.18).toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full mt-6 bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Complete Payment
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  🔒 Your payment information is secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
