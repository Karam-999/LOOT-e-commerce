import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-yellow-400 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 z-10">
          <h1 className="text-5xl md:text-7xl font-black text-black mb-4 leading-none">
            STEAL<br/>THE LOOK
          </h1>
          <p className="text-xl font-medium text-gray-800 mb-8 max-w-lg">
            Premium streetwear, luxury watches, and limited edition kicks. Grab them before they're gone.
          </p>
          <button 
            onClick={() => {
              document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-900 transition-transform hover:scale-105 flex items-center gap-2"
          >
            Start Looting <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        {/* Decorative visual */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800" 
            alt="Hero Shopping" 
            className="rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-md mx-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
