import { Component, OnInit } from "@angular/core";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.css"]
})
export class MembersComponent implements OnInit {
  constructor(public tasksService: TasksService) {}

public Members;

  ngOnInit() {
    this.tasksService.allmembers()
      .subscribe(
        res => (this.Members = res),
        err => console.log(err));
    console.log(this.Members);
  }
}



