import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import './App.css'
import Hero from './components/Hero'
import PaymentOptions from './components/PaymentOptions'
import BankTransfer from './components/BankTransfer'
import Success from './components/Success'
import Pending from './components/Pending'
import Crypto from './components/Crypto'
import CardPayment from './components/CardPayment'
function App() {
  const [popup, setPopup] = useState("")

  return (
    <div className='bg-black h-screen flex'>
      <div className='bg-white w-1/4 h-full'>

      </div>
      <div className='bg-gray-300 w-3/4 h-full py-6'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/paymentoptions' element={<PaymentOptions/>}/>
        <Route path='/banktransfer' element={<BankTransfer/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/pending' element={<Pending/>}/>
        <Route path='/crypto' element={<Crypto/>}/>
        <Route path='/cardpayment' element={<CardPayment/>}/>
      </Routes>
      </BrowserRouter>
      </div>

    </div>   
    
  )
}

export default App
