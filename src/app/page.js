'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import FAQSection from "./components/FAQSection";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocation, setShowLocation] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadLocations();
    loadRestaurants();
  }, []);

  // Load Locations
  const loadLocations = async () => {
    try {
      let response = await fetch('http://localhost:3000/api/customer/locations');
      let data = await response.json();
      if (data.success) {
        setLocations(data.result);
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  // Load Restaurants
  const loadRestaurants = async (params = {}) => {
    try {
      let url = new URL("http://localhost:3000/api/customer");

      if (params.location) {
        url.searchParams.append("location", params.location);
      }
      if (params.restaurant) {
        url.searchParams.append("restaurant", params.restaurant);
      }

      let response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      let data = await response.json();
      setRestaurants(data.success ? data.result : []);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  // Handle Location Selection
  const handleListItem = (location) => {
    setSelectedLocation(location);
    setShowLocation(false);
    loadRestaurants({ location });
  };

  // Handle Restaurant Search (Debounced)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.length > 1) {
        loadRestaurants({ restaurant: searchQuery });
      }
    }, 500); // Debounce API call

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-gray-100 pt-20">
      {/* Banner Section */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/food-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">FoodExpress</h1>
          <h1 className="text-3xl font-semibold mb-10">Discover the best food & drinks in Noida NCR</h1>
          <div className="bg-white p-2 rounded-lg flex items-center shadow-lg">
            {/* Location Input */}
            <input
              type="text"
              value={selectedLocation}
              onClick={() => setShowLocation(true)}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 w-48 border-none focus:outline-none text-gray-700"
              placeholder="Select Place"
            />
            <span className="text-gray-400 mx-2">|</span>
            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="px-4 py-2 w-60 border-none focus:outline-none text-gray-700"
              placeholder="Search food or restaurant"
            />
            <button className="bg-orange-500 px-6 py-2 text-white rounded-lg ml-2 hover:bg-orange-600">Search</button>
          </div>
        </div>
      </div>

      {/* Restaurant List */}
      <div className="container mx-auto px-4 py-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((item) => (
          <div
            key={item._id}
            onClick={() => router.push('explore/' + item.name + "?id=" + item._id)}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <h5 className="text-gray-600 mt-2">Contact: {item.contact}</h5>
              </div>
              <div className="text-gray-700">
                <div>{item.city},</div>
                <div className="truncate max-w-full">{item.address}</div>
                <div className="text-sm text-gray-500">Email: {item.email}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MenuSection/>
      <AboutSection/>
      <FAQSection/>
      <ContactSection/>
    </main>
  
  );
}