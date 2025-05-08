import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Task } from 'src/app/core/models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  taskForm!: FormGroup;
  tasks: Task[] = [];
  isVisibleModal = false;
  taskSelected!: Task;
  titleTaskEditable!: string;

  constructor(private fb: FormBuilder, private nzMessage: NzMessageService) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      task: ['', []],
    });
    this.getTaskLocalStorage();
  }

  get addTaskControl() {
    return this.taskForm.controls['task'] as FormGroup;
  }

  addTask(): void {
    const newTask: Task = {
      uuid: uuidv4(),
      title: this.addTaskControl.value,
    }
    this.tasks = [...this.tasks, newTask];
    this.taskForm.controls['task'].patchValue("");
    this.nzMessage.create("success", `La tarea ha sido agregada correctamente.`);
    this.saveTasksLocalStorage();
  }

  showEditTaskModal(task: Task): void {
    this.isVisibleModal = true;
    this.taskSelected = task;
    this.titleTaskEditable = task.title;
  }

  saveTaskEdit(): void {
    this.isVisibleModal = false;
    this.taskSelected.title = this.titleTaskEditable;
    let index = this.tasks.findIndex(task => task.uuid === this.taskSelected.uuid);
    if(index !== 1) {
      this.tasks[index] = this.taskSelected;
      this.nzMessage.create("success", `La tarea seleccionada ha sido actualizada correctamente.`);
      this.saveTasksLocalStorage();
    }
  }

  cancelTaskChanges(): void {
    this.isVisibleModal = false;
  }

  deleteTaskByUUID(uuidSelected: string): void {
    this.tasks = this.tasks.filter(task => task.uuid != uuidSelected);
    this.nzMessage.create("success", `La tarea seleccionada ha sido eliminada correctamente.`);
    this.saveTasksLocalStorage();
  }

  cleanAllTasks(): void {
    this.tasks = [];
    this.nzMessage.create("success", `Todas las tareas ha sido eliminadas correctamente.`);
    this.saveTasksLocalStorage();
  }

  saveTasksLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTaskLocalStorage(): void {
    let dataLocalStorage = localStorage.getItem('tasks');
    if(dataLocalStorage != null) {
      this.tasks = JSON.parse(dataLocalStorage);
    }
  }

}
