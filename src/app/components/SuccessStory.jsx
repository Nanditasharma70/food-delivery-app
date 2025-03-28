import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const stories = [
  {
    id: 1,
    name: "Aman Verma",
    restaurant: "Spice Haven",
    rating: 4.5,
    description:
      "Started from a food stall in Delhi, now owns three outlets known for authentic North Indian cuisine.",
  },
  {
    id: 2,
    name: "Neha Kapoor",
    restaurant: "The Vegan Delight",
    rating: 5,
    description:
      "Transformed her passion for healthy food into a thriving vegan restaurant with a loyal customer base.",
  },
  {
    id: 3,
    name: "Rajesh Mehta",
    restaurant: "Royal Tandoor",
    rating: 4,
    description:
      "Overcame tough competition to build a premium dining experience, blending tradition with innovation.",
  },
  {
    id: 4,
    name: "Pooja Sharma",
    restaurant: "Fusion Bites",
    rating: 4.8,
    description:
      "Introduced a unique Indo-Italian fusion menu that captivated the city's food lovers.",
  },
];

export default function SuccessStoriesSlider() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Restaurant Success Stories
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="pb-6"
      >
        {stories.map((story) => (
          <SwiperSlide key={story.id} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-700">{story.restaurant}</h3>
            <p className="text-gray-700 font-medium">{story.name}</p>
            <div className="flex justify-center my-2">{renderStars(story.rating)}</div>
            <p className="text-gray-600">{story.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-yellow-500 text-lg" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500 text-lg" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-gray-400 text-lg" />
      ))}
    </>
  );
}
