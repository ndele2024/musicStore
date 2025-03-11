import {Component, inject, Input, input, model} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Titre, User} from '../_model/model';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {
  MatDialog,
} from '@angular/material/dialog';
import {DialogAddPlaylistComponent} from '../dialog-add-playlist/dialog-add-playlist.component';
import {AuthentificationService} from '../_services/authentification.service';
import {DataServiceService} from '../_model/data-service.service';
import {UserConnectedService} from '../_services/user-connected.service';

@Component({
  selector: 'app-music-card',
  imports: [MatCardModule, MatButtonModule, MatIcon, MatMenuTrigger, MatMenu, MatMenuItem],
  templateUrl: './music-card.component.html',
  standalone: true,
  styleUrl: './music-card.component.css'
})
export class MusicCardComponent {

  //injection of authentication service, data service
  //private authenticationService = inject(AuthentificationService);
  //private dataService = inject(DataServiceService);
  private userConnectedService = inject(UserConnectedService);

  titre = input.required<Titre>();
  param = input.required<string>()

  playlists = this.userConnectedService.getPlaylistUser();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(DialogAddPlaylistComponent, {
      width: '30%',
    });
  }

  sauvegarderTitre() {
    this.userConnectedService.addSauvegarde(this.titre());
  }

  deleteToSauvegarde() {
    this.userConnectedService.deleteSauvegardeUser(this.titre().id);
  }

  isInSauvegarde() : boolean {
    return this.userConnectedService.isTitleSauvegarde(this.titre().id);
  }


  addToPlaylist(nom: string) {
    this.userConnectedService.adTitleToPlaylist(nom, this.titre());
    console.log(this.userConnectedService.getPlaylistUser());
  }
}

