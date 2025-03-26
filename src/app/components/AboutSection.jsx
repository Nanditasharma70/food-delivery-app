import React from "react";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section className=" px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center">
                {/* Feature Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {/* Fast Delivery Card */}
                    <div className=" bg-orange-50 rounded-lg shadow-md text-center hover:scale-105 transition">
                        <img src="/images/fast-delivery.png" alt="Fast Delivery" className="w-full rounded-t-lg mb-2" />
                        <h3 className="text-xl font-bold text-orange-600 ">Fast Delivery</h3>
                        <p className="text-sm text-gray-500 mb-2">
                            Track your order live and get it delivered within 30 minutes!
                        </p>
                    </div>

                    {/* Quality Food Card */}
                    <div className=" bg-orange-50 rounded-lg shadow-md text-center hover:scale-105 transition">
                        <img src="/images/quality-food.png" alt="Quality Food" className="w-full  rounded-t-lg mb-2" />
                        <h3 className="text-xl font-bold text-orange-600">Quality Food</h3>
                        <p className=" text-sm text-gray-500 mb-2">
                            We ensure strict hygiene and quality control for every meal.
                        </p>
                    </div>

                    {/* 24/7 Support Card */}
                    <div className=" bg-orange-50 rounded-lg shadow-md text-center hover:scale-105 transition">
                        <img src="/images/support.png" alt="24/7 Support" className="w-full rounded-t-lg mb-2" />
                        <h3 className="text-xl font-bold text-orange-600 ">24/7 Support</h3>
                        <p className="text-sm text-gray-500 ">
                            Have questions? Our team is just a message away!
                        </p>
                    </div>
                </div>

                {/* Learn More Button */}
                <button
                    className="mt-6 px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition">
                    <Link href="/learn-more">Learn More</Link>
                </button>
            </div>
        </section>
    );
};

export default AboutSection;
