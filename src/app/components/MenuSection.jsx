import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

const categories = [
  { id: 1, name: "Burgers", image: "/images/burger.jpg" },
  { id: 2, name: "Pizza", image: "/images/pizza.jpg" },
  { id: 3, name: "Pasta", image: "/images/pasta.png" },
  { id: 4, name: "Chicken", image: "/images/chicken.jpg" },
  { id: 5, name: "Salads", image: "/images/salad.jpg" },
  { id: 6, name: "Desserts", image: "/images/dessert.jpg" },
  { id: 7, name: "Drinks", image: "/images/drinks.jpg" },
  { id: 8, name: "Cakes", image: "/images/cake.jpg" },
  { id: 9, name: "Seafood", image: "/images/seafood.jpg" },
  { id: 10, name: "Dhokla", image: "/images/dhokla.jpg" },
  { id: 11, name: "Biryani", image: "/images/Biryani.jpg" },
  { id: 12, name: "Idli", image: "/images/Idli.jpg" },
  { id: 13, name: "Upma", image: "/images/Upma.jpg" },
  { id: 14, name: "Shake", image: "/images/Shake.jpg" },
  { id: 15, name: "Samosa", image: "/images/Samosa.jpg" },
  { id: 16, name: "Soup", image: "/images/soup.jpg" },
  { id: 17, name: "Poori", image: "/images/Poori.jpg" },
  { id: 18, name: "Poha", image: "/images/Poha.jpg" },
  { id: 19, name: "Pav Bhaji", image: "/images/Pav Bhaji.jpg" },
  { id: 20, name: "Paratha ", image: "/images/Paratha.jpg" },
  { id: 21, name: "Pakoda ", image: "/images/Pakoda.jpg" },
  { id: 22, name: "Omelette", image: "/images/Omelette.jpg" },
  { id: 23, name: "Lassi", image: "/images/Lassi.jpg" },
  { id: 24, name: "Kachori", image: "/images/Kachori.jpg" }
];


const MenuSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-50 pb-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-orange-600 mb-6">Food Categories</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          Explore our variety of food categories to satisfy your cravings.
        </p>

        {/* Scrollable Section */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-md z-10 hover:bg-orange-700 transition"
            onClick={() => scroll("left")}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          {/* Scrollable Categories */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto px-10 scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col items-center min-w-[120px]">
                <a href="/menu">
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                  </div>
                </a>
                <p className="mt-2 text-lg font-semibold text-gray-800">{category.name}</p>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-md z-10 hover:bg-orange-700 transition"
            onClick={() => scroll("right")}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
