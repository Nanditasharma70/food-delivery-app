"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCross } from "react-icons/fa";

const AddRestaurant = ({ onClose }) => {

  const [step, setStep] = useState(1);

  // Handle Next and Previous Steps
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="font-sans">
      {/* Header Bar */}
      <header className="w-full bg-orange-600 text-white flex justify-between items-center p-4 shadow-lg">
        <h1 className="text-2xl font-bold">Zomato Partner</h1>
        <button 
          onClick={() => router.push("/login")}
          className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 transition"
        >
          Login
        </button>
      </header>
      
      {/* Hero Section */}
      <section className="text-center py-10 bg-orange-50">
        <h2 className="text-4xl font-bold text-orange-700">Partner with Zomato and grow your business</h2>
        <p className="text-xl mt-3 text-orange-500">0% commission for 1st month! Valid for new restaurant partners.</p>
        <button 
          onClick={toggleForm} 
          className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
        >
          Register Your Restaurant
        </button>
      </section>

      {/* Required Documents */}
      <section className="p-6">
        <h3 className="text-2xl font-semibold text-orange-700">Documents Required:</h3>
        <ul className="list-disc ml-6 mt-2 text-orange-600">
          <li>PAN card</li>
          <li>GST number (if applicable)</li>
          <li>FSSAI license (<a href="#" className="text-blue-600 underline">Apply here</a>)</li>
          <li>Menu & profile food image</li>
          <li>Bank account details</li>
        </ul>
      </section>

      {/* Why Partner with Zomato */}
      <section className="p-6 bg-orange-100 rounded-lg shadow-md mx-4 my-4">
        <h3 className="text-2xl font-semibold text-orange-700">Why Partner with Zomato?</h3>
        <p className="text-orange-600 mt-2">✔ Reach millions of customers</p>
        <p className="text-orange-600">✔ Doorstep delivery convenience</p>
        <p className="text-orange-600">✔ 24/7 Support: <a href="mailto:merchantonboarding@zomato.com" className="text-blue-600 underline">merchantonboarding@zomato.com</a></p>
      </section>

      {/* Popup Form */}
      {showForm && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 animate-fadeIn">

      <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
        >
          <FaCross/>
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