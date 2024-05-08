import React from 'react'
import img from "../assets/img/hero.png"
import Button from "../layouts/Button"

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5'>
        <div className='w-full lg:w-2/4 space-y-4 mt-20'>
            <h1 className='text-5xl font-semibold leading-tight'>Experience Extreme-Level Audios.</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Laudantium nostrum quis aliquam fuga earum impedit 
                 eveniet sit, temporibus neque commodi!
                 </p>
               <Button title="Order Now" />
        </div>
        <div>
            <img src={img} alt="img" />
        </div>
    </div>
  )
}

export default Home