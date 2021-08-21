import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Registration';
import Login from './components/pages/Login';
import AdminHomepage from './components/pages/AdminHomepage';
import Contact from './components/pages/ContactUs';
import HomepageAdmin from './components/pages/HomepageAdmin';
import HomepageRUser from './components/pages/HomepageRegisteredUser';
import AddBook from './components/pages/AddNewBook';
import Registerpage1 from './components/pages/Registrationpage1';
import BookReservation from './components/pages/BookReservation';
import ViewAllUserDetails from './components/pages/ViewAllUserDetails';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
  <>
  <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path="/contact"  component={Contact} />
      <Route path="/products"  component={Products} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/register" component={Register} />
      <Route path="/adminHomepage" component={AdminHomepage} />
      <Route path="/login" component={Login} />
      <Route path="/homeAdmin" component={HomepageAdmin} />
      <Route path="/homeUser" component={HomepageRUser} />
      <Route path="/addBook" component={AddBook} />
      <Route path="/registerUserselection" component={Registerpage1} />
      <Route path="/registerUserselection" component={Registerpage1} />
      <Route path="/BookReservation" exact component={BookReservation} />
      <Route path="/viewAlluserDetails" exact component={ViewAllUserDetails} />

    </Switch>
  </Router>
  </>
  );
}

export default App;
