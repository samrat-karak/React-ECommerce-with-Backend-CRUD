import React, { useContext } from 'react'
import { PiShirtFoldedLight } from "react-icons/pi";
import { GiRunningShoe } from "react-icons/gi";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SiAdidas } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import { SiZara } from "react-icons/si";
import { SiHandm } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi";
import { FaChildReaching } from "react-icons/fa6";
import ProductCard from './ProductCard';
import { AllProductsContext } from '../productContext/ProductsContext';


const Home = () => {

  let{allProducts}=useContext(AllProductsContext)

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

  const items = [
    <div className="item h-[70vh]" data-value="1">
      <img src="/assets/image.png" alt="" className='h-full w-full object-center object-cover'/>

        <div className='absolute top-[15vh] left-20'>
          <h1 className='text-5xl font-light mb-4'>Lorem ipsum dolor sit amet.</h1>
          <h2 className='text-4xl font-bold mb-10'>Lorem ipsum dolor sit.</h2>
          <button className='bg-black text-white px-4 py-2 rounded'>View Products</button>
        </div>
    </div>,
    <div className="item h-[70vh]" data-value="2">
      <img src="/assets/image1.jpg" alt="" className='h-full w-full object-center object-cover'/>

        <div className='absolute top-[15vh] left-20'>
          <h1 className='text-5xl font-light mb-4'>Lorem ipsum dolor sit amet.</h1>
          <h2 className='text-4xl font-bold mb-10'>Lorem ipsum dolor sit.</h2>
          <button className='bg-black text-white px-4 py-2 rounded'>View Products</button>
        </div>
    </div>,
    <div className="item h-[70vh]" data-value="3">
      <img src="/assets/image2.jpg" alt="" className='h-150vh w-full object-center object-fit'/>

        <div className='absolute top-[15vh] left-20'>
          <h1 className='text-5xl font-light mb-4 text-white'>Lorem ipsum dolor sit amet.</h1>
          <h2 className='text-4xl font-bold mb-10'>Lorem ipsum dolor sit.</h2>
          <button className='bg-black text-white px-4 py-2 rounded'>View Products</button>
        </div>
    </div>,
    <div className="item h-[70vh]" data-value="4">
      <img src="/assets/image3.jpg" alt="" className='h-full w-full object-center object-cover'/>

        <div className='absolute top-[15vh] left-20'>
          <h1 className='text-5xl font-light mb-4'>Lorem ipsum dolor sit amet.</h1>
          <h2 className='text-4xl font-bold mb-10'>Lorem ipsum dolor sit.</h2>
          <button className='bg-black text-white px-4 py-2 rounded'>View Products</button>
        </div>
    </div>,
    <div className="item h-[70vh]" data-value="5">
      <img src="/assets/image4.jpg" alt="" className='h-full w-full object-center object-cover'/>

        <div className='absolute top-[15vh] left-20'>
          <h1 className='text-5xl font-light mb-4'>Lorem ipsum dolor sit amet.</h1>
          <h2 className='text-4xl font-bold mb-10'>Lorem ipsum dolor sit.</h2>
          <button className='bg-black text-white px-4 py-2 rounded'>View Products</button>
        </div>
    </div>
];


  return (
    <div className='mt-[70px] w-full bg-gray-50'>

      {/* <header className='h-[70vh] w-full relative'>
        <img src="/assets/image.png" alt="" className='h-full w-full object-center object-cover'/>

        <div className='absolute top-[15vh] left-20'>
          <h1 className='text-5xl font-light mb-4'>Lorem ipsum dolor sit amet.</h1>
          <h2 className='text-4xl font-bold mb-10'>Lorem ipsum dolor sit.</h2>
          <button className='bg-black text-white px-4 py-2 rounded'>View Products</button>
        </div>
      </header> */}

       <header className='h-[70vh] w-full'>
        <AliceCarousel
        autoPlay
        // autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="slide"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
       </header>

      <section className='py-10'>
        <header className='p-10'>
          <h1 className='font-extrabold  text-center text-3xl'>Shop by category</h1>
        </header>

        <article  className='flex items-center justify-evenly'>

          {categories.map((category)=>{
            return(
              <div key={category.id} className='p-3 rounded bg-white shadow-xl border border-gray-200'>
                <figure className='text-6xl'>{category.icon}</figure>
                <h3 className='font-bold text-center pt-2'>{category.title}</h3>
              </div>
            )
          })}

        </article>

        <header className='pt-30 pb-10'>
          <h1 className='font-extrabold  text-center text-3xl'>Shop by Brands</h1>
        </header>

         <article  className='flex items-center justify-evenly'>

          {brands.map((brand)=>{
            return(
              <div key={brand.id} className='p-3 rounded bg-white shadow-xl border border-gray-200'>
                <figure className='text-6xl'>{brand.icon}</figure>
                <h3 className='font-bold text-center pt-2'>{brand.brandName}</h3>
              </div>
            )
          })}

        </article>
        
        <header className='pt-30 pb-10'>
          <h1 className='font-extrabold  text-center text-3xl'>Featured products</h1>
        </header>

        <article className="grid grid-cols-4 justify-items-center">
          {allProducts.map((product, idx) => {
            return (
              <ProductCard key={idx} product={product} />
            );
          })}
        </article>

      </section>

    </div>
  )
}

export default Home