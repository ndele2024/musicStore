import {Component, inject, signal} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAnchor, MatButton, MatIconButton} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {AuthentificationService} from '../_services/authentification.service';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {Router, RouterLink} from '@angular/router';
import {DataServiceService} from '../_model/data-service.service';



@Component({
  selector: 'app-connexion',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormFieldModule,
    MatCardActions,
    MatButton,
    MatInputModule,
    ReactiveFormsModule,
    MatAnchor,
    MatIcon,
    RouterLink,
    MatIconButton
  ],
  templateUrl: './connexion.component.html',
  standalone: true,
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  private authenticationService = inject(AuthentificationService);
  private dataService = inject(DataServiceService);
  private readonly router = inject(Router);

  erorMessage: string = "";

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  authenticateUser() {
    const user =  this.dataService.getUserByEmailAndPassword(this.emailFormControl.value??"", this.passwordFormControl.value??"");
    if(user == undefined){
      this.erorMessage = "Email ou mot de passe invalide";
      console.log(this.erorMessage);
    }
    else {
      this.authenticationService.setUserConnected = user;
      this.authenticationService.setIsAuthenticated = true;
      this.router.navigate(['/home/default']);
    }
  }
}
