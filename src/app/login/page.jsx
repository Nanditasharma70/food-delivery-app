// const Login = () => {
//     return (
//         <div className="flex flex-col items-center">
//             <div className="w-full">
//                 <input 
//                     type="text" 
//                     placeholder="Enter Username" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-4">
//                 <input 
//                     type="password" 
//                     placeholder="Enter Password" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//                 />
//             </div>
//             <div className="w-full mt-6">
//                 <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
//                     Login
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Login;
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn />;
}
