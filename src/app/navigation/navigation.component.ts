import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  title: string = '';
  user?: string;

  constructor(
    private readonly titleService: TitleService,
    private readonly ref: ChangeDetectorRef,
    private readonly authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.titleService.title
      .pipe(
        map(title => {
          this.title = title;
          this.ref.detectChanges();
        })
      )
      .subscribe();
    this.user = this.authenticationService.getAuthentication()?.username;
  }

}
