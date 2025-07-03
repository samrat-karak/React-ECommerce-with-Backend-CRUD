import { useState } from "react"
import { useApi } from "../utilities/utilities"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
    const[formData, setFormData]=useState({
        email:"",
        password:"",
    })

    const navigate=useNavigate()

    let allUsers=useApi('/users')
    console.log(allUsers);

    const handleChange=(e)=>{
        let {name,value}=e.target

        // console.log({[name]:value});
        
        setFormData({...formData, [name]:value})
    }

    const Login=(e)=>{
        e.preventDefault()
        console.log("from login");
        console.log(formData);

        let authUser=allUsers.find((singleUser)=>{
            return singleUser.email===formData.email && singleUser.password===formData.password 
        })

        console.log(authUser);

        if (authUser) {

            // toast Message
            toast.success("Login successful")

            // navigate to Home.jsx
            navigate('/home')

            // store token in local storage
            localStorage.setItem("accesstoken",Date.now())
        }
        else{
            toast.error("Invalid Credentials")
        }
         
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="font-bold text-4xl text-center text-blue-700 mb-4">Login</h1>
        <form>
            <div className="flex flex-col gap-1 mb-5">
                <label htmlFor="email" className="font-semibold text-sm text-gray-700">Email</label>
                <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" type="text" name='email' id='email' value={formData.email} onChange={handleChange}  placeholder="Enter your email" autoComplete="off"/>
            </div>
            <div className="flex flex-col gap-1 mb-7">
                <label htmlFor="password" className="font-semibold text-sm text-gray-700">Password</label>
                <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" type="text" name='password' id='password' value={formData.password} onChange={handleChange}  placeholder="Enter your password" autoComplete="off"/>
            </div>
            <div>
                <button onClick={Login} className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700 transition">Login</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default LoginPage