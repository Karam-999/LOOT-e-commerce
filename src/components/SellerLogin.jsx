import { useState } from 'react';
import { ShoppingBag, Lock, User } from 'lucide-react';

const SellerLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple authentication (in production, use proper backend authentication)
    if (credentials.username === 'seller' && credentials.password === 'seller123') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="bg-yellow-400 text-black p-3 rounded-lg">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-black text-white">LOOT</h1>
          </div>
          <p className="text-gray-400 text-lg">Seller Portal Login</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Username */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 pl-11 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                  placeholder="Enter username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 pl-11 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Login to Dashboard
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 font-medium mb-2">Demo Credentials:</p>
            <p className="text-sm text-gray-700">
              <strong>Username:</strong> seller<br />
              <strong>Password:</strong> seller123
            </p>
          </div>

          {/* Back to Store */}
          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-gray-600 hover:text-yellow-600 font-medium">
              ← Back to Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
