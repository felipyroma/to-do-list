import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoButtonDeleteAllComponent } from './to-do-button-delete-all.component';

describe('ToDoButtonDeleteAllComponent', () => {
  let component: ToDoButtonDeleteAllComponent;
  let fixture: ComponentFixture<ToDoButtonDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoButtonDeleteAllComponent]
    });
    fixture = TestBed.createComponent(ToDoButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
