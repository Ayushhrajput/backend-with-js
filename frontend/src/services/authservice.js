import axios from "axios";


const registerUser = async (formData, avatar, coverImage) => {
    
    const API_URL = import.meta.env.VITE_API_URL

    try {

        const data = new FormData()
        
        data.append("fullName", formData.fullName)
        data.append("username", formData.username)
        data.append("email", formData.email)
        data.append("password", formData.password)
    
        data.append("avatar", avatar)
        
        if(coverImage) data.append("coverImage", coverImage)
     
        const response = await axios.post(
            `${API_URL}api/v1/users/register`,
            data,
            {
                withCredentials: true
            }
        )
        console.log(response)
        return response.data
        
    } catch (e) {
        console.log(e)
        console.log(e.response)
        console.log(e.message)
        throw new Error(e.response?.data?.message || e.message || "something went wrong")
    }
    
}

export {registerUser}