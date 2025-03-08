import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<<<<<<< HEAD
=======
          
>>>>>>> a05c71d (Latest)
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Kanak Print-N-Pack is your trusted partner for innovative packaging solutions.
              We deliver quality, sustainability, and excellence in every package.
            </p>
          </div>
<<<<<<< HEAD
=======

          {/* Quick Links */}
>>>>>>> a05c71d (Latest)
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/clients" className="text-gray-400 hover:text-white">Clients</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
<<<<<<< HEAD
=======

>>>>>>> a05c71d (Latest)
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
<<<<<<< HEAD
                <MapPin size={16} />
                <span>9/11 Ladwadi, Old Hanuman Lane,Kalbadevi,Mumbai</span>
=======
                <MapPin size={30} />
                <span>9/11 Ladwadi, Old Hanuman Lane, Kalbadevi, Mumbai</span>
>>>>>>> a05c71d (Latest)
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 9322299267, 9029031502</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>kanakprints1@gmail.com</span>
              </li>
            </ul>
          </div>
<<<<<<< HEAD
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden">
             
            </div>
          </div>
        </div>
=======

          
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                title="Google Map"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.745159059987!2d72.8297!3d18.9476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce0cc51a9e89%3A0x784c1a6eac27b48f!2sLadwadi%2C%20Old%20Hanuman%20Lane%2C%20Kalbadevi%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1710000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

>>>>>>> a05c71d (Latest)
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Kanak Print-N-Pack. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
<<<<<<< HEAD
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
=======
              {/* <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#kanakprints2024@gmail.com" className="text-gray-400 hover:text-white"><Mail size={20} /></a> */}
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/kanakprintnpack?utm_source=qr&igsh=OGh1N3hzNWl3OGZ4" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
>>>>>>> a05c71d (Latest)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> a05c71d (Latest)
