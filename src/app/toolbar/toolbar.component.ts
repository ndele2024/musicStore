import {Component, inject, output} from '@angular/core';
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
import {FormsModule} from '@angular/forms';
import {DataServiceService} from '../_model/data-service.service';
import {UserConnectedService} from '../_services/user-connected.service';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatCardAvatar, RouterLink, FormsModule],
  templateUrl: './toolbar.component.html',
  standalone: true,
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  //injection of authentication service, data service and Router
  private authenticationService = inject(AuthentificationService);
  private userConnectedService = inject(UserConnectedService);
  private readonly router = inject(Router);

  defaultLanguage = "Francais";
  avatarName = this.userConnectedService.getUser().fullname.slice(0, 2);
  avatarUrl = this.userConnectedService.getUser().avatar;

  textFilter: string = '';
  setTextFilter =output<string>();
  setContentFilter = output<number>();

  setTextFilterEvent(event: string){
    this.textFilter = event;
    this.setTextFilter.emit(this.textFilter);
    //console.log(`texte saisit : ${this.textFilter}`)
  }

  getLanguage():string|null {
    return this.authenticationService.getLanguage;
  }

  getIsConnected():boolean {
    return  this.authenticationService.getIsAuthenticated
  }

  getUser():User {
    return this.userConnectedService.getUser();
  }

  changeLanguage(lang: string) {
    this.authenticationService.setLanguage = lang;
  }

  deconnexion(event : Event) {
    event.stopPropagation()
    localStorage.clear();
    this.authenticationService.setIsAuthenticated = "false";
    this.authenticationService.setUserConnected = "";
    this.authenticationService.setLanguage = "Francais"
    this.router.navigate(['/login']);

  }

  goToHome() {
    this.setTextFilter.emit("");
    this.setContentFilter.emit(0);
    this.textFilter="";
    this.router.navigate(['/home']);

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

  resetFilter() {
    this.textFilter = "";
    this.setTextFilter.emit("");
  }

  displayPlaylists() {
    this.setTextFilter.emit("");
    this.setContentFilter.emit(4);
  }
}
