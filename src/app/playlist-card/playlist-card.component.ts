import {Component, inject, input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
//import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {Album, Playlist} from '../_model/model';
import {UserConnectedService} from '../_services/user-connected.service';
import {NotificationService} from '../_services/notification.service';

@Component({
  selector: 'app-playlist-card',
  imports: [
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './playlist-card.component.html',
  standalone: true,
  styleUrl: './playlist-card.component.css'
})
export class PlaylistCardComponent {
  playlist = input<Playlist>();
  album = input<Album>();
  param = input.required<string>();
  private userConnectedService = inject(UserConnectedService);
  private notificationService = inject(NotificationService);


  deletePlaylist() {
    if(confirm("Voulez-vous supprimer la playlist "+this.playlist()?.nom)) {
      this.userConnectedService.deletePlaylist(this.playlist()?.nom ?? "");
      this.notificationService.show(this.playlist()?.nom+" a été supprimé des playlists");
    }
  }

  saveAlbum() {
    this.album()?.titres.forEach( titre => {
      if(!this.userConnectedService.isTitleInSauvegarde(titre.id)) {
        this.userConnectedService.addSauvegarde(titre);
      }
    })
    this.notificationService.show(`les titres de l'album ${this.album()?.name} ont été sauvegardés`);
  }

  goToPlaylistDetail() {
    this.notificationService.show("playlist detail");
  }
}
