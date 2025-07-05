import React from 'react'
import Divider from '@mui/material/Divider';


const Product = () => {
    
    const categories=[
    {
      id:"men",
      title:"Men",
      icon:<PiShirtFoldedLight />
    },
    {
      id:"women",
      title:"Women",
      icon:<GiLargeDress />
    },
    {
      id:"kids",
      title:"Kids",
      icon:<FaChildReaching />
    },
    {
      id:"footware",
      title:"Footware",
      icon:<GiRunningShoe />
    },
    {
      id:"accessories",
      title:"Accessories",
      icon:<FaTools />
    }
  ]

  const brands=[
      {
        id:"nike",
        brandName:"Nike",
        icon: <SiNike />
      },
      {
        id:"h&m",
        brandName:"H&M",
        icon:<SiHandm />
      },
      {
        id:"adidas",
        brandName:"Adidas",
        icon:<SiAdidas />
      },
      {
        id:"zara",
        brandName:"Zara",
        icon:<SiZara />
      },
      {
        id:"puma",
        brandName:"Puma",
        icon: <SiPuma/>
      }
    ]



  return (
    <div className='mt-[70px] flex'>
        <aside className='h-screen w-[20%] border p-3'>
            <header className='p-5'>
                <h1 className='text-2xl font-bold'>Filter</h1>
            </header>
            <Divider/>

            <section className='p-5'>
                <h1 className='text-2xl font-bold'>Category</h1>
            </section>
        </aside>
    </div>
  )
}

export default Product