 import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks:Task[] =[]

  constructor(private Taskservice:TaskService) { }

  ngOnInit(): void {
    this.getTasks()
  }
getTasks(){
  this.Taskservice.getTasks().subscribe(res=>{
      this.tasks=res
      console.log(res,"ytjtyjty")
    }
  )
}
deleteTask(task: Task) {
  this.Taskservice
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
}
toggleReminder(task: Task) {
  task.reminder = !task.reminder;
  this.Taskservice.updateTaskReminder(task).subscribe();
}
}
