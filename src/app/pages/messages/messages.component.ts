import { Component, OnInit } from '@angular/core';
import { MESSAGES } from 'src/app/mock/mock-messages';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[];

  constructor() {
    this.messages = MESSAGES;
  }

  ngOnInit(): void {
  }

}
