import { Component, Input } from '@angular/core';
import { Message, messages } from 'src/models/message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  @Input()
  messages!: Message[] 
}
