import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-create-message-dialog',
  templateUrl: './create-message-dialog.component.html',
  styleUrls: ['./create-message-dialog.component.scss']
})
export class CreateMessageDialogComponent implements OnInit {

  message: Message;

  constructor(
    private readonly ref: MatDialogRef<CreateMessageDialogComponent>
  ) {
    this.message = { id: new Date().getTime(), title: '', message: '' };
  }

  ngOnInit(): void {
  }

  close(): void {
    this.ref.close(this.message);
  }

}
