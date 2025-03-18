import {Component, inject, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Playlist, Titre} from '../_model/model';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatDialog} from '@angular/material/dialog';
import {DialogAddPlaylistComponent} from '../dialog-add-playlist/dialog-add-playlist.component';
import {AuthentificationService} from '../_services/authentification.service';
//import {DataServiceService} from '../_model/data-service.service';
import {UserConnectedService} from '../_services/user-connected.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationService} from '../_services/notification.service';
//import {NotificationComponent} from '../notification/notification.component';

@Component({
  selector: 'app-music-card',
  imports: [MatCardModule, MatButtonModule, MatIcon, MatMenuTrigger, MatMenu, MatMenuItem],
  templateUrl: './music-card.component.html',
  standalone: true,
  styleUrl: './music-card.component.css'
})
export class MusicCardComponent {

  //injection of authentication service, data service
  private authenticationService = inject(AuthentificationService);
  //private dataService = inject(DataServiceService);
  private userConnectedService = inject(UserConnectedService);
  private notificationService = inject(NotificationService);

  titre = input.required<Titre>();
  param = input.required<string>()

  playlists = this.userConnectedService.getPlaylistUser();

  readonly dialog = inject(MatDialog);
  private router = inject(Router);

  openDialog(): void {
    if(!this.authenticationService.getIsAuthenticated){
      this.router.navigate(['/login']);
      return;
    }
    this.dialog.open(DialogAddPlaylistComponent, {
      width: '30%',
    });
  }

  sauvegarderTitre() {
    if(!this.authenticationService.getIsAuthenticated){
      this.router.navigate(['/login']);
      return;
    }
    this.userConnectedService.addSauvegarde(this.titre());
    this.notificationService.show(`Titre ${this.titre().name} Sauvegardé`);
  }

  deleteToSauvegarde() {
    if (confirm("Voulez vous supprimer ce titre de la sauvegarde ?")) {
      this.userConnectedService.deleteSauvegardeUser(this.titre().id);
      this.notificationService.show(`Titre ${this.titre().name} supprimé de la sauvegarde`);
    }
  }

  isInSauvegarde() : boolean {
    return this.userConnectedService.isTitleInSauvegarde(this.titre().id);
  }


  addToPlaylist(nom: string) {
    this.userConnectedService.addTitleToPlaylist(nom, this.titre());
    this.notificationService.show(`Titre ${this.titre().name} ajouté à la playlist ${nom}`);
    console.log(this.userConnectedService.getPlaylistUser());
  }


  isInPlaylist(p: Playlist) {
    const titre = p.titres.find(t => t.id == this.titre().id)
    return !!titre;
  }
}

