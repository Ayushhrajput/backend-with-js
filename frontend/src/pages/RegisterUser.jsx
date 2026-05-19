import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authservice.js';
import { useAuth } from '../context/AuthContext.jsx';

function RegisterUser() {
    const navigate = useNavigate()
    const {setUser} = useAuth()

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")

    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: ""
    })
    const [avatar, setAvatar] = useState(null)
    const [coverImage, setCoverImage] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await registerUser(
                formData,
                avatar,
                coverImage
            )
            setUser(response.data)
            localStorage.setItem("user", JSON.stringify(response.data))
            navigate('/home')
            setSuccess(response.message)
            setError("")
        } catch (err) {
            setError(err.message)
            setSuccess("")
        }
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center px-4">

            <div className="w-full max-w-md h-min shadow-2xl rounded-2xl bg-white p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Create Account
                </h1>

                <p className="text-gray-500 text-center mb-8">
                    Register to continue
                </p>
                <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
                    <input 
                        className="w-full bg-gray-100   rounded-xl px-4 py-3 outline-none  "
                        type="text"
                        name='fullName'
                        placeholder='Full Name'
                        onChange={handleChange}/>
                    <input 
                        className="w-full bg-gray-100   rounded-xl px-4 py-3 outline-none "
                        type="text" 
                        name='username' 
                        placeholder='Username'
                        onChange={handleChange}/>
                    <input 
                        className="w-full bg-gray-100   rounded-xl px-4 py-3 outline-none " 
                        type="text" 
                        name='email' 
                        placeholder='Email'
                        onChange={handleChange}/>
                    <input 
                        className="w-full bg-gray-100   rounded-xl px-4 py-3 outline-none " 
                        type="text" 
                        name='password'
                        placeholder='Password' 
                        onChange={handleChange}/>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">
                            Avatar
                        </label>

                        <input
                            type="file"
                            onChange={(e) => setAvatar(e.target.files[0])}
                            className="
                                w-full
                                text-sm
                                text-gray-500
                                
                                rounded-xl
                                cursor-pointer
                                bg-gray-50
                                p-2
                                file:mr-4
                                file:py-2
                                file:px-4
                                file:rounded-lg
                                file:border-0
                                file:text-sm
                                file:font-semibold
                                file:bg-black
                                file:text-white
                                hover:file:bg-gray-800
                            "
                        />
                    </div>

                    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">
                            Cover Image
                        </label>

                        <input
                            type="file"
                            onChange={(e) => setCoverImage(e.target.files[0])}
                            className="
                                w-full
                                text-sm
                                text-gray-500
                                
                                rounded-xl
                                cursor-pointer
                                bg-gray-50
                                p-2
                                file:mr-4
                                file:py-2
                                file:px-4
                                file:rounded-lg
                                file:border-0
                                file:text-sm
                                file:font-semibold
                                file:bg-black
                                file:text-white
                                hover:file:bg-gray-800
                            "
                        />
                    </div>
                    <button 
                        className="
                            w-full
                            bg-black
                            hover:bg-gray-800
                            text-white
                            font-semibold
                            py-3
                            rounded-xl
                            transition
                            duration-200
                            shadow-lg
                        "
                        type="submit">Register</button>
                        
                        {error && 
                        (<p className='text-red-500 text-sm mt-2'>
                            {error}
                        </p>)
                        }
                        {success && 
                        <p className='text-sm mt-2'>
                            {success}
                        </p>
                        }
                        <div className='flex gap-2 mt-4 text-center text-sm'>
                            <p className=''>Have an account</p>
                            <Link
                                to="/login"
                                className='italic hover:underline text-gray-600'
                            >
                                Login
                            </Link>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterUser;