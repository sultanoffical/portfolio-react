import React from 'react'
import AboutImg from '../../assets/7358653-removebg-preview.png'
import {IoArrowForward} from "react-icons/io5"



export const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div className=''>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='md:h-80' src={AboutImg} alt="About Image" />

                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>

                        <span className='w-96'>
                             <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontent Developer</h1>
                             <p className='text-sm md:text-md leading-tight'>Hey, this is my homepage, so I have to say something about myself. </p>
                        </span>
                         
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>

                        <span className='w-96'>
                             <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                             <p className='text-sm md:text-md leading-tight'>Hey, this is my homepage, so I have to say something about myself. </p>
                        </span>
                         
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>

                        <span className='w-96'>
                             <h1 className='text-xl md:text-2xl font-semibold leading-normal'>FullStack Developer</h1>
                             <p className='text-sm md:text-md leading-tight'>Hey, this is my homepage, so I have to say something about myself. </p>
                        </span>
                         
                    </div>
                </ul>

            </div>

        </div>

    </div>
  )
}
