'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DeliveryHeader from "../DeliveryHeader";

const Page = () => {
    const [loginMobile, setLoginMobile] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const router = useRouter();

    useEffect(() => {
        const delivery = JSON.parse(localStorage.getItem('delivery'));
        if (delivery) {
            router.push('/deliverydashboard');
        }
    }, []);

    const handleSignUp = async () => {
        if (!name || !mobile || !password || !confirmPassword || !city || !address) {
            alert("All fields are required!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        let response = await fetch('http://localhost:3000/api/deliverypartners/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, mobile, password, city, address })
        });

        response = await response.json();
        if (response.success) {
            const { result } = response;
            delete result.password;
            localStorage.setItem('delivery', JSON.stringify(result));
            router.push('/deliverydashboard');
        } else {
            alert("Signup failed. Try again.");
        }
    };

    const loginHandle = async () => {
        if (!loginMobile || !loginPassword) {
            alert("Please enter mobile and password!");
            return;
        }

        let response = await fetch('http://localhost:3000/api/deliverypartners/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobile: loginMobile, password: loginPassword })
        });

        response = await response.json();
        if (response.success) {
            const { result } = response;
            delete result.password;
            localStorage.setItem('delivery', JSON.stringify(result));
            router.push('/deliverydashboard');
        } else {
            alert("Failed to login. Please check credentials.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <DeliveryHeader />
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-semibold text-center text-orange-600 mb-6">Delivery Partner</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">
                    
                    {/* Login Section */}
                    <div className="border-r md:border-r-2 border-gray-200 pr-4">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Login</h3>
                        
                        <div className="mb-4">
                            <input 
                                type="text" 
                                placeholder="Enter mobile" 
                                value={loginMobile} 
                                onChange={(event) => setLoginMobile(event.target.value)} 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        
                        <div className="mb-4">
                            <input 
                                type="password" 
                                placeholder="Enter password" 
                                value={loginPassword} 
                                onChange={(event) => setLoginPassword(event.target.value)} 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <button 
                            onClick={loginHandle} 
                            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition">
                            Login
                        </button>
                    </div>

                    {/* Signup Section */}
                    <div className="pl-4">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Signup</h3>

                        <div className="mb-3">
                            <input 
                                type="text" 
                                placeholder="Enter name" 
                                value={name} 
                                onChange={(event) => setName(event.target.value)} 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="mb-3">
                            <input 
                                type="text" 
                                placeholder="Enter mobile" 
                                value={mobile} 
                                onChange={(event) => setMobile(event.target.value)} 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="mb-3">
                            <input 
                                type="password" 
                                placeholder="Enter password" 
                                value={password} 
                                onChange={(event) => setPassword(event.target.value)} 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="mb-3">
                            <input 
                                type="password" 
                                placeholder="Confirm password" 
                                value={confirmPassword} 
                                onChange={(event) => setConfirmPassword(event.target.value)} 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="mb-3">
                            <input 
                                type="text" 
                                placeholder="Enter city" 
                                value={city} 
                                onChange={(event) => setCity(event.target.value)} 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="mb-3">
                            <input 
                                type="text" 
                                placeholder="Enter address" 
                                value={address} 
                                onChange={(event) => setAddress(event.target.value)} 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <button 
                            onClick={handleSignUp} 
                            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
