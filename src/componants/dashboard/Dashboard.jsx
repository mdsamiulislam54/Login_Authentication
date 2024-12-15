import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authentication_context/Authcontext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Dashboard = () => {
    const { handleLogout, user } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [isImage, setImage] = useState(null); // Use null as initial state

    // Handle image selection
    const handleImages = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Set image URL after loading
            };
            reader.readAsDataURL(file); // Start reading the file
        }
    };

const handldarkMode = () => {
    setShow(!show);
}

useEffect(()=>{
    document.body.style.backgroundColor= show?'#000':'#fff';
},[show])

const texColor = show?'text-white':'text-black'; 

    return (
        <div>
            <div className={`flex justify-between items-center p-2 ${show? 'bg-gray-800 text-white' : 'bg-gray-500 text-gray-800'}`}>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <button onClick={handldarkMode} className='flex justify-between gap-5'>
                 <FaSun size={20} className={show? 'text-gray-300': 'text-yellow-300'}></FaSun>
                    {show? 'Light ': 'Dark'}
                <FaMoon size={20} className={show? 'text-yellow-300': 'text-gray-300'}></FaMoon>
                </button>
            </div>

            <div className='flex'>
                <div className="flex flex-col space-y-6 w-[300px] h-[100vh] bg-gray-200 p-4">
                    {/* Profile Image Display */}
                    <img 
                        className='w-[300px] h-[300px] rounded-full object-cover' 
                        src={isImage || '/default-profile.png'} // Fallback to default if no image selected
                        alt="profile" 
                    />

                    {/* File Input */}
                    <input
                        type="file"
                        accept='image/*'
                        onChange={handleImages}
                        className="mt-4"
                    />

                    <ul className="space-y-4">
                        <li className="list-none"><a href="#" className="hover:text-blue-700">Profile</a></li>
                        <li className="list-none"><a href="#" className="hover:text-blue-700">Settings</a></li>
                        <li className="list-none"><a href="#" className="hover:text-blue-700">Earnings</a></li>
                        <li className="list-none"><a href="#" className="hover:text-blue-700" onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>

                <div className='w-full p-4'>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className={`text-3xl font-bold text-center py-5 ${texColor}`}>Welcome to Dashboard</h1>
                        <h1 className={`${texColor}`}>Email: {user.email}</h1>
                        <h1 className={`${texColor}`}>Password: {user.password}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
