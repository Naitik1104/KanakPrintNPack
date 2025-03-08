import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';
>>>>>>> a05c71d (Latest)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
<<<<<<< HEAD
import Clients from './pages/Clients';
=======
>>>>>>> a05c71d (Latest)

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="flex flex-col min-h-screen">
        <Navbar />
=======
      <div className="flex flex-col min-h-screen relative">

        {/* Floating Social Media Icons */}
        <div className="fixed right-1 top-1/2 transform -translate-y-1/2 space-y-3 z-50">
          {[
            { icon: <MessageCircle />, label: 'WhatsApp', link: 'https://wa.me/9322099267' },
            { icon: <Mail />, label: 'Email', link: 'mailto:kanakprints2024@gmail.com' }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-1 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition"
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              whileHover={{ x: -10 }}
            >
              <span className="hidden group-hover:inline-block text-sm font-medium pr-2">{item.label}</span>
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
>>>>>>> a05c71d (Latest)
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
<<<<<<< HEAD
            {/* <Route path="/clients" element={<Clients />} /> */}
            {/* Other routes will be added as we create more pages */}
          </Routes>
        </main>
=======
          </Routes>
        </main>

        {/* Footer */}
>>>>>>> a05c71d (Latest)
        <Footer />
      </div>
    </Router>
  );
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> a05c71d (Latest)
