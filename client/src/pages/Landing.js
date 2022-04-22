import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/landing.css';
import LandingContent from '../components/Landing/LandingContent';
import Stats from '../components/Stats/Stats';
import About from '../components/About/About';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { logout } from '../Reducers/profile';

const Landing = () => {

  const x=1;
  const dispatch = useDispatch();

  dispatch(logout());

  return (
    <div className='landing-img'>
        <Navbar p={x} />
        <LandingContent/>
        <Stats/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Landing