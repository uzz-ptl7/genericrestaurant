import rwandanHero from "@/assets/rwandan-hero.jpg";
import ugaliBeans from "@/assets/ugali-beans.jpg";
import inyamaUbwoba from "@/assets/inyama-ubwoba.jpg";
import roastedBeef from "@/assets/roasted-beef.jpg";
import ibirayiPotatoes from "@/assets/ibirayi-potatoes.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: "starters" | "mains" | "desserts" | "drinks";
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: "ibirayi-appetizer",
    name: "Ibirayi Bites",
    price: 8000, // RWF
    image: ibirayiPotatoes,
    description: "Crispy sweet potato fritters with traditional Rwandan spices and herbs, served with spicy tomato sauce",
    category: "starters",
    popular: true,
  },
  {
    id: "ubwiyeyi-salad",
    name: "Ubwiyeyi Salad",
    price: 6500,
    image: ugaliBeans,
    description: "Fresh local greens with tomatoes, avocado, and traditional dressing",
    category: "starters",
  },
  {
    id: "amaru-soup",
    name: "Amaru Soup",
    price: 7000,
    image: rwandanHero,
    description: "Traditional vegetable soup with local herbs and spices, served hot",
    category: "starters",
  },

  // Mains
  {
    id: "inyama-ubwoba",
    name: "Inyama n'Ubwoba",
    price: 15000,
    image: inyamaUbwoba,
    description: "Traditional Rwandan dish with tender beef and beans, served with steamed rice",
    category: "mains",
    popular: true,
  },
  {
    id: "ugali-inyama",
    name: "Ugali with Grilled Meat",
    price: 13000,
    image: ugaliBeans,
    description: "Authentic ugali served with perfectly grilled beef and mixed vegetables",
    category: "mains",
    popular: true,
  },
  {
    id: "roasted-beef-special",
    name: "Inyama y'Inka (Roasted Beef)",
    price: 18000,
    image: roastedBeef,
    description: "Premium roasted beef with traditional Rwandan spices, served with ibirayi and vegetables",
    category: "mains",
  },
  {
    id: "fish-curry",
    name: "Amafi Curry",
    price: 14000,
    image: rwandanHero,
    description: "Fresh fish in aromatic curry sauce with rice and vegetables",
    category: "mains",
  },

  // Desserts
  {
    id: "ubuki-honey-cake",
    name: "Ubuki Honey Cake",
    price: 5000,
    image: chocolateCake,
    description: "Traditional honey cake made with local ubuki honey and served with fresh fruit",
    category: "desserts",
    popular: true,
  },
  {
    id: "banana-cake",
    name: "Igikoma Cake",
    price: 4500,
    image: rwandanHero,
    description: "Sweet banana cake with local spices and coconut cream",
    category: "desserts",
  },
  {
    id: "fruit-platter",
    name: "Rwandan Fruit Mix",
    price: 4000,
    image: ibirayiPotatoes,
    description: "Fresh seasonal fruits including passion fruit, mango, and pineapple",
    category: "desserts",
  },

  // Drinks
  {
    id: "ikivuguto",
    name: "Ikivuguto",
    price: 2500,
    image: rwandanHero,
    description: "Traditional fermented milk drink, refreshing and nutritious",
    category: "drinks",
    popular: true,
  },
  {
    id: "rwanda-tea",
    name: "Icyayi (Rwandan Tea)",
    price: 2000,
    image: rwandanHero,
    description: "Premium Rwandan tea, grown in the hills of Gisovu",
    category: "drinks",
  },
  {
    id: "passion-juice",
    name: "Fresh Passion Fruit Juice",
    price: 3000,
    image: rwandanHero,
    description: "Freshly squeezed passion fruit juice, locally sourced",
    category: "drinks",
  },
  {
    id: "rwanda-beer",
    name: "Mutzig Beer",
    price: 3500,
    image: rwandanHero,
    description: "Local Rwandan beer, perfectly chilled",
    category: "drinks",
  },
];

export const categories = [
  { id: "all", name: "All", count: menuItems.length },
  { id: "starters", name: "Appetizers", count: menuItems.filter(item => item.category === "starters").length },
  { id: "mains", name: "Main Dishes", count: menuItems.filter(item => item.category === "mains").length },
  { id: "desserts", name: "Desserts", count: menuItems.filter(item => item.category === "desserts").length },
  { id: "drinks", name: "Beverages", count: menuItems.filter(item => item.category === "drinks").length },
];