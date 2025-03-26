'use client';

import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto mt-12 px-6 py-14 bg-white text-gray-800 ">
            <h2 className="text-center text-3xl font-bold text-orange-600">About Us</h2>
            <p className="mt-4 text-lg text-center">
                Welcome to FoodExpress, your go-to destination for delicious and fresh meals.
                Our restaurant is dedicated to serving high-quality dishes made from the finest ingredients.
            </p>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
                <Image 
                    src="/images/quality-food.png" 
                    alt="Restaurant Image" 
                    width={500} 
                    height={300} 
                    className="rounded-lg shadow-md"
                />
                <p className="text-lg">
                    At FoodExpress, we believe in creating a memorable dining experience for our customers. 
                    From our cozy ambiance to our expertly crafted menu, every detail is designed to bring you joy.
                    Whether you're here for a quick bite or a family dinner, we strive to make every meal special.
                </p>
            </div>
            
            <div className="mt-6 bg-orange-500 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="mt-2 text-lg">
                    Our mission is to provide an exceptional culinary experience through quality ingredients, 
                    innovative recipes, and excellent service. We are passionate about food and committed to bringing 
                    you flavors that make you come back for more.
                </p>
            </div>
        </div>
    );
}
