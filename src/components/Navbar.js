import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
import authService from './services/auth.service';




function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]= useState(true);
    const handleClick= () => setClick(!click);
    const closeMobileMenu =() => setClick(false);
   
    const currentUser = checkUsername();
   // const currentUser = authService.getCurrentUser();
  
const [username,setUsername]=useState(currentUser.username);
  
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/login";
} 

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
                      <Link to='/login' className='nav-links' onClick={logout}>
                         Log in
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/aboutProfile' className='nav-links' onClick={closeMobileMenu}>
                         Hello, {username}
                      </Link>
                  </li>
              </ul>
              
              
          </div>
       </nav>
     </>
    );
}

function checkUsername () {
    const currentUser = authService.getCurrentUser();
    // Checks for undefined, null, and a string with no characters:
    if (currentUser && currentUser.username && currentUser.username.length > 0) {
      return currentUser;
    }
    // Default case:
    return 'Anonymous'
  }

export default Navbar
