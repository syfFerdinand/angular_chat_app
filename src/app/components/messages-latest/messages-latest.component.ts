import { Component, EventEmitter,Input,Output } from '@angular/core';
import { MessageLatest } from 'src/models/message-latest.model';
import { User } from 'src/models/user.model';
import { MessageService } from 'src/services/message/message.service';

@Component({
  selector: 'app-messages-latest',
  templateUrl: './messages-latest.component.html',
  styleUrls: ['./messages-latest.component.css']
})
export class MessagesLatestComponent {
  messages!: MessageLatest[]
  @Output() userSelected: EventEmitter<User> = new EventEmitter<User>();
  @Input() height: string =''
  
  constructor(
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.messageService.getAll(1).subscribe(
      data=>{
        this.messages = data
      },
      error=>{
        console.error("error when initiliaze latest message");
      }
    )
  }

  onUserSelected(user: User) {
    this.userSelected.emit(user);
  }
}
