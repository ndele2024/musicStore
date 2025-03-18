import {inject, Injectable} from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {DataServiceService} from '../_model/data-service.service';
import {Playlist, Titre, User} from '../_model/model';

@Injectable({
  providedIn: 'root'
})
export class UserConnectedService {

  constructor() { }
  //injection of authentication service, data service
  private authenticationService = inject(AuthentificationService);
  private dataService = inject(DataServiceService);

  private userConnected = <User>this.dataService.getUserById(this.authenticationService.getUserConnected);

  getUser() : User{
    return this.userConnected;
  }

  getSauvegardeUser(): Titre[] {
    return this.userConnected.sauvegardes;
  }

  addSauvegarde(titre : Titre){
    this.userConnected.sauvegardes.push(titre);
  }

  deleteSauvegardeUser(titleId : string){
    this.userConnected.sauvegardes = this.userConnected.sauvegardes.filter(t => t.id !== titleId);
  }

  isTitleInSauvegarde(titleId : string) {
    let i = 0;
    this.userConnected.sauvegardes.forEach(t => {
      if (t.id === titleId) i++;
    });
    return i > 0;
  }

  getPlaylistUser() {
    return this.userConnected.playlists;
  }

  addPlaylist(playlistName:string){
    this.userConnected.playlists.push(new Playlist(playlistName));
  }

  deletePlaylist(playlistName:string){
    this.userConnected.playlists = this.userConnected.playlists.filter(p => p.nom !== playlistName);
  }

  isPlaylistNameExist(playlistName:string){
    let i = 0;
    this.userConnected.playlists.forEach(p => {
      if (p.nom === playlistName) i++;
    });
    return i > 0;
  }

  addTitleToPlaylist(playlistName:string, titre : Titre){
    const index = this.userConnected.playlists.findIndex(p => p.nom === playlistName);
    this.userConnected.playlists.at(index)?.titres.push(titre);
  }

  deleteTitleToPlaylist(playlistName:string, titre : Titre) {
    const index = this.userConnected.playlists.findIndex(p => p.nom === playlistName);
    if (index !== -1) {
      this.userConnected.playlists[index].titres = this.userConnected.playlists[index].titres.filter(t => t.id == titre.id)
    }
  }



}
