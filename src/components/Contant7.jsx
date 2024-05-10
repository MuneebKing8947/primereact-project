import React from 'react'
import logo8 from '../Assets/Group 5.png'
import logo9 from '../Assets/arrow nav.png'
const Contant7 = () => {
  return (
    <>
   <div className=' king container bg-primary text-white mt-5  p-5 text-center'>
      <h1>What our customer are saying</h1>
      <hr className='hr' />
      <div className='container d-flex justify-content-around'>
        <img src={logo8} alt="" />
        <div className='mt-5'>
            <h5>Edward Newgate</h5>
            <p>Founder Circle</p>
        </div>
        <p className='mt-3'>“Our dedicated patient engagement app and<br/> web portal allow you to access information<br/> instantaneously (no tedeous form, long calls,<br/> or administrative hassle) and securely”</p>
      </div>
    </div>
   <div className='mt-5 text-center'><img src={logo9} alt="" /></div> 
   </>
  )
}

export default Contant7
