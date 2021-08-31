import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from "../components/Button.js";
import "./Navbar.css";



function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]= useState(true);
    const handleClick= () => setClick(!click);
    const closeMobileMenu =() => setClick(false);
   

   

    const showButton=() => {
        if (window.innerWidth <= 960) {
            setButton(false);
          } else {
            setButton(true);
          }
    };

    useEffect(() => {
        showButton();
      }, []);

    return (
      <>
      <nav className="navbar">
          <div className="navbar-container">
          <Link to="/" className="navbar-logo">
              DOMSEL <i to="/" className='fab fa-typo3' />
              </Link> 
              <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  
                  <li className='nav-item'>
                      <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                          Contact Us
                      </Link>
                  </li>
                  
                  <li className='nav-item'>
                      <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                          About Us
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/registerUserselection' className='nav-links' onClick={closeMobileMenu}>
                          Sign Up
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/profileImage' className='nav-links' onClick={closeMobileMenu}>
                          Log Out
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                         Log in
                      </Link>
                  </li>
              </ul>
              
              
          </div>
       </nav>
     </>
    );
}

export default Navbar
