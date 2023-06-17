import { Component, Input } from '@angular/core';
import { Message } from 'src/models/message.model';
import { User } from 'src/models/user.model';
import { MessageService } from 'src/services/message/message.service';

@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['./messages-view.component.css']
})
export class MessagesViewComponent {
  @Input()
  user: User | undefined
  userDetailIsVisible = false
  messages!: Message[]
  constructor(
    private messageService: MessageService
  ){}

  ngOnChanges(){
    if(this.user != undefined)
      this.messageService.get(1,this.user.id).subscribe(
        data=>{
          this.messages = data
        },
        error=> {
          console.error("something is wrong");
          
        }
      )
  }
}
