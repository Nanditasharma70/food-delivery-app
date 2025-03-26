"use client";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Implement form submission logic here (API call or email service)
  };

  return (
    <div className=" px-8 max-w-5xl mx-auto py-32">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
        <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-4 bg-orange-600 text-white p-4 h-40 w-100 rounded-lg shadow-md">
                    <FaPhone className="text-white text-xl" />
                    <span>+123 456 7890</span>
                </div>
                <div className="flex items-center space-x-4 bg-orange-600 text-white h-40 w-100 rounded-lg shadow-md">
                     <FaEnvelope className="text-white text-lg" />
                    <span>support@fooddelivery.com</span>
                </div>
                <div className="col-span-2 flex items-center space-x-4 bg-orange-600 text-white h-40 w-100 p-4 rounded-lg shadow-md">
                    <FaMapMarkerAlt className="text-white text-xl" />
                    <span>123 Food Street, City, Country</span>
                </div>
            </div>
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
