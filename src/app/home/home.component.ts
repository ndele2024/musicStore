import { Component } from '@angular/core';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {MenuLateralComponent} from '../menu-lateral/menu-lateral.component';
//import {RouterOutlet} from '@angular/router';
import {MainContentComponent} from '../main-content/main-content.component';

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent, MenuLateralComponent, MainContentComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  textFilter: string = "";
  contentFilter : number = 0;

  setTextFromEvent(event:string){
    this.textFilter = event;
    //console.log(this.textFilter)
  }

  setContentFilterFromEvent(event : number){
    this.contentFilter = event;
  }

}
