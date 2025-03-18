import {Component, computed, inject, input} from '@angular/core';
import {MatDivider} from '@angular/material/divider';
import {MusicCardComponent} from '../music-card/music-card.component';
import {DataServiceService} from '../_model/data-service.service';
import {Album, Playlist, Titre} from '../_model/model';
import {AuthentificationService} from '../_services/authentification.service';
import {UserConnectedService} from '../_services/user-connected.service';
import {PlaylistCardComponent} from '../playlist-card/playlist-card.component';

@Component({
  selector: 'app-main-content',
  imports: [
    MatDivider,
    MusicCardComponent,
    PlaylistCardComponent
  ],
  templateUrl: './main-content.component.html',
  standalone: true,
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

  private dataService = inject(DataServiceService);
  private authenticationService = inject(AuthentificationService);
  private userConnectedService = inject(UserConnectedService);

  textFilter = input<string>("");
  contentFilter = input<number>(0);

  newTitles : Titre[] = this.dataService.getTitres().sort((a,b)=>{
    if (a.annee < b.annee) return 1;
    else return -1;
  }).slice(0, 10);

  popularTitles : Titre[] = this.dataService.getTitres().sort((a,b)=>{
    if (a.vue > b.vue) return 1;
    else return -1;
  }).slice(0, 10);


  filterTitles = computed(() =>
    this.dataService.getTitres().filter(titre =>
      titre.annee.toString().toLowerCase().includes(this.textFilter().toLowerCase()) ||
      titre.name.toLowerCase().includes(this.textFilter().toLowerCase()) ||
      titre.description.toLowerCase().includes(this.textFilter().toLowerCase()) ||
      titre.genre.toLowerCase().includes(this.textFilter().toLowerCase())
    )
  );

  filterAlbums = computed(()=>
    this.dataService.getAlbums().filter(album =>
      album.name.toLowerCase().includes(this.textFilter().toLowerCase()) ||
      album.annee.toString().toLowerCase().includes(this.textFilter().toLowerCase())
    )
  );

  filterPlaylists = computed(() =>
    this.userConnectedService.getPlaylistUser().filter(p=> p.nom.toLowerCase().includes(this.textFilter().toLowerCase()))
  );


  getSauvegarde() : Titre[] {
    return this.userConnectedService.getSauvegardeUser();
  }


  getHistorique() {
    return [];
  }

  getPlaylists() : Playlist[] {
    return this.userConnectedService.getPlaylistUser();
  }

  getAlbums() : Album[] {
    return this.dataService.getAlbums().slice(0, 10);
  }
}
