'use client'
import { useState, useEffect } from "react";
import { DELIVERY_CHARGES, TAX } from "../../lib/constant";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const [cartStorage, setCartStorage] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartStorage(cart);
    }, []);

    const total = cartStorage.length === 0 
        ? 0 
        : cartStorage.reduce((a, b) => a + b.price, 0);

    const orderNow = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            router.push('/order');
        } else {
            router.push('/restaurant?order=true');
        }
    };

    const removeFromCart = (id) => {
        const updatedCart = cartStorage.filter(item => item._id !== id);
        setCartStorage(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-semibold text-center text-orange-600 mb-6">Your Cart</h1>
                
                {cartStorage.length > 0 ? (
                    <div className="space-y-6">
                        {cartStorage.map((item) => (
                            <div key={item._id} className="flex bg-white shadow-lg rounded-lg overflow-hidden">
                                <img className="w-32 h-32 object-cover" src={item.img_path} alt={item.name} />
                                
                                <div className="p-4 flex flex-col justify-between flex-grow">
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold text-orange-600">₹{item.price.toFixed(2)}</span>
                                        <button 
                                            onClick={() => removeFromCart(item._id)} 
                                            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h1 className="text-center text-gray-500 text-xl mt-10">No Food Items in Your Cart</h1>
                )}

                {cartStorage.length > 0 && (
                    <div className="bg-white shadow-lg rounded-lg mt-6 p-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h2>

                        <div className="space-y-2">
                            <div className="flex justify-between text-gray-600">
                                <span>Food Charges:</span>
                                <span>₹{total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax ({TAX}%):</span>
                                <span>₹{(total * TAX / 100).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Delivery Charges:</span>
                                <span>₹{DELIVERY_CHARGES.toFixed(2)}</span>
                            </div>
                            <hr className="my-2"/>
                            <div className="flex justify-between text-xl font-semibold text-orange-600">
                                <span>Total Amount:</span>
                                <span>₹{(total + DELIVERY_CHARGES + (total * TAX / 100)).toFixed(2)}</span>
                            </div>
                        </div>

                        <button 
                            onClick={orderNow} 
                            className="w-full mt-4 bg-orange-600 text-white text-lg py-2 rounded-lg hover:bg-orange-700 transition">
                            Order Now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
