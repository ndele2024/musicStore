import {Component, inject, model} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Titre} from '../_model/model';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {DialogAddPlaylistComponent} from '../dialog-add-playlist/dialog-add-playlist.component';

@Component({
  selector: 'app-music-card',
  imports: [MatCardModule, MatButtonModule, MatIcon, MatMenuTrigger, MatMenu, MatMenuItem],
  templateUrl: './music-card.component.html',
  standalone: true,
  styleUrl: './music-card.component.css'
})
export class MusicCardComponent {

  titre = model.required<Titre>();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(DialogAddPlaylistComponent, {
      width: '30%',
    });
  }

}

