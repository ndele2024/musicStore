import {Component, inject} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {UserConnectedService} from '../_services/user-connected.service';
import {FormsModule} from '@angular/forms';
import {NotificationService} from '../_services/notification.service';

@Component({
  selector: 'app-dialog-add-playlist',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormField, MatInput, MatLabel, FormsModule, MatError],
  templateUrl: './dialog-add-playlist.component.html',
  standalone: true,
  styleUrl: './dialog-add-playlist.component.css'
})
export class DialogAddPlaylistComponent {
  readonly dialogRef = inject(MatDialogRef<DialogAddPlaylistComponent>);
  private userConnectedService = inject(UserConnectedService);
  private notificationService = inject(NotificationService);

  playlistName="";

  addPlaylist() {
    this.userConnectedService.addPlaylist(this.playlistName);
  }

  isplaylistExist(){
    return this.userConnectedService.isPlaylistNameExist(this.playlistName);
  }

  handleEnter(code: string) {
    if (code === "Enter" && !this.isplaylistExist()){
      this.addPlaylist();
      this.dialogRef.close();
      this.notificationService.show(this.playlistName+" a été ajouter aux playlists")
    }
  }
}
