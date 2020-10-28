import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(
    // 必须公共属性，因为要在模板中绑定到它
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

}
