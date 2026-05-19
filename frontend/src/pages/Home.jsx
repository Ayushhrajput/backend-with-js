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

            console.log(response.data)

            localStorage.removeItem("user")
            setUser(null)
            navigate("/login")

        } catch (e) {
            throw new Error(e.message)
        }
        
    }
    return (
        <div>

            <button
                onClick={handleLogout}
                className='px-4 py-3 w-full rounded-lg mt-4  bg-linear-to-tr from-blue-600 to-pink-400 text-white text-bold  hover:bg-linear-to-tr hover:from-blue-400 hover:to-pink-600 transition duration-200 '
            >
                Logout
            </button>
        </div>
    );
}

export default Home;