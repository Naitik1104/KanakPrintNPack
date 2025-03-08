<<<<<<< HEAD
import React, { useState, useEffect } from "react";

const QuoteForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [products, setProducts] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    company: "",
    message: "",
    product: "",
    image: null as File | null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) formDataToSend.append(key, value as string | Blob);
    });

    try {
      const response = await fetch("http://localhost:5000/contact", { method: "POST", body: formDataToSend });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          setFormData({ name: "", email: "", phone_no: "", company: "", message: "", product: "", image: null });
        }, 2000);
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>
        {submitted ? (
          <p className="text-green-600 text-center">Quote submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded-md" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-md" />
            <input type="tel" name="phone_no" placeholder="Your Phone" value={formData.phone_no} onChange={handleChange} required className="w-full p-2 border rounded-md" />
            <input type="text" name="company" placeholder="Enter your company name" value={formData.company} onChange={handleChange} required className="w-full p-2 border rounded-md" />

            {/* Product Dropdown */}
            <select name="product" value={formData.product} onChange={handleChange} required className="w-full p-2 border rounded-md">
              <option value="">Select Product</option>
              {products.map((product, index) => (
                <option key={index} value={product}>{product}</option>
              ))}
            </select>

            {/* File Upload */}
            <input type="file" accept="image/*" name="image" onChange={handleFileChange} className="w-full p-2 border rounded-md" />

            <textarea name="message" placeholder="Optional Message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded-md" />

            <div className="flex justify-end space-x-2">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded-md">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
=======
import React, { useState, useEffect } from "react";

const QuoteForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [products, setProducts] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    company: "",
    message: "",
    product: "",
    image: null as File | null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) formDataToSend.append(key, value as string | Blob);
    });

    try {
      const response = await fetch("http://localhost:5000/contact", { method: "POST", body: formDataToSend });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          setFormData({ name: "", email: "", phone_no: "", company: "", message: "", product: "", image: null });
        }, 2000);
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>
        {submitted ? (
          <p className="text-green-600 text-center">Quote submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded-md" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-md" />
            <input type="tel" name="phone_no" placeholder="Your Phone" value={formData.phone_no} onChange={handleChange} required className="w-full p-2 border rounded-md" />
            <input type="text" name="company" placeholder="Enter your company name" value={formData.company} onChange={handleChange} required className="w-full p-2 border rounded-md" />

            {/* Product Dropdown */}
            <select name="product" value={formData.product} onChange={handleChange} required className="w-full p-2 border rounded-md">
              <option value="">Select Product</option>
              {products.map((product, index) => (
                <option key={index} value={product}>{product}</option>
              ))}
            </select>

            {/* File Upload */}
            <input type="file" accept="image/*" name="image" onChange={handleFileChange} className="w-full p-2 border rounded-md" />

            <textarea name="message" placeholder="Optional Message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded-md" />

            <div className="flex justify-end space-x-2">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded-md">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
>>>>>>> a05c71d (Latest)
