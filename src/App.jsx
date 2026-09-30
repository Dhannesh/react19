import ProductPage from "./components/ProductPage";
const App = () => {
  const foodProducts = [
    {
      id: 1,
      name: "Margherita Pizza",
      icon: "🍕",
      featured: true,
    },
    {
      id: 2,
      name: "Veg Burger",
      icon: "🍔",
      featured: true,
    },
    {
      id: 3,
      name: "French Fries",
      icon: "🍟",
      featured: false,
    },
    {
      id: 4,
      name: "Pasta Alfredo",
      icon: "🍝",
      featured: true,
    },
    {
      id: 5,
      name: "Sandwich",
      icon: "🥪",
      featured: false,
    },
    {
      id: 6,
      name: "Taco",
      icon: "🌮",
      featured: false,
    },
    {
      id: 7,
      name: "Sushi Roll",
      icon: "🍣",
      featured: true,
    },
    {
      id: 8,
      name: "Fried Chicken",
      icon: "🍗",
      featured: true,
    },
    {
      id: 9,
      name: "Ice Cream",
      icon: "🍨",
      featured: false,
    },
    {
      id: 10,
      name: "Chocolate Cake",
      icon: "🍰",
      featured: true,
    },
    {
      id: 11,
      name: "Donut",
      icon: "🍩",
      featured: false,
    },
    {
      id: 12,
      name: "Hot Dog",
      icon: "🌭",
      featured: false,
    },
    {
      id: 13,
      name: "Biryani",
      icon: "🍛",
      featured: true,
    },
    {
      id: 14,
      name: "Paneer Tikka",
      icon: "🍢",
      featured: true,
    },
    {
      id: 15,
      name: "Noodles",
      icon: "🍜",
      featured: false,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <ProductPage products={foodProducts} heading="The Food Items " />
    </div>
  );
};
export default App;
