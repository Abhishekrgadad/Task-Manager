import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/api/tasks';

  constructor(private http: HttpClient) { }

  //Get all tasks
  getTasks(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  //Add a new task
  addTask(task:any): Observable<any>{
    return this.http.get(this.apiUrl, task);
  }

  //update a task
  updateTask(id:string, task: any): Observable<any>{
    
  }
}
