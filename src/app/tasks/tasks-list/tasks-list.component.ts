import { Component, Inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { Taskservice } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private taskservice = Inject(Taskservice);
  selectedFilter = signal<string>('all');
  tasks = this.taskservice.tasks;

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
