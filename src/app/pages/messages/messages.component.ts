import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CreateMessageDialogComponent } from 'src/app/components/create-message-dialog/create-message-dialog.component';
import { Message } from 'src/app/model/message';
import { MessageService } from 'src/app/services/message.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];

  constructor(
    private readonly messageService: MessageService,
    private readonly dialog: MatDialog,
    private readonly titleService: TitleService,
    private readonly snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.messageService.getAll()
      .pipe(
        map((messages: Message[]) => this.messages = messages)
      )
      .subscribe();
    this.titleService.title.next('Messaggi');
  }

  create(): void {
    this.dialog.open(CreateMessageDialogComponent)
      .afterClosed()
      .pipe(
        switchMap((message?: Message) => message ? this.messageService.add(message) : new Observable(sub => sub.complete()))
      )
      .subscribe(
        (message: any) => {
          console.log(`Messaggio creato: ${message.id}`);
          this.snackBar.open('Aggiunto con successo');
        },
        err => this.snackBar.open(`Errore: ${err}`)
      );
  }

}
