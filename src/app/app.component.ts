import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './_model/model';
import {DataServiceService} from './_model/data-service.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
dataService = inject(DataServiceService);


  ngOnInit(): void {
    //user : User = new User("default user", 0, "MF", "defaultUser", "defaultUser@example.com", "default", "visiteur");
    const user = <User>this.dataService.getUserByEmailAndPassword('defaultUser@example.com', 'default');
    localStorage.setItem("userIdConnected", user.id);
  }


}
