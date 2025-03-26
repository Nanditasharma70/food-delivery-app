// import { useState } from "react";

// // register.js
// const Register = () => {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [contactNo, setContactNo] = useState('');
//     const [city, setCity] = useState('');
//     const [restaurantName, setRestaurantName] = useState('');
//     const [address, setAddress] = useState('');

//     const handleSignup = async (e) => {
//         // console.log(name, username, email, password, confirmPassword, contactNo, location, restaurantName, address);
//         // Handle the signup logic here (e.g., API call)
//         let result = await fetch("http://localhost:3000/api/restaurant", {
//             method: "POST",
//             body: JSON.stringify({ name, username, email, password, confirmPassword, contactNo, city, restaurantName, address })
//         })
//         result = await result.json();
//         console.log(result);
//         if(result.success){
//            alert("Restaurant registered succesfully") 
//         }

//     }

//     return (
//         <div className="flex flex-col items-center">
//             <div className="w-full">
//                 <input
//                     type="text"
//                     placeholder="Enter Full Name"
//                     value={name}
//                     onChange={(event) => setName(event.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-4">
//                 <input
//                     type="text"
//                     placeholder="Enter User Name"
//                     value={username}
//                     onChange={(event) => setUsername(event.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-4">
//                 <input
//                     type="email"
//                     placeholder="Enter Email"
//                     value={email}
//                     onChange={(event) => setEmail(event.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-4">
//                 <input
//                     type="password"
//                     placeholder="Create Password"
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-4">
//                 <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(event) => setConfirmPassword(event.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-4">
//                 <input
//                     type="text"
//                     placeholder="Enter Contact Number"
//                     value={contactNo}
//                     onChange={(event) => setContactNo(event.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-4">
//                 <input
//                     type="text"
//                     placeholder="Enter City"
//                     value={city}
//                     onChange={(event) => setCity(event.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-4">
//                 <input
//                     type="text"
//                     placeholder="Enter Restaurant Name"
//                     value={restaurantName}
//                     onChange={(event) => setRestaurantName(event.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-4">
//                 <textarea
//                     placeholder="Enter Full Address"
//                     value={address}
//                     onChange={(event) => setAddress(event.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-6">
//                 <button
//                     onClick={handleSignup}
//                     className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 hover:scale-105 transition-transform duration-300"
//                 >
//                     Register
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Register;

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return <SignUp />;
}
