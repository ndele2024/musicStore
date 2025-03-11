import {Injectable} from '@angular/core';
import {DataSource} from './dataSource';
import {Album, Artist, Titre, User} from './model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private titres: Titre[] = [];
  private  artists: Artist[] = [];
  private albums: Album[] = [];
  private  users: User[] = [];

  //injection de dataSource
  //private dataSource = inject(DataSource);
  constructor(private dataSource : DataSource) {
    dataSource.getTitres().subscribe( data =>{
      this.titres.push(data);
    });

    dataSource.getAlbums().subscribe(data=>{
      this.albums.push(data);
    })

    dataSource.getUsers().subscribe(data =>{
      this.users.push(data);
    })

    dataSource.getArtists().subscribe(data=>{
      this.artists.push(data);
    })
  }

  getTitres():Titre[]{
    return this.titres;
  }

  getAlbums():Album[]{
    return this.albums;
  }

  getUsers():User[]{
    return  this.users;
  }

  getUserByEmailAndPassword(email : string, password:string): User|undefined {
    return this.users.find(user => user.userEmail==email && user.password == password);
  }


  getUserById(userId : string|null): User|undefined {
    if(userId) {
      return this.users.find(user => user.id === userId);
    }
    else {
      return undefined;
    }
  }

}
