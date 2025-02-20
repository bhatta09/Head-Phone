import React from 'react'
import Button from "../layouts/Button"

const ProductCard = (props) => {
  return (
    <div className='flex flex-col items-center gap-4 bg-slate-100 lg:w-2/4 w-full p-5 rounded-lg cursor-pointer hover:shadow[rgba(0,_0,_0,_o.24)_opx_3px_8px] transition duration-300 ease-in-out'>
        <img src={props.img} alt="img" />
        <h1>Latest Headphones</h1>
        <h3 className='font-semibold text-3xl'>{props.val}</h3>
        <Button title="Buy Now" />
    </div>
  )
}

export default ProductCard