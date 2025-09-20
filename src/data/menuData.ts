import heroImage from "@/assets/hero-dish.jpg";
import caesarSalad from "@/assets/caesar-salad.jpg";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import grilledSalmon from "@/assets/grilled-salmon.jpg";

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
    id: "caesar-salad",
    name: "Caesar Salad",
    price: 12.99,
    image: caesarSalad,
    description: "Fresh romaine lettuce with grilled chicken, parmesan cheese, croutons, and our signature caesar dressing",
    category: "starters",
    popular: true,
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    price: 8.99,
    image: heroImage,
    description: "Crispy bread with garlic butter and herbs, served warm",
    category: "starters",
  },
  {
    id: "chicken-wings",
    name: "Buffalo Wings",
    price: 14.99,
    image: heroImage,
    description: "Spicy buffalo wings served with celery sticks and blue cheese dip",
    category: "starters",
  },

  // Mains
  {
    id: "gourmet-burger",
    name: "Gourmet Burger",
    price: 18.99,
    image: heroImage,
    description: "Premium beef patty with aged cheddar, caramelized onions, lettuce, tomato, and our special sauce",
    category: "mains",
    popular: true,
  },
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    price: 16.99,
    image: pepperoniPizza,
    description: "Classic pizza with pepperoni, mozzarella cheese, and our homemade tomato sauce",
    category: "mains",
    popular: true,
  },
  {
    id: "grilled-salmon",
    name: "Grilled Salmon",
    price: 24.99,
    image: grilledSalmon,
    description: "Fresh Atlantic salmon with roasted vegetables and lemon herb butter",
    category: "mains",
  },
  {
    id: "pasta-carbonara",
    name: "Pasta Carbonara",
    price: 17.99,
    image: heroImage,
    description: "Creamy pasta with bacon, eggs, parmesan cheese, and black pepper",
    category: "mains",
  },

  // Desserts
  {
    id: "chocolate-cake",
    name: "Chocolate Lava Cake",
    price: 9.99,
    image: chocolateCake,
    description: "Warm chocolate cake with molten center, served with vanilla ice cream and fresh berries",
    category: "desserts",
    popular: true,
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    price: 8.99,
    image: heroImage,
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
    category: "desserts",
  },
  {
    id: "cheesecake",
    name: "New York Cheesecake",
    price: 7.99,
    image: heroImage,
    description: "Rich and creamy cheesecake with graham cracker crust and berry compote",
    category: "desserts",
  },

  // Drinks
  {
    id: "fresh-lemonade",
    name: "Fresh Lemonade",
    price: 4.99,
    image: heroImage,
    description: "Freshly squeezed lemon juice with mint and sparkling water",
    category: "drinks",
  },
  {
    id: "craft-beer",
    name: "Craft Beer",
    price: 6.99,
    image: heroImage,
    description: "Local craft beer selection, rotating seasonal flavors",
    category: "drinks",
  },
  {
    id: "house-wine",
    name: "House Wine",
    price: 8.99,
    image: heroImage,
    description: "Our signature red or white wine, carefully selected",
    category: "drinks",
  },
];

export const categories = [
  { id: "all", name: "All", count: menuItems.length },
  { id: "starters", name: "Starters", count: menuItems.filter(item => item.category === "starters").length },
  { id: "mains", name: "Mains", count: menuItems.filter(item => item.category === "mains").length },
  { id: "desserts", name: "Desserts", count: menuItems.filter(item => item.category === "desserts").length },
  { id: "drinks", name: "Drinks", count: menuItems.filter(item => item.category === "drinks").length },
];