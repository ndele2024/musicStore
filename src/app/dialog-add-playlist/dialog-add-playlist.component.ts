import {Component, inject} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-dialog-add-playlist',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormField, MatInput, MatLabel],
  templateUrl: './dialog-add-playlist.component.html',
  standalone: true,
  styleUrl: './dialog-add-playlist.component.css'
})
export class DialogAddPlaylistComponent {
  readonly dialogRef = inject(MatDialogRef<DialogAddPlaylistComponent>);
}
