import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '../App.css'
import logo2 from '../Assets/Group.png'
import logo3 from '../Assets/Frame.png'
import logo4 from '../Assets/Frame1.png'
import logo5 from '../Assets/Frame2.png'
import logo6 from '../Assets/Frame3.png'
import logo7 from '../Assets/Group1.png'
const Contant4 = () => {
  return (
    <>
     <div className=" d-flex justify-content-around mt-5">
        <Card className="card">
          <img src={logo2} alt="" />
          <h2>Search doctor</h2>
          <p>Choose your doctor from thousands<br/> of specialist, general, and trusted<br/> hospitals</p>
        </Card>
        <Card className="card">
        <img src={logo3} alt="" />
          <h2>Search doctor</h2>
        <p>Choose your doctor from thousands<br/> of specialist, general, and trusted<br/> hospitals</p>
        </Card>
        <Card className="card">
        <img src={logo4} alt="" />
          <h2>Search doctor</h2>
        <p>Choose your doctor from thousands<br/> of specialist, general, and trusted<br/> hospitals</p>
        </Card>
    </div>
    <div className=" d-flex justify-content-around mt-5">
        <Card className="card">
          <img src={logo5} alt="" />
          <h2>Search doctor</h2>
          <p>Choose your doctor from thousands<br/> of specialist, general, and trusted<br/> hospitals</p>
        </Card>
        <Card className="card">
        <img src={logo6} alt="" />
          <h2>Search doctor</h2>
        <p>Choose your doctor from thousands<br/> of specialist, general, and trusted<br/> hospitals</p>
        </Card>
        <Card className="card">
        <img src={logo7} alt="" />
          <h2>Search doctor</h2>
        <p>Choose your doctor from thousands<br/> of specialist, general, and trusted<br/> hospitals</p>
        </Card>
    </div>
     <div className='head4 container d-flex justify-content-center mt-5'><Button className='btn btn-outline-primary justify-content-center' label="Learn More" /></div> 
    </>
   
  );
};

export default Contant4;
