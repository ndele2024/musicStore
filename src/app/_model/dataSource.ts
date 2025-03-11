import { Injectable } from "@angular/core";
import { Titre, Album, User, Artist } from './model';
import {from, Observable, ObservedValueOf} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSource{

  private titres: Titre[] = [];
  private  artists: Artist[] = [];
  private albums: Album[] = [];
  private  users: User[] = [];

 getTitres():Observable<ObservedValueOf<Titre[]>> {
    // Generating 50 Titres
    for (let i = 1; i <= 50; i++) {
      this.titres.push(new Titre(
        `T${i}`,
        `Title${i}`,
        `Description of Title${i}`,
        `Genre${i%5}`, // 5 different genres for diversity
        2000 + (i % 21), // years between 2000 and 2020
        `file${i}.mp3`,
        `image${i}.jpg`
      ));
    }
    return from(this.titres);
  }

  getAlbums():Observable<ObservedValueOf<Album[]>>{
    // Generating 10 Albums
    for (let i = 1; i <= 10; i++) {
      this.albums.push(new Album(
        `Album${i}`,
        2000 + (i % 21), // years between 2000 and 2020
        this.titres.slice(i * 5, (i + 1) * 5) // 5 titres per album
      ));
    }
    return from(this.albums);
  }

  getArtists():Observable<ObservedValueOf<Artist[]>>{
    // Generating 4 Artists
    for (let i = 1; i <= 4; i++) {
      const artist = new Artist(
        `Artiste${i}`,
        this.titres.slice(i * 10, (i + 1) * 10), // 10 titres per artist
        this.albums.slice(i * 2, (i + 1) * 2), // 2 albums per artist
        `ArtistName${i}`,
        25 + i,
        `sex${i % 2 === 0 ? 'Male' : 'Female'}`,
        `artistusername${i}`,
        `artist${i}@example.com`,
        `artistpassword${i}`,
        "artist"
      )
      this.artists.push(artist);
      this.users.push(artist);
    }
    return from(this.artists);
  }

  getUsers():Observable<ObservedValueOf<User[]>>{
    this.users.push(new User("default user", 0, "MF", "defaultUser", "defaultUser@example.com", "default", "visiteur"));
    // Generating 2 Users
    for (let i = 1; i <= 2; i++) {
      this.users.push(new User(
        `FullName${i}`,
        20 + i,
        `sex${i % 2 === 0 ? 'Male' : 'Female'}`,
        `username${i}`,
        `user${i}@example.com`,
        `password${i}`,
        "auditeur"
      ));
    }
    return from(this.users);
  }

}
