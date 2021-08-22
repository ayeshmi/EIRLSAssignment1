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

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email,dateOfBirth, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      dateOfBirth,
      password
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

  addNewBook(category,title,author,edition,isbnNumber,price,numberOfCopies,date,description){
    return axios.post(API_URL + "addbook", {
     category,
     title,
     author,
     edition,
     isbnNumber,
     price,
     numberOfCopies,
     date,
     description
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();