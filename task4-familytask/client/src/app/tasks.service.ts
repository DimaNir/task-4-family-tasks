import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) {}

  public allTasks() {
   // console.log('get tasks work');
    return this.http.get('http://localhost:3000/alltasks');
  }

  public allmembers() {
    return this.http.get('http://localhost:3000/members');
  }

  public mama() {
    return this.http.get('http://localhost:3000/mama');
  }
  public papa() {
    return this.http.get('http://localhost:3000/papa');
  }
  public ya() {
    return this.http.get('http://localhost:3000/ya');
  }

  public newTask(task) {
    console.log('new task work');
    console.log(task);
    return this.http.post('http://localhost:3000/addnew', task);
  }
}
