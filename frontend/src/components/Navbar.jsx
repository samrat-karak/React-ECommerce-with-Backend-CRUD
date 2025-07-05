import React, { Children, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Avatar from '@mui/material/Avatar'
import CartDrawer from './CartDrawer'

const Navbar = () => {

  const [menuToggle,setMenuToggle]=useState(false)

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


  let accesstoken=localStorage.getItem('accesstoken')

    let navigate=useNavigate()

  const handelLogout=()=>{
    localStorage.removeItem('accesstoken')
    toast.success("logged out")
    navigate("/login")
  }

  function stringAvatar(name) {
    return{
      children:`${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
    }
  }



  return (
    <nav className="absolute top-0 h-[70px] w-full bg-white flex items-center justify-between px-6 shadow z-50">
      <div className="font-extrabold text-3xl text-gray-600  drop-shadow-lg select-none">
        MyApp
      </div>

      {accesstoken ?(
          <>
            <section className="flex gap-2">
              {categories.map((category) => ( // Implicit return using ()    or explicit return ---->   { return (  )}
                <Link to={category.path? category.path: '/home'}>
                  <div key={category.id} className="p-4 font-semibold">
                  {category.title}
                </div>
                </Link>
              ))}
            </section>
          </>
          ): null}

        <aside className="flex gap-4 font-semibold">
        
        {accesstoken ? (
          <>
            <button>
              <CartDrawer/>
            </button>

            {/* <Avatar sx={{bgcolor:'black'}}>U</Avatar> */}
            <div className='relative' onClick={toggleMenu}>
              <Avatar sx={{bgcolor:'black'}} {...stringAvatar("Smrat Karak")}/>

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