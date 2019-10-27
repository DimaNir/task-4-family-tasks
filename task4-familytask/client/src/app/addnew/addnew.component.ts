import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  constructor(public tasksService: TasksService, public fb: FormBuilder) { }

  public newTask;
  public mama;
  public papa;
  public ya;


  ngOnInit() {
    this.tasksService.mama()
    .subscribe(
      res => this.mama = res,
      err => console.log(err));

    this.tasksService.papa()
    .subscribe(
      res => this.papa = res,
      err => console.log(err));

    this.tasksService.ya()
    .subscribe(
      res => this.ya = res,
      err => console.log(err));

   
    this.newTask = this.fb.group({
      description: ['', Validators.required],
      date: ['', Validators.required],
      member: ['', Validators.required]
    });

}
 public addTask() {

      this.tasksService.newTask(this.newTask.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      );}
}
