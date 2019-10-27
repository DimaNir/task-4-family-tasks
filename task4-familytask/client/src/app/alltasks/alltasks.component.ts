import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { MembersComponent } from '../members/members.component';


@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {

  public Tasks;

  constructor(public tasksService: TasksService) { }

  public ngOnInit() {

    this.tasksService.allTasks()
    .subscribe(
      res => this.Tasks = res,
      err => console.log(err));
  }

}
