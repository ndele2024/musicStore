import { Component } from '@angular/core';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {MenuLateralComponent} from '../menu-lateral/menu-lateral.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent, MenuLateralComponent, RouterOutlet],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
