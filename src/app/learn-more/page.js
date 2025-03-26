import Link from "next/link";
import React from "react";

const LearnMore = () => {
  return (
    <section className="bg-white py-28 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-orange-600 mb-6">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          At <span className="text-orange-500 font-bold">FoodExpress</span>, we believe in delivering more than just food.
          Our commitment to quality, speed, and customer satisfaction drives us to constantly improve our services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {/* Fast Delivery Card */}
                    <div className=" bg-orange-50 rounded-lg shadow-md text-center">
                        <img src="/images/fast-delivery.png" alt="Fast Delivery" className="w-full rounded-t-lg mb-2" />
                        <h3 className="text-xl font-bold text-orange-600 ">Fast Delivery</h3>
                        <p className="text-sm text-gray-500 mb-2">
                            Track your order live and get it delivered within 30 minutes!
                        </p>
                    </div>

                    {/* Quality Food Card */}
                    <div className=" bg-orange-50 rounded-lg shadow-md text-center">
                        <img src="/images/quality-food.png" alt="Quality Food" className="w-full  rounded-t-lg mb-2" />
                        <h3 className="text-xl font-bold text-orange-600">Quality Food</h3>
                        <p className=" text-sm text-gray-500 mb-2">
                            We ensure strict hygiene and quality control for every meal.
                        </p>
                    </div>

                    {/* 24/7 Support Card */}
                    <div className=" bg-orange-50 rounded-lg shadow-md text-center">
                        <img src="/images/support.png" alt="24/7 Support" className="w-full rounded-t-lg mb-2" />
                        <h3 className="text-xl font-bold text-orange-600 ">24/7 Support</h3>
                        <p className="text-sm text-gray-500 ">
                            Have questions? Our team is just a message away!
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {/* Fast Delivery Card */}
                    <div className=" bg-orange-50 rounded-lg shadow-md text-center">
                        <img src="/images/fast-delivery.png" alt="Fast Delivery" className="w-full rounded-t-lg mb-2" />
                        <h3 className="text-xl font-bold text-orange-600 ">Fast Delivery</h3>
                        <p className="text-sm text-gray-500 mb-2">
                            Track your order live and get it delivered within 30 minutes!
                        </p>
                    </div>

                    {/* Quality Food Card */}
                    <div className=" bg-orange-50 rounded-lg shadow-md text-center">
                        <img src="/images/quality-food.png" alt="Quality Food" className="w-full  rounded-t-lg mb-2" />
                        <h3 className="text-xl font-bold text-orange-600">order online</h3>
                        <p className=" text-sm text-gray-500 mb-2">
                            We ensure strict hygiene and quality control for every meal.
                        </p>
                    </div>

                    {/* 24/7 Support Card */}
                    <div className=" bg-orange-50 rounded-lg shadow-md text-center">
                        <img src="/images/support.png" alt="24/7 Support" className="w-full rounded-t-lg mb-2" />
                        <h3 className="text-xl font-bold text-orange-600 ">24/7 Support</h3>
                        <p className="text-sm text-gray-500 ">
                            Have questions? Our team is just a message away!
                        </p>
                    </div>
                </div>
        <button className="mt-10 px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition">
          <Link href="/">Back to Home</Link> 
        </button>
      </div>
    </section>
  );
};

export default LearnMore;
