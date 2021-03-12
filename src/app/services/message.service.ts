import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MOCK_MESSAGES } from '../mock/mock-messages';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message[] = [];

  constructor() {
    this.messages = MOCK_MESSAGES;
  }

  getAll(): Observable<Message[]> {
    return of(this.messages);
  }

  get(id: number): Observable<Message> {
    const message = MOCK_MESSAGES.find(m => m.id === id);
    return message ? of(message) : throwError(`Messaggio con id ${id} non trovato!`);
  }
  
}
