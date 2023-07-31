import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-items',
  templateUrl: './to-do-input-add-items.component.html',
  styleUrls: ['./to-do-input-add-items.component.scss']
})
export class ToDoInputAddItemsComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter(); 

  public addItemTaskList: string = "";

  constructor(){}

  ngOnInit(): void {
  }

  public submitItenTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList)
      this.addItemTaskList = "";
    }
  }

  
}
