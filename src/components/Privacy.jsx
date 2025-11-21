import { X, Lock } from 'lucide-react';

const Privacy = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="border-b p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lock className="w-8 h-8 text-yellow-400" />
              <div>
                <h1 className="text-2xl font-black">Privacy Policy</h1>
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
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                At LOOT, we respect your privacy and are committed to protecting your personal data. This privacy 
                policy will inform you about how we look after your personal data and tell you about your privacy 
                rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="mb-2">We may collect, use, store and transfer different kinds of personal data about you:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Identity Data:</strong> Name, username, date of birth</li>
                <li><strong>Contact Data:</strong> Email address, phone number, billing and delivery addresses</li>
                <li><strong>Transaction Data:</strong> Details about payments and products purchased</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and products</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="mb-2">We use your personal data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>To process and deliver your orders</li>
                <li>To manage payments, fees and charges</li>
                <li>To communicate with you about your orders and account</li>
                <li>To provide customer support</li>
                <li>To improve our website, products and services</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To protect against fraud and unauthorized transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Security</h2>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being 
                accidentally lost, used or accessed in an unauthorized way. We use SSL encryption for all 
                payment transactions and store your data on secure servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we 
                collected it for, including for the purposes of satisfying any legal, accounting, or reporting 
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Legal Rights</h2>
              <p className="mb-2">Under data protection laws, you have rights including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Object:</strong> Object to processing of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your personal data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store 
                certain information. You can instruct your browser to refuse all cookies or to indicate when 
                a cookie is being sent. However, if you do not accept cookies, you may not be able to use 
                some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Third-Party Links</h2>
              <p>
                Our website may include links to third-party websites. Clicking on those links may allow 
                third parties to collect or share data about you. We do not control these third-party websites 
                and are not responsible for their privacy statements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 18 years of age. We do not knowingly collect 
                personal information from children under 18. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">LOOT Inc.</p>
                <p>Email: anas.chaudhari@loot.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Address: Shop No. 12, Phoenix Marketcity, Kurla West, Mumbai - 400070</p>
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

export default Privacy;
