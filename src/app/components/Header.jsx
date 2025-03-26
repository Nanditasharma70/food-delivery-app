"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartNumber = 5; // Example cart count
    const { user } = useUser(); // Get user details

    return (
        <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-xl">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-orange-800 text-3xl font-bold tracking-wide">
                    <img src="logo/logo.png" alt="logo" className="w-28" />
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 text-orange-600 font-semibold">
                    <Link href="/menu" className="hover:text-orange-800 transition">Menu</Link>
                    <Link href="/restaurant" className="hover:text-orange-800 transition">Add Restaurant</Link>
                    <Link href="/deliverypartner" className="hover:text-orange-800 transition">Delivery Partner</Link>
                </nav>

                {/* Authentication + Cart */}
                <div className="hidden md:flex items-center space-x-4">
                    <SignedOut>
                        <SignInButton className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition" />
                        <SignUpButton className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition" />
                    </SignedOut>

                    <SignedIn>
                        <div className="flex items-center gap-3">
                            {/* Show user name */}
                            {user && <span className="text-gray-700 font-medium">{user.fullName || user.primaryEmailAddress}</span>}
                            {/* User Profile */}
                            <UserButton />
                        </div>
                    </SignedIn>

                    {/* Cart Icon */}
                    <Link href={cartNumber ? "/cart" : "#"} className="text-2xl text-orange-600 transition">
                        <FaCartPlus />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-orange-800 text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-gray-300 text-orange-600 text-center py-4 space-y-4">
                    <Link href="/menu" className="block py-2">Menu</Link>
                    <Link href="/restaurant" className="block py-2">Add Restaurant</Link>
                    <Link href="/deliverypartner" className="block py-2">Delivery Partner</Link>

                    <SignedOut>
                        <SignInButton className="block py-2 bg-orange-500 text-white rounded-lg mx-6" />
                        <SignUpButton className="block py-2 bg-orange-500 text-white rounded-lg mx-6" />
                    </SignedOut>

                    <SignedIn>
                        <div className="block py-2 text-gray-700 font-medium">{user?.fullName || user?.primaryEmailAddress}</div>
                        <div className="flex justify-center"><UserButton /></div>
                    </SignedIn>

                    {/* Cart Icon */}
                    <Link href={cartNumber ? "/cart" : "#"} className="block py-2 flex justify-center items-center gap-2">
                        <FaCartPlus className="text-xl" />
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
