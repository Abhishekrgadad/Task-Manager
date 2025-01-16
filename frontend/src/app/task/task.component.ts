import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Fetch tasks on initialization
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  // Add a task
  addTask(title: string): void {
    const newTask = { title, completed: false };
    this.taskService.addTask(newTask).subscribe(task => {
      this.tasks.push(task);
    });
  }

  // Delete a task
  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task._id !== id);
    });
  }

  // Toggle task completion status
  toggleCompletion(id: string): void {
    const taskToUpdate = this.tasks.find(task => task._id === id);
    taskToUpdate.completed = !taskToUpdate.completed;
    this.taskService.updateTask(id, taskToUpdate).subscribe();
  }
}
