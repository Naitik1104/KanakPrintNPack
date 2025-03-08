import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Recycle, Shield, Star, MessageCircle, ShoppingCart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ClientCarousel from '../components/ClientCarousel';
import { products } from '../data/products';

const Home = () => {
  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Custom Packaging',
      description: 'Tailored solutions for your specific needs'
    },
    {
      icon: <Recycle className="w-6 h-6" />,
<<<<<<< HEAD
      title: 'Eco-Friendly',
=======
      title: 'Sustainability',
>>>>>>> a05c71d (Latest)
      description: 'Sustainable materials and processes'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Assured',
      description: 'ISO certified manufacturing'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Tech Solutions Inc.',
      content: 'Kanak Print-N-Pack has been instrumental in our product packaging success.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Sarah Johnson',
      company: 'Eco Foods',
      content: 'Their sustainable packaging solutions align perfectly with our brand values.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen relative">
      {/* Floating Icons */}
      <div className="fixed right-1 top-1/2 transform -translate-y-1/2 space-y-3 z-50">
        {[
<<<<<<< HEAD
          { icon: <MessageCircle />, label: 'WhatsApp', link: 'https://wa.me/9322299267' },
          { icon: <ShoppingCart />, label: 'Amazon', link: 'https://www.amazon.com/' },
          { icon: <Mail />, label: 'Email', link: 'mailto:info@example.com' }
=======
          { icon: <MessageCircle />, label: 'WhatsApp', link: 'https://wa.me/9322099267' },
          /*{ icon: <ShoppingCart />, label: 'Amazon', link: 'https://www.amazon.com/' },*/
          { icon: <Mail />, label: 'Email', link: 'kanakprints2024@gmail.com' }
>>>>>>> a05c71d (Latest)
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-1 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-70 transition"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            whileHover={{ x: -10 }}
          >
            <span className="hidden group-hover:inline-block text-sm font-medium pr-2">{item.label}</span>
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="images/Slider banner.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Packaging Solutions
              <br />
              for Your Business
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your products with our premium packaging solutions
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/services"
                className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors inline-flex items-center"
              >
                Our Services
                <ArrowRight className="ml-2" />
              </Link>
<<<<<<< HEAD
=======
              <Link
                to="/about"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                About Us
                <ArrowRight className="ml-2" />
              </Link>
>>>>>>> a05c71d (Latest)
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600">Discover the advantages of working with Kanak Print-N-Pack</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-gray-50 rounded-lg text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
		
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600">Explore our most popular packaging solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
            <p className="text-gray-600">Partnering with leading businesses across industries</p>
          </div>
          <ClientCarousel />
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Trusted by businesses worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
=======
>>>>>>> a05c71d (Latest)
    </div>
  );
};

export default Home;