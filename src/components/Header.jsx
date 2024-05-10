import React from 'react';
import { Menubar } from 'primereact/menubar';
import logo from '../Assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Header = () => {
  const items = [
    { label: 'Home' },
    { label: 'Find a doctor' },
    { label: 'Apps' },
    { label: 'Testimonials' },
    { label: 'About us' }
  ];

  return (
    <div className=' container header d-flex justify-content-between align-items-center mt-3'>
      <img src={logo} alt="Logo" className="logo" />
      <Menubar model={items}  className="custom-menubar mt-4" />
    </div>
  );
};

export default Header;
