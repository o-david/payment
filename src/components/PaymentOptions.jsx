import React from 'react'
import { Link } from 'react-router-dom'

const PaymentOptions = () => {
    return (
      <div className='flex flex-col items-center w-full p-6  min-h-screen'>
        <h1 className='text-4xl font-bold text-center mb-8'>Select Payment Option</h1>
        <div className='flex text-center justify-center mx-auto sm:w-3/4 flex-wrap gap-y-10 gap-10'>
          <Link to={'/crypto'} className='border border-gray-300 rounded-lg w-2/5 py-6 bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105'>
            <p className='text-xl font-semibold text-gray-800'>Crypto</p>
          </Link>
          <Link to={'/banktransfer'} className='border border-gray-300 rounded-lg w-2/5 py-6 bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105'>
            <p className='text-xl font-semibold text-gray-800'>Bank Transfer</p>
          </Link>
          <Link to={'/cardpayment'} className='border border-gray-300 rounded-lg w-2/5 py-6 bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105'>
            <p className='text-xl font-semibold text-gray-800'>PayPal/Card Payment</p>
          </Link>
        </div>
      </div>
    )
  }

export default PaymentOptions