import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string | undefined;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.logout();
  }

  login(): void {
    if (this.username) {
      this.authenticationService.login(this.username)
        .subscribe(
          () => {
            this.snackBar.open(`Benvenuto ${this.username}`);
            this.router.navigate(['/']);
          },
          err => this.snackBar.open(`Accesso non riuscito: ${err}`)
        );
    } else {
      this.snackBar.open('Inserisci un nome ...');
    }
  }

  logout(): void {
    this.authenticationService.logout()
      .subscribe(() => this.snackBar.open('Logout effettuato'));
  }

}
