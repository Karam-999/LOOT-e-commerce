import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const StoreLocator = () => {
  const store = {
    name: "LOOT Mumbai Flagship Store",
    address: "Shop No. 12, Ground Floor, Phoenix Marketcity, Kurla West, Mumbai - 400070",
    phone: "+91 98765 43210",
    hours: "10:00 AM - 10:00 PM (All Days)",
    coordinates: { lat: 19.0883, lng: 72.8891 } // Phoenix Mall Kurla coordinates
  };

  return (
    <section className="bg-white py-16" id="store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Visit Our Store</h2>
          <p className="text-lg text-gray-600">Experience LOOT in person at our Mumbai flagship store</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0234567890123!2d72.8891!3d19.0883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8540e1c2345%3A0x1234567890abcdef!2sPhoenix%20Marketcity%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LOOT Store Location"
            ></iframe>
          </div>

          {/* Store Details */}
          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-black text-gray-900 mb-6">{store.name}</h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600">{store.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Phone</p>
                    <a href={`tel:${store.phone}`} className="text-gray-600 hover:text-yellow-600">
                      {store.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Store Hours</p>
                    <p className="text-gray-600">{store.hours}</p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  🎉 <strong>Grand Opening Offer:</strong> Get 20% off on your first in-store purchase!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
