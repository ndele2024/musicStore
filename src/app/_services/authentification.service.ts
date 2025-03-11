import { Injectable } from '@angular/core';
//import {User} from '../_model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

    //private isAuthenticated : boolean = false;
    //private userConnected : User|undefined = undefined;
    //private language : string = "Francais";

    get getIsAuthenticated():boolean {
      if (localStorage.getItem("isAuthenticate")){
        return localStorage.getItem("isAuthenticate") === "true";
      }
      else{
        return false;
      }
      //return Boolean(localStorage.getItem("isAuthenticate"));
      //return this.isAuthenticated;
    }

    set setIsAuthenticated(auth : string){
      localStorage.setItem("isAuthenticate", auth);
      //this.isAuthenticated = auth;
    }

    get getUserConnected():string|null {
      return  localStorage.getItem("userIdConnected");
      //return this.userConnected;
    }

    set setUserConnected(userId : string){
      localStorage.setItem("userIdConnected", userId)
      //this.userConnected = user;
    }

    get getLanguage():string|null {
      return localStorage.getItem("language");
      //return this.language;
    }

    set setLanguage(lang:string){
      localStorage.setItem("language", lang);
      //this.language = lang;
    }
}
