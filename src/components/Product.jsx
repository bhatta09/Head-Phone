import React from 'react'
import ProductCard from '../layouts/ProductCard'
import img1 from "../assets/img/product1.png"
import img2 from "../assets/img/product2.png"
import img3 from "../assets/img/product3.png"
import img4 from "../assets/img/product4.png"

const Product = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='text-4xl font-semibold mt-24 lg:mt-14 text-center lg:text-start'>Our Products</h1>
        <p className='mt-2 text-center lg:text-start'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nihil, ex.
            </p>
            <div className='flex flex-col lg:flex-row gap-4 mt-4'>
                <ProductCard img={img1} val="Rs5000"/>
                <ProductCard img={img2} val="Rs4000"/>
                <ProductCard img={img3} val="Rs4500"/>
                <ProductCard img={img4} val="Rs3000"/>
            </div>
    </div>
  )
}

export default Product