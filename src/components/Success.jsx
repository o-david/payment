import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
      <div className='flex flex-col justify-center items-center h-screen p-6 '>
          <div className='flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
              <h1 className='text-4xl font-bold text-green-600 mb-4'>SUCCESS</h1>
              <p className='text-xl text-gray-700 mb-2'>Your payment has been processed</p>
              <p className='text-5xl font-semibold text-gray-800 mb-6'>£90</p>
              <Link to={'/transaction-details'} className='rounded-full py-3 px-6 bg-green-500 text-white text-center w-full hover:bg-green-600 transition duration-200'>View Transaction Details</Link>
          </div>
      </div>
    )
  }

export default Success