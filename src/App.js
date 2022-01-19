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
import profileImage from './components/pages/UpdateProfilePicture';
import ViewAllBooks from './components/pages/ViewAllBooks';
import ViewAllContactUS from './components/pages/ViewAllContactUs';
import AddVideo from './components/pages/AddNewVideo';
import UploadVideo from './components/pages/AddVideo';
import ReplyContactUs from './components/pages/ReplyContactUs';
import AboutProfile from './components/pages/ProfileChanges';
import AboutVideoImage from './components/pages/AddVideoImage';
import AboutBookImage from './components/pages/AddBookImage';
import ViewAllVideo from './components/pages/ViewAllVideoDetails';
import Rating from './components/pages/rating';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ViewSearchResultsBook from './components/pages/DisplaySearchResults';
import ViewSearchResultsVideo from './components/pages/DisplaySearchResultsVideo';
import ViewSearchResultsVN from './components/pages/viewAllSearchedDetailsVB';
import ViewSearchResultsVV from './components/pages/viewAllSearchedDetailsVV';
import UpdateProfileDetails from './components/pages/UpdateProfileDetails';
import AddProfilePicture from './components/pages/AddProfilePicture';
import AddPayment from './components/pages/Payment';
import BookSearch from './components/pages/BookSearch';
import ViewBookReservationCart from './components/pages/BookCart';
import LendingPayments from './components/pages/LendingPayment';
import ViewBookReservationOngoing from './components/pages/OngoingReservation';
import ViewAllBookReservation from './components/pages/ViewAllBookReservations';
import ViewAllBookReservationAdvance from './components/pages/ViewAllBookReservationAdvance';
import AdvanceBookReservation from './components/pages/AdvanceBookReservation';
import ViewBlackListUsers from './components/pages/ViewBlackListUsers';
import checking from './components/pages/checking';
import ViewSelectedVideo from './components/pages/ViewSelectedVideo';
import ViewAllVideoReservationAdvance from './components/pages/ViewAllVideoReservationAdvance';
import ViewVideoReservationCart from './components/pages/VideoCart';
import AboutUs from './components/pages/AboutUs';
import ViewAllPayments from './components/pages/ViewAllPayments';
import BookWebScraping from './components/pages/WebScrapping';
import ApiIntegration from './components/pages/APIIntegration';
import AddNewBookIntegration from './components/pages/AddNewBookCSV';
import ViewAllCategory from './components/pages/ViewAllCategory';
import ViewSelectedCategoryBooks from './components/pages/ViewSelectedCategoryBook';
import ViewAllOnlineBookView from './components/pages/ViewAllOnlineBookView';
import AddOnlineBook from './components/pages/AddOnlineBook';
import UpdateBookDetails from './components/pages/UpdateBookDetails';
import OrderPageOfUser from './components/pages/OrderPageOfUser';
import ViewAllOnlineVideoView from './components/pages/ViewAllOnlineVideoView';
import ViewAllVideoCategory from './components/pages/ViewallVideoCategory';
import viewSelectedCategoryVideos from './components/pages/ViewSelectedVideoCategory';
import ViewVideoReservationOngoing from './components/pages/OngoingReservationVideo';


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
      <Route path="/addProfilePicture/:email" component={ AddProfilePicture} />
      <Route path="/register/:name" component={Register} />
      <Route path="/adminHomepage" component={AdminHomepage} />
      <Route path="/login" component={Login} />
      <Route path="/homeAdmin" component={HomepageAdmin} />
      <Route path="/homeUser" component={HomepageRUser} />
      <Route path="/addBook" component={AddBook} />
      <Route path="/addVideo" component={AddVideo} />
      <Route path="/addPayment/:email" component={AddPayment} />
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
      <Route path="/addVideoImage/:title" exact component={AboutVideoImage} />
      <Route path="/addBookImage/:title" exact component={AboutBookImage} />
      <Route path="/searchBookResult/:serach" exact component={ViewSearchResultsBook} />
      <Route path="/searchVideoResult/:serach" exact component={ViewSearchResultsVideo} />
      <Route path="/searchBookResultVB/:serach" exact component={ViewSearchResultsVN} />
      <Route path="/searchBookResultVV/:serach" exact component={ViewSearchResultsVV} />
      <Route path="/viewAllVideoDetails" exact component={ViewAllVideo} />
      <Route path="/updateProfileDetails" exact component={UpdateProfileDetails} />
      <Route path="/rating" exact component={Rating} />
      <Route path="/viewBookReservationCart" exact component={ViewBookReservationCart} />
      <Route path="/lendingPayment/:email" exact component={LendingPayments} />
      <Route path="/viewBookReservationOngoing" exact component={ViewBookReservationOngoing} />
      <Route path="/viewVideoReservationOngoing" exact component={ViewVideoReservationOngoing} />
      <Route path="/viewAllBookReservation" exact component={ViewAllBookReservation} />
      <Route path="/viewAllBookReservationAdvance/:bookID" exact component={ViewAllBookReservationAdvance} />
      <Route path="/advanceBookReservation/:bookID" exact component={AdvanceBookReservation} />
      <Route path="/viewBlackListUsers" exact component={ViewBlackListUsers} />
      <Route path="/checking" exact component={checking} />
      <Route path="/viewSelectedVideo/:id" exact component={ViewSelectedVideo} />
      <Route path="/viewAllVideoReservationAdvance/:videoID" exact component={ViewAllVideoReservationAdvance} />
      <Route path="/viewVideoReservationCart" exact component={ViewVideoReservationCart} />
      <Route path="/aboutUs" exact component={AboutUs} />
      <Route path="/viewAllPayments" exact component={ViewAllPayments} />
      <Route path="/bookScraping" exact component={BookWebScraping} />
      <Route path="/apiIntegration" exact component={ApiIntegration} />
      <Route path="/addNewBookIntegration" exact component={AddNewBookIntegration} />
      <Route path="/viewAllCategory" exact component={ViewAllCategory} />
      <Route path="/viewAllVideoCategory" exact component={ ViewAllVideoCategory} />
      <Route path="/viewSelectedCategoryBooks/:category" exact component={ViewSelectedCategoryBooks} />
      <Route path="/viewSelectedCategoryVideos/:category" exact component={viewSelectedCategoryVideos} />
      <Route path="/viewAllOnlineBookView" exact component={ViewAllOnlineBookView} />
      <Route path="/viewAllOnlineVideoView" exact component={ViewAllOnlineVideoView} />
      <Route path="/addOnlineBook/:title" exact component={AddOnlineBook} />
      <Route path="/updateBookDetails" exact component={UpdateBookDetails} />
      <Route path="/orderPageOfUser" exact component={OrderPageOfUser} />
    </Switch>
  </Router>
  </>
  );
}

export default App;
