import { Component, Input } from '@angular/core';
import { MessageLatest } from 'src/models/message-latest.model';

@Component({
  selector: 'app-user-message-card',
  templateUrl: './user-message-card.component.html',
  styleUrls: ['./user-message-card.component.css']
})
export class UserMessageCardComponent {
  @Input()
  message!: MessageLatest

}
