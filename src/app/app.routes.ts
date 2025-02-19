import { Routes } from '@angular/router';
import {MainContentComponent} from './main-content/main-content.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Music Space home',
    children: [
      {path: 'default', component: MainContentComponent}
    ],
  },
  {
    path: 'login',
    component: ConnexionComponent,
    title: 'Music Space Login',
  },
  {
    path: '',
    redirectTo: 'home/default',
    pathMatch: 'full'
  }
];
