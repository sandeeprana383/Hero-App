import { Component, OnInit } from "@angular/core";
import { MessageService } from "../services/messege.service";

@Component({
  selector: "app-messeges",
  templateUrl: "./messeges.component.html",
  styleUrls: ["./messeges.component.scss"]
})
export class MessegesComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
