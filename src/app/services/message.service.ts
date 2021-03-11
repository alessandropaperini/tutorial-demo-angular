import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MESSAGES } from '../mock/mock-messages';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message[] = [];

  constructor() {
    this.messages = MESSAGES;
  }

  getAll(): Observable<Message[]> {
    return of(this.messages);
  }

  get(id: number): Observable<Message | undefined> {
    return of(MESSAGES.find(m => m.id === id));
  }
  
}
