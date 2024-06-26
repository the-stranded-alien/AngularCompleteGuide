import { Component, Input } from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTaskData} from "./task/task.model";
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;
  // @Input() name: string | undefined;
  // private taskService = new TaskService(); // Don't do this as this would create multiple instances of services in different places, use DI instead.
  // private tasksService: TasksService;
  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
  //     dueDate: '2025-12-31'
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Build first prototype',
  //     summary: 'Build a first prototype of the online shop website',
  //     dueDate: '2024-05-31',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Prepare issue template',
  //     summary: 'Prepare and describe an issue template which will help with project management',
  //     dueDate: '2024-06-15',
  //   },
  // ];

  get selectedUserTasks() {
    // return this.tasks.filter(task => task.userId === this.userId);
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   // this.tasks = this.tasks.filter((task) => task.id !== id);
  //   return this.tasksService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  // onCancelAddTask() {
  //   this.isAddingTask = false;
  // }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   // this.tasks.unshift({
  //   //   id: new Date().getTime().toString(),
  //   //   userId: this.userId,
  //   //   title: taskData.title,
  //   //   summary: taskData.summary,
  //   //   dueDate: taskData.date
  //   // });
  //   this.tasksService.addTask(taskData, this.userId);
  //   this.isAddingTask = false;
  // }
}
