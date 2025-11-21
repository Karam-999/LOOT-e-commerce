import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  const ownerDetails = {
    name: "Mohd Anas Chaudhari",
    role: "Owner & Founder",
    email: "anas.chaudhari@gmail.com",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
    address: "Shop No. 12, Phoenix Marketcity, Kurla West, Mumbai - 400070"
  };

  return (
    <section className="bg-gray-50 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Have questions? We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-2">{ownerDetails.name}</h3>
              <p className="text-yellow-600 font-medium">{ownerDetails.role}</p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Email</p>
                  <a 
                    href={`mailto:${ownerDetails.email}`}
                    className="text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    {ownerDetails.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Phone</p>
                  <a 
                    href={`tel:${ownerDetails.phone}`}
                    className="text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    {ownerDetails.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">WhatsApp</p>
                  <a 
                    href={`https://wa.me/${ownerDetails.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Address</p>
                  <p className="text-gray-600">{ownerDetails.address}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 pt-8 border-t border-gray-200 flex gap-3">
              <a
                href={`mailto:${ownerDetails.email}`}
                className="flex-1 bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-900 transition-colors text-center"
              >
                Send Email
              </a>
              <a
                href={`https://wa.me/${ownerDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-black text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:border-yellow-400 focus:outline-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! We will get back to you soon.');
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
