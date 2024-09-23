import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col justify-between h-full items-center'>
        <div className='h-3/4 flex flex-col justify-between'>
            <h1 className='text-2xl'>Hi Jane smith </h1>
            <p className='text-xl'>Amount to pay</p>
            <p className='text-6xl'>£90</p>

        </div>
        <Link to={'/paymentoptions'} className='rounded-full py-2 bg-green-500 text-center w-1/2'>Make Payment</Link>
    </div>
  )
}

export default Hero