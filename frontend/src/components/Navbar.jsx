import React, { Children, useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Avatar from '@mui/material/Avatar'
import CartDrawer from './CartDrawer'
import { GlobalAuthContext } from '../authContext/AuthContext'
import { AxiosInstance } from '../routes/AxiosInstance'

const Navbar = () => {

  const [menuToggle,setMenuToggle]=useState(false)

  const {loggedInUser,setloggedInUser,authUser}=useContext(GlobalAuthContext)
  console.log(loggedInUser);
  
  console.log(authUser);
  

  const toggleMenu=()=>{
    setMenuToggle(!menuToggle)
  }

   const categories=[
      {
        id:"home",
        title:"Home",
        path:"/home"
      },
      {
        id:"products",
        title:"Products",
        path:"/products"
      },
      {
        id:"men",
        title:"Men",
      },
      {
        id:"women",
        title:"Women",
      },
      {
        id:"kids",
        title:"Kids",
      },
      {
        id:"footware",
        title:"Footware",
      },
      {
        id:"accessories",
        title:"Accessories",
      },
      {
        id:"search",
        title:"Search",
      }
    ]


  // let accesstoken=localStorage.getItem('accesstoken')

    let navigate=useNavigate()

  const handelLogout=  async ()=>{
    // localStorage.removeItem('accesstoken')
    try {
      
      
    let res=await AxiosInstance.post("/user/logout")

    console.log(res);
    if (res.data.success) {
    toast.success(res.data)
    setloggedInUser(false)
    navigate("/login")
    }

    } catch (error) {
      
      console.log(error);
      toast.error("logout failed")

    }
  }

  function stringAvatar(name) {
    let word=name.split(" ")
      if (word.length >= 2) {
      return{
        children:`${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
        }
      }
    return {
        children: `${name.split(" ")[0][0]}`
    }
  }

  return (
    <nav className="absolute top-0 h-[70px] w-full bg-white flex items-center justify-between px-6 shadow z-50">
      <div className="font-extrabold text-3xl text-gray-600  drop-shadow-lg select-none">
        MyApp
      </div>

      {loggedInUser ?(
          <>
            <section className="flex gap-2">
              {categories.map((category) => ( // Implicit return using ()    or explicit return ---->   { return (  )}
                <Link key={category.id} to={category.path? category.path: '/home'}>
                  <div className="p-4 font-semibold">
                  {category.title}
                </div>
                </Link>
              ))}
            </section>
          </>
          ): null}

        <aside className="flex gap-4 font-semibold">
        
        {loggedInUser ? (
          <>
            <div>
              <CartDrawer/>
            </div>

            {/* <Avatar sx={{bgcolor:'black'}}>U</Avatar> */}
            <div className='relative' onClick={toggleMenu}>
              <Avatar sx={{bgcolor:'black'}} className='uppercase' {...stringAvatar(authUser.userName)}/>

              {menuToggle? <>
              <div className='absolute min-w-40 p-2 right-0 bg-white shadow-lg rounded-lg top-12 z-50 border border-gray-200'>
                <ul className='flex flex-col gap-2'>
                  <li onClick={handelLogout} className='hover:bg-gray-100 px-2 py-1 cursor-pointer'>
                    Logout
                  </li>
                </ul>
              </div>
              </>: null}
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-100 transition font-bold border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Login
              </button>
            </Link>

            <Link to={"/"}>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-bold border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
                Signup
              </button>
            </Link>
          </>
        )}
      </aside>
    </nav>
  );
}

export default Navbar