import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  //private SERVER_URL = 'http://localhost:8080/gym-tracker-api/';
  private SERVER_URL = 'https://gym-tracker-bff.herokuapp.com/gym-tracker-api/';

  public username: string;
  public password: string;

  constructor(private httpClient: HttpClient) { }

  authenticationService(username: string, password: string) {
    return this.httpClient.get(this.SERVER_URL + 'basicauth',
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfullLogin(username, password);
      }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic '+window.btoa(username + ":" + password);
  }

  registerSuccessfullLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if(user === null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggerInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return '';
    } else {
      return user;
    }
  }

  
}
