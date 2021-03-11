import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Message } from 'src/app/model/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {

  message: Message | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params => this.messageService.get(+params.id)),
        catchError(err => {
          this.router.navigate(['/']);
          throw err;
        }),
        map((message: Message | undefined) => this.message = message)
      )
      .subscribe();
  }

}
