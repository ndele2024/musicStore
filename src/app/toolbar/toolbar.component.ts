import {Component, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AuthentificationService} from '../_services/authentification.service';
import {User} from '../_model/model';
import {MatCardAvatar} from '@angular/material/card';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatCardAvatar, RouterLink],
  templateUrl: './toolbar.component.html',
  standalone: true,
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  //injection of authentication service
  private authenticationService = inject(AuthentificationService);
  private readonly router = inject(Router);

  avatarName: string = "AV";
  avatarUrl: any = {
    " background-image":"url('https://material.angular.io/assets/img/examples/shiba1.jpg')"
  };

  getLanguage():string {
    return this.authenticationService.getLanguage;
  }

  getIsConnected():boolean {
    return  this.authenticationService.getIsAuthenticated
  }

  getUser():User|undefined {
    if(this.authenticationService.getIsAuthenticated){
      return this.authenticationService.getUserConnected
    }
    else {
      return undefined;
    }
  }

  changeLanguage(lang: string) {
    this.authenticationService.setLanguage = lang;
  }

  deconnexion() {
    this.authenticationService.setIsAuthenticated = false;
    this.authenticationService.setUserConnected = undefined;
    this.router.navigate(['/login']);
  }
}
