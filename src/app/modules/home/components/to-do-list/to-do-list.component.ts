import { Component, DoCheck } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1)
  }

  public deleteAll(): void {
    const confirm = window.confirm("Você deseja realmente deletar tudo?")
    if (confirm) this.taskList = []
  }

  public setEmitTaskList(event: string) {
      this.taskList.push({ 'task': event, 'checked': false })
  }

  public validationInput(event: string, index: number) {
    if(!event.length){
      const confirm = window.confirm("A Task está vazia, deseja deletar?")

      if(confirm){
        this.deleteItemTaskList(index)
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

}
