import {Component, inject} from '@angular/core';
import {MatDivider} from '@angular/material/divider';
import {MusicCardComponent} from '../music-card/music-card.component';
import {DataServiceService} from '../_model/data-service.service';
import {Titre} from '../_model/model';

@Component({
  selector: 'app-main-content',
  imports: [
    MatDivider,
    MusicCardComponent
  ],
  templateUrl: './main-content.component.html',
  standalone: true,
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

  private dataService = inject(DataServiceService);

  newTitles : Titre[] = this.dataService.getTitres().sort((a,b)=>{
    if (a.annee > b.annee) return 1;
    else return 0;
  }).slice(0, 10);

  poularTitles : Titre[] = this.dataService.getTitres().sort((a,b)=>{
    if (a.vue > b.vue) return 1;
    else return 0;
  }).slice(0, 10);

}
