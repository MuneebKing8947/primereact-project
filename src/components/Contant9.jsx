import React from 'react'
import loog5 from '../Assets/T.png'
const Contant9 = () => {
  return (
    <div className='logoo container d-flex justify-content-around mt-5 mb-5'>
        <div className='logo1 p-5'>
        <div className='logo2 d-flex '>
        <img src={loog5} alt="" />
      <h6 className='mx-2 mt-1'>Trafalgar</h6>
      </div>
      <p>Trafalgar provides progressive, and affordable<br/> healthcare, accessible on mobile and online<br/> for everyone</p>
      <p className='pt-5'>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
      <div className='logo3 p-5'>
        <h6>Company</h6>
        <p>About</p>
        <p>Testimonials</p>
        <p>Find a doctor</p>
        <p>Apps</p>
      </div>
      <div className='logo3 p-5'>
        <h6>Region</h6>
        <p>Indonesia</p>
        <p>Singapore</p>
        <p>Hongkong</p>
        <p>Canada</p>
      </div>
      <div className='logo3 p-5'>
        <h6>Help</h6>
        <p>Help center</p>
        <p>Contact support</p>
        <p>Instructions</p>
        <p>How it works</p>
      </div>
    </div>
  )
}

export default Contant9
