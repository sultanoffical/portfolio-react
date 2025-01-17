import React from 'react'
import AvatarImg from '../../assets/7358602-removebg-preview.png'
import TextChange from '../TextChange'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:2/4 md:pt-10 '>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
                <TextChange />
            </h1>
            <p className='text-sm md:text-2xl tracking-tight p-5'>
            Hey, this is my homepage, so I have to say something about myself. 
            </p>
            <button className='mt-5 md:md-10 text-white py-2 px-2 p-10 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]
            '>Contact Me
            </button>
        </div>
        <div> <img className=' ' src={AvatarImg} alt="" /></div>

     </div>
  )
}

export default Home