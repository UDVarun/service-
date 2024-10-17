import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

Injectable({
  providedIn: 'root',
});
export class Taskservice {
 private tasks = signal<Task[]>([]);
 allTassks= this.tasks.asReadonly()

  addtask(taskdata: { title: string; description: string }) {
    const newtask: Task = {
      ...taskdata,
      id : Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldtask) => [...oldtask, newtask]);
  }
}
