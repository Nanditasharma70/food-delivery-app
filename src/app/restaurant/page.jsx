"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCross } from "react-icons/fa";
import FAQSection from "../components/FAQSection";
import SuccessStoriesSlider from "../components/SuccessStory";

const AddRestaurant = ({ onClose }) => {

  const [step, setStep] = useState(1);

  // Handle Next and Previous Steps
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const toggleForm = () => setShowForm(!showForm);

  return (
<div className="font-sans mt-20">
<section
  className="relative w-full text-center py-10 bg-orange-50 bg-cover bg-center flex flex-col items-center"
  style={{ backgroundImage: "url('/images/food-banner.jpg')" }}
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Main Heading & CTA Button */}
  <div className="relative  max-w-2xl px-6 text-center">
    <h2 className="text-5xl font-bold text-orange-600">
      Partner with FoodExpress <br /> and grow your business
    </h2>
    <p className="text-xl mt-3 text-white font-medium">
      0% commission for 1st month! Valid for new restaurant partners.
    </p>
    <button
      onClick={toggleForm}
      className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
    >
      Register Your Restaurant
    </button>
  </div>
</section>

<section className="p-6 bg-orange-100 py-10 my-4">
  <h3 className="text-2xl font-semibold text-orange-700 text-center">
    Why Partner with FoodExpress?
  </h3>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 mx-20">
    
    {/* Card 1 */}
    <div className="items-center text-center bg-white px-4 py-10 rounded-lg shadow-sm">
      <span className="text-orange-600 text-2xl">🌍</span>
      <h3 className="text-orange-600 font-medium">Attract new customers</h3>
      <p >Reach millions of customers</p>
    </div>

    {/* Card 2 */}
    <div className="items-center text-center bg-white px-4 py-10 rounded-lg shadow-sm">
      <span className="text-orange-600 text-2xl">🚚</span>
      <h3 className="text-orange-600 font-medium">Doorstep delivery convenience</h3>
      <p>Easily get your orders delivered through our trained delivery partners</p>
    </div>

    {/* Card 3 */}
    <div className="items-center text-center bg-white px-4 py-10  rounded-lg shadow-sm">
      <span className="text-orange-600 text-2xl">📞</span>
      <h3 className="text-orange-600 font-medium">Onboarding support</h3>
      <p >
        24/7 Support:{" "}
        <a href="mailto:merchantonboarding@zomato.com" className="text-blue-600 underline">
          merchantonboarding@foodexpress.com
        </a>
      </p>
    </div>

  </div>
</section>
<SuccessStoriesSlider/>

      <FAQSection />

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 animate-fadeIn">

            <button
              onClick={onClose}
              className="absolute top-0 right-1 text-black hover:text-red-600 text-xl"
            >
              <FaCross />
            </button>

            {/* Progress Indicator */}
            <div className="flex justify-between items-center mb-4">
              <span className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${step >= 1 ? "bg-orange-600" : "bg-gray-300"}`}>1</span>
              <span className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${step >= 2 ? "bg-orange-600" : "bg-gray-300"}`}>2</span>
              <span className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${step >= 3 ? "bg-orange-600" : "bg-gray-300"}`}>3</span>
            </div>

            {/* Step 1 - Basic Details */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-orange-700 text-center">Basic Details</h2>
                <input type="text" placeholder="Restaurant Name" className="w-full p-3 border rounded-lg mt-2" />
                <input type="text" placeholder="Owner Name" className="w-full p-3 border rounded-lg mt-2" />
                <input type="text" placeholder="Contact Number" className="w-full p-3 border rounded-lg mt-2" />
                <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg mt-2" />
                <button onClick={nextStep} className="bg-orange-600 text-white px-4 py-2 rounded-full font-semibold mt-4 w-full hover:bg-orange-700 transition">Next</button>
              </div>
            )}

            {/* Step 2 - Business Details */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-orange-700 text-center">Business Details</h2>
                <input type="text" placeholder="Restaurant Type (Cafe, Fast Food, etc.)" className="w-full p-3 border rounded-lg mt-2" />
                <input type="text" placeholder="Address" className="w-full p-3 border rounded-lg mt-2" />
                <input type="text" placeholder="Opening Hours (10 AM - 10 PM)" className="w-full p-3 border rounded-lg mt-2" />
                <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded-full font-semibold mt-4 w-full hover:bg-gray-500 transition">Back</button>
                <button onClick={nextStep} className="bg-orange-600 text-white px-4 py-2 rounded-full font-semibold mt-4 w-full hover:bg-orange-700 transition">Next</button>
              </div>
            )}

            {/* Step 3 - Documents & Uploads */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-orange-700 text-center">Documents & Uploads</h2>
                <input type="text" placeholder="FSSAI License Number" className="w-full p-3 border rounded-lg mt-2" />
                <input type="text" placeholder="Bank Account Details" className="w-full p-3 border rounded-lg mt-2" />

                {/* File Upload */}
                <div className="mt-4">
                  <label className="block text-gray-700">Upload Menu (PDF or Image)</label>
                  <input type="file" className="w-full p-2 border rounded-lg mt-1" />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Upload Profile Food Image</label>
                  <input type="file" className="w-full p-2 border rounded-lg mt-1" />
                </div>

                <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded-full font-semibold mt-4 w-full hover:bg-gray-500 transition">Back</button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold mt-4 w-full hover:bg-green-700 transition">Submit</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRestaurant;