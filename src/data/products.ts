import { Product } from '../types';

export const products: Product[] = [
<<<<<<< HEAD
  {
    id: 1,
=======
  
  {
    id: 1,
    name: "Paper Bags",
    description: "Sustainable packaging solutions for e-commerce businesses",
    price: "From ₹79/unit",
    image: "/Final images/Paper/paper bag.png",
    category: "Paper"
  },
  {
    id: 2,
    name: "Paper Boxes",
    description: "Sustainable packaging solutions for e-commerce businesses",
    price: "From ₹79/unit",
    image: "/Box.jpg",
    category: "Box"
  },
  {
    id: 3,
    name: "Printed Paper Bags",
    description: "Safe and certified packaging for food and beverages",
    price: "From ₹199/unit",
    image: "/Final images/Paper/Printed paper bags.jpg",
    category: "Bags"
  },
  {
    id: 4,
    name: "Printed Paper Box",
    description: "Premium gift packaging with elegant finishes",
    price: "From ₹39/unit",
    image: "/Final images/Paper/Printed Paper Box.jpg",
    category: "Box"
  },
  {
    id: 5,
    name: "Printed Non-Woven Bags",
    description: "Heavy-duty packaging solutions for industrial products",
    price: "Custom Quote",
    image: "/Final images/Paper/Printed-Non-Woven-Bag.jpg",
    category: "Bags"
  },
  {
    id: 6,
    name: "Rexine Booklet",
    description: "Shock-absorbing materials for fragile items",
    price: "From ₹119/unit",
    image: "/Final images/Paper/rexine booklet 1.jpg",
    category: "Booklet"
  },
  {
    id: 7,
    name: "Rexine Export Booklet",
    description: "Shock-absorbing materials for fragile items",
    price: "From ₹119/unit",
    image: "/Final images/Paper/Rexine Export Booklet.jpg",
    category: "Booklet"
  },
  {
    id: 8,
>>>>>>> a05c71d (Latest)
    name: "BOPP bags",
    description: "Premium retail packaging with custom branding and designs",
    price: "From ₹149/unit",
    image: "/BOPPbags.jpg",
<<<<<<< HEAD
    category: "Retail"
  },
  {
    id: 2,
    name: "Boxes",
    description: "Sustainable packaging solutions for e-commerce businesses",
    price: "From ₹79/unit",
    image: "/Box.jpg",
    category: "E-commerce"
  },
  {
    id: 3,
    name: "PVC Pouches",
    description: "Safe and certified packaging for food and beverages",
    price: "From ₹199/unit",
    image: "https://images.unsplash.com/photo-1546868871-0f936769675e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    category: "Food"
  },
  {
    id: 4,
    name: "Gift Boxes",
    description: "Premium gift packaging with elegant finishes",
    price: "From ₹39/unit",
    image: "",
    category: "Gift"
  },
  {
    id: 5,
    name: "Industrial Packaging",
    description: "Heavy-duty packaging solutions for industrial products",
    price: "Custom Quote",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    category: "Industrial"
  },
  {
    id: 6,
    name: "Protective Packaging",
    description: "Shock-absorbing materials for fragile items",
    price: "From ₹119/unit",
    image: "https://images.unsplash.com/photo-1614177092298-cb9cca8d8424?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    category: "Protection"
  }
=======
    category: "Bags"
  },
  {
    id: 9,
    name: "Paper Tags",
    description: "Premium retail packaging with custom branding and designs",
    price: "From ₹149/unit",
    image: "/Final images/Paper/Tag 1.jpg",
    category: "Tags"
  },
  {
    id: 10,
    name: "Pasting Box",
    description: "Premium retail packaging with custom branding and designs",
    price: "From ₹149/unit",
    image: "/Final images/Paper/pasting box.jpg",
    category: "Box"
  },
  {
    id: 11,
    name: "Heat Transfer Sticker",
    description: "Premium retail packaging with custom branding and designs",
    price: "From ₹149/unit",
    image: "/Final images/Platic/Heat transfer sticker 2.jpg",
    category: "Sticker"
  },
  {
    id: 12,
    name: "Plastic Box",
    description: "Premium retail packaging with custom branding and designs",
    price: "From ₹149/unit",
    image: "/Final images/Platic/Plastic Box 1.jpeg",
    category: "Box"
  },
  {
    id: 13,
    name: "PVC Bags",
    description: "Premium retail packaging with custom branding and designs",
    price: "From ₹149/unit",
    image: "/Final images/Platic/PVC bags.jpg",
    category: "PVC"
  },
  {
    id: 14,
    name: "Taffeta Label",
    description: "Premium retail packaging with custom branding and designs",
    price: "From ₹149/unit",
    image: "/Final images/Platic/taffeta label.jpg",
    category: "Label"
  },
  {
    id: 15,
    name: "Satin Label",
    description: "Premium retail packaging with custom branding and designs",
    price: "From ₹149/unit",
    image: "/Final images/Platic/Satin label.png",
    category: "Label"
  },
  {
    id: 16,
    name: "Corrugated Paper Box",
    description: "Premium retail packaging with custom branding and designs",
    price: "From ₹149/unit",
    image: "/Final images/Paper/corrugated paper box.png",
    category: "Box"
  },
>>>>>>> a05c71d (Latest)
];

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("http://localhost:5000/products");
    if (!response.ok) throw new Error("Failed to fetch products");

    const data = await response.json();

    return data.map((item: any) => ({
      id: item.id,
      name: item.name,
      description: "Premium quality packaging",
      price: `From ₹${item.price}/unit`, 
      image: "/default.jpg",
      category: "General",
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};