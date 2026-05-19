import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import {logout} from "../services/authservice.js"
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const {setUser} = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await logout()

            console.log(response.message)
            setUser(null)
            navigate("/login")

        } catch (e) {
            throw new Error(e.message)
        }
        
    }
    return (
        <div className='w-full flex items-center justify-center'>

            <button
                onClick={handleLogout}
                className='px-8 py-3 mx-4 max-w-sm rounded-lg mt-4  bg-linear-to-tl from-blue-600 to-pink-400 text-white text-bold  '
            >
                Logout
            </button>
        </div>
    );
}

export default Home;