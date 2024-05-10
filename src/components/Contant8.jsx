import React from 'react'
import { Button } from 'primereact/button';
import  loog1 from '../Assets/image 2.png'
import  loog2 from '../Assets/image 3.png'
import  loog3 from '../Assets/image 4.png'
import  loog4 from '../Assets/arrow.png'
import { Card } from 'primereact/card'

const Contant8 = () => {
  return (
    <div className='container mt-5'>
      <div className='mt-5 text-center'>
      <h2>Check out our latest article</h2>
      <hr className='hr' />
      </div>
      <div className=" d-flex justify-content-around mt-5">
        <Card className="card1">
          <img className='img-fluid' src={loog1} alt="" />
          <h5>Disease detection, check<br/> up in the laboratory</h5>
          <p>In this case, the role of the health<br/> laboratory is very important to do<br/> a disease detection...</p>
          <div className='khan d-flex'><p>Read More</p><img src={loog4} alt="" /></div>
        </Card>
        <Card className="card1">
        <img className='img-fluid' src={loog2} alt="" />
          <h5>Herbal medicines that are<br/> safe for consumption</h5>
        <p>Herbal medicine is very widely used<br/> at this time because of its very good<br/> for your health...</p>
        <div className='khan d-flex'><p>Read More</p><img src={loog4} alt="" /></div>
        </Card>
        <Card className="card1">
        <img className='img-fluid' src={loog3} alt="" />
          <h5>Natural care for healthy<br/> facial skin</h5>
        <p>A healthy lifestyle should start from<br/> now and also for your skin health.<br/> There are some...</p>
        <div className='khan d-flex'><p>Read More</p><img src={loog4} alt="" /></div>
        </Card>
    </div>
     <div className='head4 text-center mt-5'><Button className=' btn btn-outline-primary justify-content-center'  label="View All" /></div>
    </div>
  )
}

export default Contant8
