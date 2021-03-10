import { Message } from "../model/message";

export const MESSAGES: Message[] = [
    { id: new Date().getTime(), title: 'Titolo messaggio A', message: 'Messaggio A' },
    { id: new Date().getTime() + 1, title: 'Titolo messaggio B', message: 'Messaggio B' },
    { id: new Date().getTime() + 2, title: 'Titolo messaggio C', message: 'Messaggio C' },
    { id: new Date().getTime() + 3, title: 'Titolo messaggio D', message: 'Messaggio D' },
    { id: new Date().getTime() + 4, title: 'Titolo messaggio E', message: 'Messaggio E' }
];