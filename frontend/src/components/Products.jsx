import Divider from '@mui/material/Divider'
import React from 'react'

const Products = () => {

    const sidebarFilter={
    category:[
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
           }
      ],
    brand:[
          {
            id:"nike",
            brandName:"Nike",
          },
          {
            id:"h&m",
            brandName:"H&M",
            },
          {
            id:"adidas",
            brandName:"Adidas",
            },
          {
            id:"zara",
            brandName:"Zara",
            },
          {
            id:"puma",
            brandName:"Puma",
            },
            {
                id: "levis",
                brandName: "Levi's",
            }
        ]
  }

  const sampleProducts = [
    {
      image: "/assets/shirt.png",
      title: "cotton casual shirt",
      description: "comfortable and breathable cotton casual shirt for daily wear",
      category: "clothing",
      brand: "united colors",
      price: 999,
      salePrice: 799,
      totalStock: 50,
      averageReview: 4.2,
    },
    {
      image: "/assets/laptop.png",
      title: "hp pavilion laptop",
      description: "powerful hp laptop with i5 processor and 8GB RAM for multitasking",
      category: "electronics",
      brand: "hp",
      price: 58999,
      salePrice: 54999,
      totalStock: 20,
      averageReview: 4.5,
    },
    {
      image: "/assets/samsungS21.png",
      title: "samsung galaxy s21",
      description: "android smartphone with dynamic AMOLED display and high-end camera",
      category: "mobiles",
      brand: "samsung",
      price: 69999,
      salePrice: 64999,
      totalStock: 35,
      averageReview: 4.6,
    },
    {
      image: "/assets/nikeShoes.png",
      title: "nike running shoes",
      description: "lightweight running shoes for men with extra grip and durability",
      category: "footwear",
      brand: "nike",
      price: 4999,
      salePrice: 3999,
      totalStock: 75,
      averageReview: 4.3,
    },
    {
      image: "/assets/fossilWatch.png",
      title: "fossil analog watch",
      description: "premium analog wristwatch with leather strap and metal case",
      category: "accessories",
      brand: "fossil",
      price: 10999,
      salePrice: 8999,
      totalStock: 15,
      averageReview: 4.0,
    },
    {
      image: "/assets/philipsMixer.png",
      title: "philips mixer grinder",
      description: "750-watt powerful mixer grinder for daily kitchen use",
      category: "home appliances",
      brand: "philips",
      price: 3899,
      salePrice: 3499,
      totalStock: 30,
      averageReview: 4.1,
    },
    {
      image: "/assets/atomicHabitsBook.png",
      title: "atomic habits book",
      description: "bestseller book on building habits for long-term success",
      category: "books",
      brand: "penguin",
      price: 499,
      salePrice: 399,
      totalStock: 200,
      averageReview: 4.8,
    },
    {
      image: "/assets/woodenTable.jpg",
      title: "wooden study table",
      description: "compact wooden study table with drawer and open shelf",
      category: "furniture",
      brand: "urban ladder",
      price: 7999,
      salePrice: 7499,
      totalStock: 10,
      averageReview: 3.9,
    },
    {
      image: "/assets/boatAirpod.png",
      title: "boat airdopes 441",
      description: "wireless bluetooth earbuds with immersive sound and long battery",
      category: "audio",
      brand: "boat",
      price: 2999,
      salePrice: 2499,
      totalStock: 60,
      averageReview: 4.4,
    },
    {
      image: "/assets/helmet.png",
      title: "vega full face helmet",
      description: "strong and stylish full face helmet for two-wheeler riders",
      category: "safety",
      brand: "vega",
      price: 1599,
      salePrice: 1399,
      totalStock: 40,
      averageReview: 4.1,
    }
  ]


  return (
    <div className='mt-[70px] flex'>
        <aside className='bg-white min-h-screen w-[20%] p-3'>
            <header className='p-5'>
                <h1 className='text-2xl font-bold'>Filters</h1>
            </header>
            
            <Divider/>

            <section className='p-5'>
                <h1 className='text-2xl font-bold'>Category</h1>

                <ul className='py-4 select-none'>
                    {sidebarFilter.category.map((ele)=>{
                        return(
                            <li className='flex items-center font-semibold text-lg gap-2'>
                                <input type="radio" name='category' id={ele.id} />
                                <label htmlFor={ele.id}>{ele.title}</label>
                            </li>
                        )
                    })}
                </ul>
            </section>

            <Divider/>

            <section className='p-5'>
                <h1 className='text-2xl font-bold'>Brands</h1>

                <ul className='py-4 select-none'>
                    {sidebarFilter.brand.map((ele)=>{
                        return(
                            <li className='flex items-center font-semibold text-lg gap-2'>
                                <input type="radio" name='brand' id={ele.id} />
                                <label htmlFor={ele.id}>{ele.brandName}</label>
                            </li>
                        )
                    })}
                </ul>
            </section>

        </aside>

        <main className='min-h-screen w-[80%] p-3'>
        <header className='p-5 flex justify-between  bg-white rounded-lg shadow'>
            <h1 className='text-2xl font-bold'>All Products</h1>

            <div className='flex items-center gap-4'>
                <span>4 Products</span>
                <select name='sort' id='sort' className='p-2 shadow-md rounded outline-0 bg-black text-white cursor-pointer min-w-[150px]'>
                    <option value="" disabled selected  className="bg-gray-800 text-gray-300">--Sort--</option>
                    <option value="high" className="bg-black text-white">High to Low</option>
                    <option  value="low" className="bg-black text-white">Low to High</option>
                </select>

            </div>
        </header>

            <article className='p-5 grid grid-cols-4 justify-items-center'>
                {sampleProducts.map((product,idx)=>{
                    return(
                        <section key={idx} className='p-4'>
                            <div className='shadow-lg rounded-lg overflow-hidden w-64'>
                                <img src={product.image} alt="" className='h-64 w-full object-cover block mx-auto'/>
                                <div className='p-4'>
                                    <h1 className='capitalize font-extrabold text-xl'>{product.title}</h1>
                                    <p className='flex justify-between text-sm capitalize text-gray-600 font-semibold'>
                                        <span>{product.category}</span>
                                        <span>{product.brand}</span>
                                    </p>
                                    <h3 className='flex justify-between font-semibold'>
                                        <del>&#8377;{product.price}</del>
                                        <span>&#8377;{product.salePrice}</span>
                                    </h3>
                                    <button className='bg-black text-white w-full rounded py-1 mt-3 cursor-pointer'>Add to cart</button>
                                </div>
                            </div>

                        </section>
                    )
                })}
            </article>

        </main>

    </div>
  )
}

export default Products