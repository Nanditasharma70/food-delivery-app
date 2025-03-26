import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Simply browse our menu, add items to your cart, and proceed to checkout. You can choose delivery or pickup at your convenience.",
  },
  {
    question: "What are the delivery charges?",
    answer:
      "Delivery charges vary based on your location and order total. We also offer free delivery on orders above a certain amount.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes! Once your order is placed, you’ll receive a tracking link to monitor your food delivery in real time.",
  },
  {
    question: "Do you offer contactless delivery?",
    answer:
      "Absolutely! We prioritize safety and offer contactless delivery upon request. Our delivery personnel follow all hygiene protocols.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods, including credit/debit cards, UPI, net banking, and cash on delivery (COD).",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16 mt-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-orange-600 mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-700 text-lg mb-8">
        Find answers to common questions about our food delivery service.
      </p>
    </div>

    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-orange-100 hover:bg-orange-200 transition focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-semibold text-orange-800">
              {faq.question}
            </span>
            <span className="text-orange-600">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-gray-50">{faq.answer}</div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default FAQSection;
