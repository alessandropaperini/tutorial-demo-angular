import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MESSAGES } from 'src/app/mock/mock-messages';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {

  message: Message | undefined;

  constructor(
    private readonly route: ActivatedRoute
  ) {
    this.route.params
      .pipe(
        map(params => this.message = this.getMessage(+params.id))
      )
      .subscribe();
  }

  ngOnInit(): void {
  }

  private getMessage(id: number): Message | undefined {
    return MESSAGES.find(m => m.id === id);
  }

}
