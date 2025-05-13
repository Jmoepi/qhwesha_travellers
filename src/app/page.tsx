import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp
  , FaInstagram } from "react-icons/fa";
//import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Floating Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-4">
            <div className="flex items-center gap-6">
              <a
                href="tel:+27784446812"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                <span className="font-medium">078 444 6812</span>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/27784446812"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              {/* <a
                href="https://facebook.com/qhweshatravellers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a> */}
              <a
                href="https://instagram.com/qhwesha01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="pb-20"> {/* Add padding bottom to account for floating bar */}
        {/* Hero Section */}
        <section className="relative h-screen w-full">
          {/* Hero Image with Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-[url('/taxi.jpg')] bg-cover bg-center" />
          
          {/* Hero Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                Qhwesha Travellers
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
                Your trusted partner for safe and comfortable travel across South Africa and neighboring countries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/booking" 
                  className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book Your Journey
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-black">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                  <Image src="/shuttle.png" alt="Safety" width={40} height={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">Safe Travel</h3>
                <p className="text-gray-600">Professional drivers and well-maintained vehicles for your peace of mind</p>
              </div>
              <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                  <Image src="/relax.png" alt="Comfort" width={40} height={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">Comfortable Rides</h3>
                <p className="text-gray-600">Spacious vehicles with modern amenities for a pleasant journey</p>
              </div>
              <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                  <Image src="/track.png" alt="Routes" width={40} height={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">Extensive Routes</h3>
                <p className="text-gray-600">Covering South Africa and neighboring countries with regular schedules</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-semibold mb-4">Qhwesha Travellers</h4>
              <p className="text-gray-400">Your trusted partner for safe and comfortable travel across South Africa and neighboring countries.</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">
                <MapPinIcon className="w-5 h-5 inline-block mr-2" />
                584 Lokaleng, Taung, North West, South Africa
              </p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Qhwesha Travellers. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
