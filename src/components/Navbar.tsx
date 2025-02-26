import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Phone } from "lucide-react";
import QuoteForm from "./QuoteForm"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<string[]>([]); // Store product names
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    company: "",
    message: "",
    product: "",
    image: null as File | null, // Store selected image file
  });

  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  // Fetch product names from the database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data); // Extract product names
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file selection for image upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, image: file });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("phone_no", formData.phone_no);
  formDataToSend.append("company", formData.company);
  formDataToSend.append("message", formData.message);
  formDataToSend.append("product", formData.product);
  if (formData.image) formDataToSend.append("image", formData.image);

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      body: formDataToSend, // Use FormData to send files
    });

    const data = await response.json();
    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
        setFormData({ name: "", email: "", phone_no: "", company: "", message: "", product: "", image: null });
      }, 2000);
    } else {
      alert(data.error || "Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit. Check console for errors.");
  }
};


  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <img src="images/logo.webp" alt="Kanak Print-N-Pack Logo" className="h-10 w-10 object-contain" />
              <div>
                <span className="text-2xl font-bold text-blue-600">Kanak</span>
                <span className="text-2xl font-bold text-red-600">Print-N-Pack</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600">
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-red-700 transition-colors"
              >
                <Phone size={16} />
                <span>Get Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <QuoteForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
