const Footer = ({ onShowTerms, onShowPrivacy }) => {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-black tracking-tighter mb-4">LOOT.</h2>
        <p className="text-gray-400 mb-8">The hunt for the best deals ends here.</p>
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <button onClick={onShowTerms} className="hover:text-white">Terms</button>
          <button onClick={onShowPrivacy} className="hover:text-white">Privacy</button>
          <a 
            href="/seller"
            className="hover:text-white"
          >
            Seller Portal
          </a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <p className="mt-8 text-gray-600 text-xs">© 2025 LOOT Inc. All rights reserved.</p>
        <p className="mt-2 text-gray-600 text-xs">
          Developed by{' '}
          <a 
            href="https://github.com/Karam-999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 font-medium"
          >
            Karam Sayed
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
