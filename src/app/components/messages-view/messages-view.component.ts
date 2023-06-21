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
  @Input()
  listHeight: string = ""
  userDetailIsVisible = false
  messages: Message[] = []
  message = ""

  constructor(
    private messageService: MessageService
  ) { }

  ngOnChanges() {
    if (this.user != undefined)
      this.messageService.get(this.user.id).subscribe(
        data => {
          // Update the messages array with the new messages
          this.messages = data;
        },
        error => {
          console.error("something is wrong");
          console.error('Error fetching latest messages:', error);
        }
      )
      console.log("on change!")
    // Set up polling to fetch new messages every X seconds
    setInterval(() => {
      if (this.user != undefined)
        this.messageService.get(this.user.id).subscribe(
          data => {
            if (data.length > this.messages.length) {
              // Update the messages array with the new messages
              this.messages = data;
            }
          },
          error => {
            console.error("something is wrong");
            console.error('Error fetching latest messages:', error);
          }
        )
    }, 5000);
  }

  sendMessage() {
    if (this.message != "")
      this.messageService.store(this.message, this.user!.id).subscribe(
        data => {
          this.messageService.get(this.user!.id).subscribe(
            data => {
              this.messages = data
            },
            error => {
              console.error("something is wrong");
            }
          )
          this.message = ''
        }
      )
  }
}
