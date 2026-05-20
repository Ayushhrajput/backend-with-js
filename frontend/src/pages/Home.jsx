import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import {logout} from "../services/authservice.js"
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const {user, setUser} = useAuth()
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
    console.log(user)
    if(!user) {
        return (
            <div>Fething user details</div>
        )
    }
    
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 '>
            <div className='max-w-sm flex flex-col  items-start gap-4 bg-white  rounded-lg shadow-2xl mx-4'>
                <div className='w-full  h-25 rounded-lg overflow-hidden  '>
                    <img src={user.coverImage} alt=""  className='w-sm h-full object-cover '/>
                </div>
                <div className='flex justify-center items-top gap-4 px-4'>
                    <div className='w-25 h-25 rounded-full overflow-hidden   '>
                        <img src={user.avatar} alt="" className='w-full h-full object-cover'/>
                    </div>
                    <div className='mt-4'>
                        <h1 className='font-bold'>@{user.username}</h1>
                        <h6>{user.fullName}</h6>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className='px-8 py-3  max-w-sm rounded-lg   bg-linear-to-tl from-red-500 to-red-400 text-white text-bold  mx-4 my-2'
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Home;