import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "BOPP bags",
    description: "Premium retail packaging with custom branding and designs",
    price: "From ₹149/unit",
    image: "/BOPPbags.jpg",
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