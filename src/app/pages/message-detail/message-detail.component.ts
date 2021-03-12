import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private readonly messageService: MessageService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params => this.messageService.get(+params.id)),
        catchError(err => {
          this.router.navigate(['/']);
          throw err;
        }),
        map((message: Message) => this.message = message)
      )
      .subscribe();
  }

  delete(message: Message): void {
    this.messageService.remove(message.id)
      .subscribe(
        () => {
          console.log(`${message.title} rimosso!`);
          this.router.navigate(['/']);
        },
        err => console.error(err)
      );
  }

}
