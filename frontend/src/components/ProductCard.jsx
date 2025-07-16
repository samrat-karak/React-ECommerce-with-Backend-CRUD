import React from 'react'
import { AxiosInstance } from '../routes/AxiosInstance'
import { toast } from 'react-toastify';

const ProductCard = ({product}) => {

    async function addToCart(item) {
        let res =await AxiosInstance.post("/shop/cart/add", { productId: item.id });

        console.log(res);

        if (res.data.success)
            toast.success(res.data.message);
        
    }

  return (
    <section className=" p-4">
                <div className="shadow-lg rounded-lg overflow-hidden w-64">
                  <img
                    src={product.image}
                    alt=""
                    className=" h-64 w-full object-cover object-top block mx-auto"
                  />
                  <div className="p-4">
                    <h1 className="capitalize font-extrabold text-xl">{product.title}</h1>
                    <p className="flex justify-between text-sm capitalize text-gray-600 font-semibold">
                      <span className="">{product.category}</span>
                      <span>{product.brand}</span>
                    </p>
                    <h3 className="flex justify-between font-semibold">
                      <del>Rs.{product.price}</del>
                      <span>Rs.{product.salePrice}</span>
                    </h3>
                    <button className="bg-black text-white w-full rounded py-1 mt-3 cursor-pointer" onClick={()=>{addToCart(product)}}>Add to cart</button>
                  </div>
                </div>
              </section>
  )
}

export default ProductCard