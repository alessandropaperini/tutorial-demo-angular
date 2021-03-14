import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CreateMessageDialogComponent } from 'src/app/components/create-message-dialog/create-message-dialog.component';
import { Message } from 'src/app/model/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];

  constructor(
    private readonly messageService: MessageService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.messageService.getAll()
      .pipe(
        map((messages: Message[]) => this.messages = messages)
      )
      .subscribe();
  }

  create(): void {
    this.dialog.open(CreateMessageDialogComponent)
      .afterClosed()
      .pipe(
        switchMap((message: Message | undefined) => message ? this.messageService.add(message) : new Observable(sub => sub.complete()))
      )
      .subscribe(
        (message: any) => console.log(`Messaggio creato: ${message.id}`)
      );
  }

}
