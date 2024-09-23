const CardPayment = () => {
    return (
      <div className='flex flex-col justify-center items-center h-full p-6 rounded-lg'>
        <div className='mb-6 text-center'>
          <h1 className='text-3xl font-bold mb-2'>Card Payment</h1>
          <p className='text-gray-700 mb-4'>Please enter your card details below:</p>
        </div>
        <div className='flex flex-col w-full'>
          <input className='mb-4 p-2 border border-gray-300 rounded' type="text" placeholder="Card Number" />
          <input className='mb-4 p-2 border border-gray-300 rounded' type="text" placeholder="Expiry Date" />
          <input className='mb-4 p-2 border border-gray-300 rounded' type="text" placeholder="CVV" />
        </div>
        <button className='bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200' type="submit">Submit Payment</button>
      </div>
    )
  }

export default CardPayment