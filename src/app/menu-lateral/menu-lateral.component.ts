import {Component, inject, output} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatBadge} from '@angular/material/badge';
import {AuthentificationService} from '../_services/authentification.service';
import {User} from '../_model/model';
import {Router} from '@angular/router';
import {DataServiceService} from '../_model/data-service.service';
import {UserConnectedService} from '../_services/user-connected.service';

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
  private userConnectedService = inject(UserConnectedService);
  private readonly router = inject(Router);

  setContentFilter = output<number>()
  setTextFilter =output<string>();

  getLanguage():string|null {
    return this.authenticationService.getLanguage;
  }

  getIsConnected():boolean {
    return  this.authenticationService.getIsAuthenticated;
  }

  getUser():User {
    return this.userConnectedService.getUser();
  }

  getNombreSauvegarde() {
    return this.userConnectedService.getSauvegardeUser().length;
  }

  getNombrePlaylist(){
    return this.userConnectedService.getPlaylistUser().length;
  }

  displayNouveaute(){
    this.setTextFilter.emit("");
    this.setContentFilter.emit(1);
  }

  displayHistorique(){
    if (this.getIsConnected()){
      this.setTextFilter.emit("");
      this.setContentFilter.emit(2);
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  displaySauvegarde() {
    this.setTextFilter.emit("");
    this.setContentFilter.emit(3);
  }


}
