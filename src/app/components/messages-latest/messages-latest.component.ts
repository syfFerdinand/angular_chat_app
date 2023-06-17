import { Component } from '@angular/core';
import { MessageLatest } from 'src/models/message-latest.model';
import { MessageService } from 'src/services/message/message.service';

@Component({
  selector: 'app-messages-latest',
  templateUrl: './messages-latest.component.html',
  styleUrls: ['./messages-latest.component.css']
})
export class MessagesLatestComponent {
  messages!: MessageLatest[]

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
}
