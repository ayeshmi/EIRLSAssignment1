import axios from "axios";

const API_URL = "http://localhost:8082/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  getBooksByID(bookId){
    return axios.get('http://localhost:8082/api/auth/book/'+bookId);
}

getVideoByID(videoId){
  return axios.get('http://localhost:8082/api/auth/Video/'+videoId);
}

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email,dateOfBirth, password,userType) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      dateOfBirth,
      password,
      userType
    });
  }

 contactUs(name, email,message) {
    return axios.post(API_URL + "contactus", {
      name,
      email,
      message
    });
  }

  getUsers(){
    return axios.get(API_URL+"employees");
    }

    getVideos(){
      return axios.get(API_URL+"AllVideos");
      }

    getBooks(){
      return axios.get(API_URL+"books");
      }

    getAllContactUsDetails(){
      return axios.get(API_URL+"allConatctUs");
      }

      getAllCommentByID(ID){
        return axios.get(API_URL+"allCommentByID/"+ID);
        }

    getContactUsDetailById(contactID){
      return axios.get(API_URL + "contactus/"+contactID);
    }

    replyContactUs(answer,contactID,email){
      return axios.post(API_URL+"contactus/"+contactID,{answer,email});
     }

     addVideoDetails(category,date,description,title,ageLimitation,author,year,numberOfCopies,price){
      return axios.post(API_URL+"addVideo",{category,title,date,description,ageLimitation,author,year,numberOfCopies,price});
     }

     deleteContactUsDetailsById(id){
      return axios.delete(API_URL+"deleteContactUs/"+id);
     }

     deleteBookById(id){
      return axios.delete(API_URL+"deleteBook/"+id);
     }

     deleteVideoById(id){
      return axios.delete(API_URL+"deleteVideo/"+id);
     }

  addNewBook(category,title,author,inumber,numberOfCopies,date,bookDescription,bookExcerpt,price,year,numberOfPages){
    return axios.post(API_URL + "addbook", {
     category,
     title,
     author,
     inumber,
     numberOfCopies,
     date,
     bookDescription,
     bookExcerpt,price,year,numberOfPages
    });
  }

  addNewBookReservation(bookName,email,userId,bookId){
    return axios.post(API_URL + "bookReservation", {
     bookName,
     email,
     userId,
     bookId
     });
  }

  addNewVideoReservation(videoName,email,userId,videoId){
    return axios.post(API_URL + "videoReservation", {
      videoName,
     email,
     userId,
     videoId
     });
  }

  getUserProfilePicture(username){
    return axios.get(API_URL+"profilePicture/"+username);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  getUserType(name){
    return name;
  }
  homePageVideos(){
    return axios.get(API_URL+"selectedVideo/Romance");
  }

  homePageVideos(){
    return axios.get(API_URL+"selectedVideo/Romance");
  }

  RhomePageVideosRomance(){
    return axios.get(API_URL+"RselectedVideoR/Romance");
  }
  RhomePageBooksFantasy(){
    return axios.get(API_URL+"RselectedBookF/Fantasy");
  }
  RhomePageBooksAction(){
    return axios.get(API_URL+"RselectedBookA/Action and Adventure");
  }
  RhomePageBooksDrama(){
    return axios.get(API_URL+"RselectedBookD/Drama");
  }
  RhomePageBooksComic(){
    return axios.get(API_URL+"RselectedBookC/Comic and Graphic Novel");
  }
  RhomePageBooksRomance(){
    return axios.get(API_URL+"RselectedBookR/Romance");
  }
  RhomePageBooksHorror(){
    return axios.get(API_URL+"RselectedBookH/Horror");
  }
  addCommentBook(username,commentDetails,typeID,type){
    return axios.post(API_URL + "addCommentBook", {
      username,
      commentDetails,
      type,
     typeID
      });
  }
  searchBook(specification){
    return axios.get(API_URL + "searchBooks/"+specification);
  }

  searchVideo(specification){
    return axios.get(API_URL + "searchVideos/"+specification);
  }

  getPaymentDetailsByEmail(email){
    return axios.get(API_URL+"paymentDetails/"+email);
  }
  addPayment(cardType,cardHolderName,cardNumber,expiryDate,cvv,email){
    return axios.post(API_URL + "addPayment",{
     
      cardType,
      cardHolderName,
      cardNumber,
      expiryDate,
      cvv,
      email
      });
  }

  getBookReservationCart(email){
    return axios.get(API_URL+"getAllCartBookReservation/"+email); 
  }

  getVideoReservationCart(email){
    return axios.get(API_URL+"getAllCartVideoReservation/"+email); 
  }

  checkOutDetailsForBookReservation(email){
    return axios.get(API_URL+"getCheckOutTotalPrice/"+email)
  }

  getCheckOutTotalPrice(email){
    return axios.get(API_URL+"getCheckOutTotalPrice/"+email)
  }

  getCheckOutTotalPricvideo(email){
    return axios.get(API_URL+"getCheckOutTotalPriceVideo/"+email)
  }

  confirmBookCart(email,price){
    return axios.post(API_URL+"confirmBookCart/"+email,{price})
  }
  confirmVideoCart(email,price){
    return axios.post(API_URL+"confirmVideoCart/"+email,{price})
  }
  getLendingPaymentDetailsByEmail(email){
    return axios.get(API_URL+"lendingPaymentDetails/"+email);
  }
  getOngoingBookReseravtionDetails(email){
    return axios.get(API_URL+"getAllOngoingBookReservation/"+email);
  }
  getAllReservationToHandleReturns(){
    return axios.get(API_URL+"getAllBookReservation");
  }
  
  getBookReservationById(id){
    return axios.get(API_URL+"getBookReservationById"+id);
  }

  getVideoReservationById(id){
    return axios.get(API_URL+"getVideoReservationById"+id);
  }

  advanceBookReservation(bookId,bookName,email,date){
    return axios.post(API_URL+"advanceBookReservation12",{
      bookId,
      bookName,
      email,
      date
    });
  }

  viewBlackListCustomers(){
    return axios.get(API_URL+"viewBlackListCustomers");
  }

  checking(num1,num2){
    return axios.post(API_URL+"checking",{
      num1,
      num2
    });
  }

  deleteUser(id){
    return axios.delete(API_URL+"deleteUser/"+id);
  }
 
}

export default new AuthService();