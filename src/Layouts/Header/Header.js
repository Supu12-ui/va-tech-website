import  {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../../Assets/Styles/Header.css";
import {SlMenu} from "react-icons/sl";
import img1 from  '../../Assets/Images/uiux.jpg';
import img2 from  '../../Assets/Images/robot.jpg';
import img3 from  '../../Assets/Images/machineLearning.jpg';
import img4 from '../../Assets/Images/mobileDevelopment.jpg'
import img5 from  '../../Assets/Images/customerService.jpg';



const Header = () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5
       ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 6000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [currentImageIndex]);
    
      const currentImage = images[currentImageIndex];
    const [showNav, setShowNav] = useState(false);
    const setNav = () => {
        if (showNav) {
            setShowNav(!showNav);
        }
    }


    return (
        <>
            <div className="main-nav" >
            <div className="image"
            style={{
                   backgroundImage: `url(${currentImage})`,
                   
                   backgroundSize: 'cover',
                   borderBottomLeftRadius: '50px',
                   borderBottomRightRadius: '50px',
                   height: '100vh',
                   width: '100vw',
                   
                   }}>
              
                
                <div className='head-container'>
                    <div className={
                        showNav ? "mobile-menu" : "menu"
                    }>
                        <Link to='/'
                            onClick={
                                () => setNav()
                            }
                            id="header-btn">
                            <div className="logo">vaTech.</div>
                        </Link>
                        <Link to='/about'
                            onClick={
                                () => setNav()
                            }
                            id="header-btn">
                            <div className='nav-btn mobile-btn' 
                            style={{marginLeft:'20vmax',
                                   marginTop:"2vmax",
                                   fontWeight: 'bold',
                                   fontSize:"18px"
                        
                        }}>About</div>
                        </Link>
                        <Link to="/WhatWeDo"
                            onClick={
                                () => setNav()
                            }
                            id="header-btn">
                            <div className='nav-btn mobile-btn'
                            style={{
                            marginTop:"2vmax",
                            fontWeight: 'bold',
                            fontSize:"18px"
                        }}
                            >Our Services</div>
                        </Link>
                        <Link to="/blog"
                            onClick={
                                () => setNav()
                            }
                            id="header-btn">
                            <div className='nav-btn mobile-btn' style={{
                            marginTop:"2vmax",
                            fontWeight: 'bold',
                            fontSize:"18px"
                            }}>Blog</div>
                        </Link>
                        <Link to="/contactus"
                            className={
                                showNav ? "showContact" : "hideContact"
                            }
                            onClick={
                                () => setNav()
                            }
                            id="header-btn">
                            <div className='nav-btn mobile-btn' style={{borderRadius:'10vmax'}}>Contact Us</div>
                        </Link>
                    </div>

                    <div className='btn-container-head'>
                        <Link to='/contactus'>
                            <button className="btn-2" id="btn-contact">Contact Us</button>
                        </Link>


                        <div className="hamburger-menu">
                            <div onClick={
                                    () => setShowNav(!showNav)
                                }
                                className="hamburger-inner">
                                <SlMenu size={25}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Header;
