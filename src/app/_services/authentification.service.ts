import { Injectable } from '@angular/core';
import {User} from '../_model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

    private isAuthenticated : boolean = false;
    private userConected : User|undefined = undefined;
    private language : string = "Francais";

    get getIsAuthenticated():boolean {
      return this.isAuthenticated;
    }

    set setIsAuthenticated(auth : boolean){
      this.isAuthenticated = auth;
    }

    get getUserConnected():User|undefined {
      return this.userConected;
    }

    set setUserConnected(user : User | undefined){
      this.userConected = user;
    }

    get getLanguage():string {
      return this.language;
    }

    set setLanguage(lang:string){
      this.language = lang;
    }
}
