import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatBadge} from '@angular/material/badge';
import {AuthentificationService} from '../_services/authentification.service';
import {User} from '../_model/model';

@Component({
  selector: 'app-menu-lateral',
  imports: [
    MatIcon,
    MatButton,
    MatBadge
  ],
  templateUrl: './menu-lateral.component.html',
  standalone: true,
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {
  private authenticationService = inject(AuthentificationService);

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
}
