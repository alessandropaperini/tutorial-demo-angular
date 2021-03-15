import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  title: string = '';

  constructor(
    private readonly titleService: TitleService,
    private readonly ref: ChangeDetectorRef
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
  }

}
