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

     addVideoDetails(category,date,description,title){
      return axios.post(API_URL+"addVideo",{category,title,date,description});
     }

     deleteContactUsDetailsById(id){
      return axios.delete(API_URL+"deleteContactUs/"+id);
     }

  addNewBook(category,title,author,inumber,price,numberOfCopies,date,description){
    return axios.post(API_URL + "addbook", {
     category,
     title,
     author,
     inumber,
     price,
     numberOfCopies,
     date,
     description
    });
  }

  addNewBookReservation(bookName,username,userId){
    return axios.post(API_URL + "bookReservation", {
     bookName,
     username,
     userId
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
  homePageBooks(){
    return axios.get(API_URL+"selectedBook/Fantasy");
  }
  RhomePageBooksFantasy(){
    return axios.get(API_URL+"RselectedBookF/Fantasy");
  }
  RhomePageBooksAction(){
    return axios.get(API_URL+"RselectedBookA/Action");
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
 // this.props.history.push(`viewSelectedBook/${id}`);
}

export default new AuthService();