import { useState } from "react"
import { toast } from "react-toastify"
import { AxiosInstance } from "../routes/AxiosInstance"
import {useNavigate} from 'react-router-dom'

const RegisterPage = () => {
    const[formData, setFormData]=useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    let navigate=useNavigate()

    const handleChange=(e)=>{
        let {name,value}=e.target

        // console.log({[name]:value});
        
        setFormData({...formData, [name]:value})
    }

    const validateInputs=(data)=>{
        let {username,email,password,confirmpassword}=data
        if (username.trim() ===""){
            // alert("enter username")
            toast.error("enter username")
            return false
        }
        else if (username.trim().length < 6){
            // alert("username should be atleast 6 character")
            toast.error("username should be atleast 6 character")
            return false;
        }
        else if(email.trim() ===""){
            // alert("Enter email")
            toast.error("Enter email")
            false;
        }
        else if(password.trim().length<8){
            // alert("Password should be at least 8 character")
            toast.error("Password should be at least 8 character")
            return false
        }
        else if(confirmpassword.trim() !== password.trim()){
            // alert("Password mis match")
            toast.error("Password mis match")
            return false
        }
        else{
            // console.log("good to go")
            toast.success("good to go")
            return true;
        }
            
    }

    const register=  async (e)=>{
        e.preventDefault()
        if (!validateInputs(formData)) return;
        // console.log("from Submitted");
        console.log(formData);
        try {
            let response  =  await AxiosInstance.post('/users',formData)
            console.log(response);

            toast.success("SignUp Scucessfully")

            // To Navigate to Login page
            navigate('/login')

            // to clear input filed
            setFormData({
            username:"",
            email:"",
            password:"",
            confirmpassword:""
            })
            
        } catch (error) {
            toast.error("Unable To register !!")
            console.log(error);
            
        }
         
    }

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 mt-17">
        <h1 className="font-bold text-4xl text-center text-black mb-3">Register</h1>
        <form>
            <div className="flex flex-col gap-1 mb-3">
                <label htmlFor="username" className="font-semibold text-sm text-gray-700">Username</label>
                <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" type="text" name='username' id='username' value={formData.username} onChange={handleChange} placeholder="Enter your username" autoComplete="off"/>
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <label htmlFor="email" className="font-semibold text-sm text-gray-700">Email</label>
                <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" type="text" name='email' id='email' value={formData.email} onChange={handleChange} placeholder="Enter your email"  autoComplete="off"/>
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <label htmlFor="password" className="font-semibold text-sm text-gray-700">Password</label>
                <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" type="text" name='password' id='password' value={formData.password} onChange={handleChange} placeholder="Enter your password" autoComplete="off"/>
            </div>
            <div className="flex flex-col gap-1 mb-3">
                <label htmlFor="confirmpassword" className="font-semibold text-sm text-gray-700">Confirm Password</label>
                <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" type="text" name='confirmpassword' id='confirmpassword' value={formData.confirmpassword} onChange={handleChange}   placeholder="Confirm your password" autoComplete="off" />
            </div>
            <div>
                <button onClick={register} className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700 transition">Register</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default RegisterPage