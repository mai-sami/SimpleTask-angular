import { Task } from './../../Task';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {

//  @Input() task:any[]=[]
  constructor() {

   }
   @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
   @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
   @Input() task!:Task

  ngOnInit(): void {
   }
  onDelete(task:any){
this.onDeleteTask.emit(task)
  }
  onToggle(task:any) {
    this.onToggleReminder.emit(task);
  }
}
