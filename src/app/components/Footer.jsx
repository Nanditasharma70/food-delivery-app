"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-r from-gray-500 to-black text-white py-8 overflow-hidden">
            {/* Footer Shape */}
            <div className="absolute top-0 left-0  transform rotate-3 animate-wave">
                <img src="images/bg-shape.png" alt="bg-shape" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Footer Top Section */}
                <div className="flex justify-between md:flex-row flex-col">
                    
                    {/* Social Media Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-orange-400 hover:scale-105 transition"><FaFacebookF size={24} /></a>
                            <a href="#" className="hover:text-orange-400 hover:scale-105 transition"><FaTwitter size={24} /></a>
                            <a href="#" className="hover:text-orange-400 hover:scale-105 transition"><FaInstagram size={24} /></a>
                            <a href="#" className="hover:text-orange-400 hover:scale-105 transition"><FaLinkedinIn size={24} /></a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-orange-400 hover:scale-105 transition">Home</Link></li>
                            <li><Link href="/menu" className="hover:text-orange-400 hover:scale-105 transition">Menu</Link></li>
                            <li><Link href="/about" className="hover:text-orange-400 hover:scale-105 transition">About</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-400 hover:scale-105 transition">Contact</Link></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Contact Us</h3>
                        <ul>
                            <li>Email: <a href="mailto:info@tastybites.com" className="hover:text-orange-400 transition">info@tastybites.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="hover:text-orange-400 transition">+123 456 7890</a></li>
                            <li>Address: 123 Food Street, City, Country</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom Section */}
                <div className="text-center mt-8 border-t border-gray-600 pt-8">
                    <p>&copy; {new Date().getFullYear()} Tasty Bites. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
