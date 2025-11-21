import { X, Shield } from 'lucide-react';

const Terms = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="border-b p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-yellow-400" />
              <div>
                <h1 className="text-2xl font-black">Terms & Conditions</h1>
                <p className="text-sm text-gray-500">Last updated: November 22, 2025</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using LOOT's website and services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use License</h2>
              <p className="mb-2">
                Permission is granted to temporarily download one copy of the materials on LOOT's website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that 
                product descriptions or other content is accurate, complete, reliable, current, or error-free. 
                If a product offered by LOOT is not as described, your sole remedy is to return it in unused condition.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Pricing and Payment</h2>
              <p className="mb-2">
                All prices are listed in Indian Rupees (₹) and include applicable taxes unless otherwise stated. 
                We accept the following payment methods:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>UPI (Google Pay, PhonePe, Paytm)</li>
                <li>Credit/Debit Cards</li>
                <li>Net Banking</li>
                <li>Cash on Delivery (COD)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Shipping and Delivery</h2>
              <p>
                We offer free shipping on all orders above ₹999. Delivery times vary based on location and 
                product availability. Estimated delivery times are 3-7 business days for most locations in India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Return and Refund Policy</h2>
              <p>
                We offer a 7-day return policy on most products. Items must be unused, in original packaging, 
                and accompanied by proof of purchase. Refunds will be processed within 7-10 business days after 
                receiving the returned item.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate and complete information. You are 
                responsible for maintaining the confidentiality of your account and password.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
              <p>
                LOOT shall not be liable for any indirect, incidental, special, consequential or punitive damages 
                resulting from your use or inability to use the service or for any products purchased through our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">LOOT Inc.</p>
                <p>Email: anas.chaudhari@loot.com</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="border-t p-6 bg-gray-50">
            <button
              onClick={onClose}
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
