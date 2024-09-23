import React from 'react'
import { Link } from 'react-router-dom'

const BankTransfer = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full p-6 rounded-lg'>
      <div className='mb-6 text-center'>
        <h1 className='text-3xl font-bold mb-2'>Bank Transfer</h1>
        <p className='text-gray-700 mb-4'>Please transfer £90 to the following account:</p>
        <p className='font-mono text-lg mb-2'>Account Number: 12345678</p>
        <p className='font-mono text-lg mb-2'>Sort Code: 12-34-56</p>
        <p className='font-mono text-lg mb-2'>IBAN: GB1234567890123456789012</p>
        <p className='font-mono text-lg mb-4'>BIC: GB1234567890123456</p>
        <p className='text-gray-600 mb-2'>Please use the reference "Invoice #123456" when making the payment.</p>
        <p className='text-gray-600'>Once the payment is confirmed, we will update the status of your invoice.</p>
        <p className='text-gray-600'>Thank you for your prompt payment.</p>
      </div>
      <Link to={'/success'} className='rounded-full py-2 px-4 bg-green-500 text-white text-center w-1/2 hover:bg-green-600 transition duration-200'>Confirm Payment</Link>
    </div>
  )
}

export default BankTransfer

