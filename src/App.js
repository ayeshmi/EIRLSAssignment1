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
import ViewSelectedBook from './components/pages/ViewSelectedBook';
import profileImage from './components/pages/AddProfile';
import ViewAllBooks from './components/pages/ViewAllBooks';
import ViewAllContactUS from './components/pages/ViewAllContactUs';
import AddVideo from './components/pages/AddNewVideo';
import UploadVideo from './components/pages/AddVideo';
import ReplyContactUs from './components/pages/ReplyContactUs';
import AboutProfile from './components/pages/ProfileChanges';


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
      <Route path="/register/:name" component={Register} />
      <Route path="/adminHomepage" component={AdminHomepage} />
      <Route path="/login" component={Login} />
      <Route path="/homeAdmin" component={HomepageAdmin} />
      <Route path="/homeUser" component={HomepageRUser} />
      <Route path="/addBook" component={AddBook} />
      <Route path="/addVideo" component={AddVideo} />
      <Route path="/registerUserselection" component={Registerpage1} />
      <Route path="/registerUserselection" component={Registerpage1} />
      <Route path="/BookReservation" exact component={BookReservation} />
      <Route path="/viewAlluserDetails" exact component={ViewAllUserDetails} />
      <Route path="/viewSelectedBook/:id" exact component={ViewSelectedBook} />
      <Route path="/profileImage" exact component={profileImage} />
      <Route path="/uploadVideo/:title" exact component={UploadVideo} />
      <Route path="/ViewAllBooks" exact component={ViewAllBooks} />
      <Route path="/ViewAllContactUs" exact component={ViewAllContactUS} />
      <Route path="/replyContactUsRequest/:id"  component={ReplyContactUs} />
      <Route path="/aboutProfile" component={AboutProfile} />

    </Switch>
  </Router>
  </>
  );
}

export default App;
