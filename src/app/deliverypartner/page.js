'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "../components/Modal";
import DeliveryHeader from "../DeliveryHeader";

const Page = () => {
    const [loginMobile, setLoginMobile] = useState('');
    const [isSignup, setIsSignup] = useState(false);
    const [loginPassword, setLoginPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        city: "",
        address: "",
    });
    const handleChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    };
    
    
    // useEffect(() => {
    //     const delivery = JSON.parse(localStorage.getItem('delivery'));
    //     if (delivery) {
    //         router.push('/deliverydashboard');
    //     }
    // }, []);

    // const handleSignUp = async () => {
    //     if (!name || !mobile || !password || !confirmPassword || !city || !address) {
    //         alert("All fields are required!");
    //         return;
    //     }

    //     if (password !== confirmPassword) {
    //         alert("Passwords do not match!");
    //         return;
    //     }

    //     let response = await fetch('http://localhost:3000/api/deliverypartners/signup', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ name, mobile, password, city, address })
    //     });

    //     response = await response.json();
    //     if (response.success) {
    //         const { result } = response;
    //         delete result.password;
    //         localStorage.setItem('delivery', JSON.stringify(result));
    //         router.push('/deliverydashboard');
    //     } else {
    //         alert("Signup failed. Try again.");
    //     }
    // };

    // const loginHandle = async () => {
    //     if (!loginMobile || !loginPassword) {
    //         alert("Please enter mobile and password!");
    //         return;
    //     }

    //     let response = await fetch('http://localhost:3000/api/deliverypartners/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ mobile: loginMobile, password: loginPassword })
    //     });

    //     response = await response.json();
    //     if (response.success) {
    //         const { result } = response;
    //         delete result.password;
    //         localStorage.setItem('delivery', JSON.stringify(result));
    //         router.push('/deliverydashboard');
    //     } else {
    //         alert("Failed to login. Please check credentials.");
    //     }
    // };

    
    
    return (
        <div className="min-h-screen mt-20 flex flex-col">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center  bg-cover bg-center py-20 px-6 bg-gray-100" 
        style={{ backgroundImage: "url('/images/food-banner.jpg')" }}
        >
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            <h1 className="text-4xl font-bold text-orange-600 mb-4">
                Become a Delivery Partner
            </h1>
            <p className="text-lg text-white mb-6">
                Join our network and start earning with flexible work hours.
            </p>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition"
            >
                Get Started
            </button>
        </div>

        {/* Modal for Login/Signup */}
        {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
                  <div>
            <h2 className="text-2xl font-semibold text-center text-orange-600 mb-4">
                {isSignup ? "Signup" : "Login"}
            </h2>

            <div className="space-y-3">
                {isSignup && (
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                    />
                )}
                <input
                    type="text"
                    name="mobile"
                    placeholder="Enter mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                />
                {isSignup && (
                    <>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="Enter city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
                        />
                    </>
                )}
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition">
                    {isSignup ? "Signup" : "Login"}
                </button>
                <p
                    className="text-center text-sm text-gray-600 cursor-pointer"
                    onClick={() => setIsSignup(!isSignup)}
                >
                    {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
                </p>
            </div>
        </div>
            </Modal>
        )}
    </div>
);
};

export default Page;
