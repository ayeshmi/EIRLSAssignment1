import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
import authService from './services/auth.service';
import Dropdown from './DropdownUser';
import DropdownPharmacist from './DropdownPharmacist';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]= useState(true);
    const handleClick= () => setClick(!click);
    const closeMobileMenu =() => setClick(false);
    const [dropdown, setDropdown] = useState(false);
   
    const currentUser = checkUsername();
   // const currentUser = authService.getCurrentUser();
  
const [username,setUsername]=useState(currentUser.username);
const [roles,setRole]=useState(currentUser.roles); 
const [image,setImage]=useState(currentUser.profileImage); 
const [age,setAge]=useState(currentUser.id);
  const logout = () => {

    window.localStorage.clear();
    window.location.href = "/login";
} 


const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

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
                      <Link to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>
                          About Us
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/registerUserselection' className='nav-links' onClick={closeMobileMenu}>
                      {username == null ? `Register ` : ` `}
                      </Link>
                  </li>
                 
                  <li className='nav-item'>
                      <Link to='/login' className='nav-links' onClick={logout}>
                      {username == null ? `Login ` : `LogOut `}
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/aboutProfile' className='nav-links userProfile' onClick={closeMobileMenu}>
                         
                         {username != null ? `Hello, ${username}` : ` `}
                      </Link>
                  </li>
                  <li className='nav-item'>
                  {(() => {

if (roles == "ROLE_ADMIN") {

  return (

    <Link to='/ViewAllBooks' className='nav-links' onClick={closeMobileMenu}>
                     Book
                      </Link>
  )
}  else {
  return (

    <Link to='/viewAllCategory' className='nav-links' onClick={closeMobileMenu}>
                   Book
                      </Link>
  )
}
})()}
                  </li>

                  <li className='nav-item'>
                  {(() => {

if (roles == "ROLE_ADMIN") {

  return (

    <Link to='/viewAllVideoDetails' className='nav-links' onClick={closeMobileMenu}>
                     Video
                      </Link>
  )
}  else {
  return (

    <Link to='/viewAllVideoCategory' className='nav-links' onClick={closeMobileMenu}>
                   Video
                      </Link>
  )
}
})()}
                  </li>
                  
                  <li className='nav-item'>
                  <Link to='/aboutProfile' className='nav-links' onClick={closeMobileMenu}>
                  {(() => {

if (roles == "ROLE_ADMIN") {

  return (

    <Link to='/viewAlluserDetails' className='nav-links' onClick={closeMobileMenu}>
                     Customers
                      </Link>
  )
}  else {
  return (

    <Link to='/viewAllPayments' className='nav-links' onClick={closeMobileMenu}>
                    Payments
                      </Link>
  )
}
})()}
                      
                      </Link>
                  </li>
                  
                 
                  <li className='nav-item'>
                  {(() => {

if (roles == "ROLE_ADMIN") {

  return (

    <Link to='/externalResources' className='nav-links' onClick={closeMobileMenu}>
                     External Resources
                      </Link>
  )
}  else {
  return (

    <Link to='/orderPageOfUser' className='nav-links' onClick={closeMobileMenu}>
                     Orders
                      </Link>
  )
}
})()}
                  </li>
                
                  
                

             
                  <li className='nav-item'>
                      <Link to='/aboutProfile' className='nav-links' onClick={closeMobileMenu}>
                      <img src={image != null ? `${image}` : `https://mysoftlogic.lk/build/images/user.955847eb.svg `}  className='imageff'/>
                      </Link>
                   
                  </li>
               
              
              </ul>
              
              
          </div>
       </nav>
     </>
    );
}

 function notify (){
 
  // Calling toast method by passing string
  toast("Successfully Logout")
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

export default Navbar;